import logging

from odoo import fields, http
from odoo.http import request


_logger = logging.getLogger(__name__)


class ObmsFinanceController(http.Controller):
    @staticmethod
    def _sum(model, domain, field):
        result = model._read_group(domain=domain, aggregates=[f"{field}:sum"])
        value = result[0][0] if result else 0.0
        return value or 0.0

    @classmethod
    def _finance_snapshot(cls):
        env = request.env
        company = env.company
        today = fields.Date.context_today(env.user)
        year_start = today.replace(month=1, day=1)
        moves = env["account.move"].with_company(company)
        lines = env["account.move.line"].with_company(company)
        company_domain = [("company_id", "=", company.id)]

        receivable_domain = company_domain + [
            ("state", "=", "posted"),
            ("move_type", "in", ("out_invoice", "out_refund")),
            ("payment_state", "not in", ("paid", "reversed")),
        ]
        payable_domain = company_domain + [
            ("state", "=", "posted"),
            ("move_type", "in", ("in_invoice", "in_refund")),
            ("payment_state", "not in", ("paid", "reversed")),
        ]
        overdue_domain = receivable_domain + [
            ("invoice_date_due", "<", today),
        ]
        overdue_bills_domain = payable_domain + [
            ("invoice_date_due", "<", today),
        ]
        posted_lines = company_domain + [
            ("parent_state", "=", "posted"),
            ("date", ">=", year_start),
            ("date", "<=", today),
        ]

        receivable = cls._sum(moves, receivable_domain, "amount_residual_signed")
        payable = -cls._sum(moves, payable_domain, "amount_residual_signed")
        overdue_receivable = cls._sum(moves, overdue_domain, "amount_residual_signed")
        overdue_payable = -cls._sum(moves, overdue_bills_domain, "amount_residual_signed")
        income = -cls._sum(
            lines,
            posted_lines + [("account_id.internal_group", "=", "income")],
            "balance",
        )
        expenses = cls._sum(
            lines,
            posted_lines + [("account_id.internal_group", "=", "expense")],
            "balance",
        )
        cash = cls._sum(
            lines,
            company_domain + [
                ("parent_state", "=", "posted"),
                ("account_id.account_type", "=", "asset_cash"),
            ],
            "balance",
        )

        overdue_moves = moves.search(
            overdue_domain,
            order="invoice_date_due asc, amount_residual_signed desc",
            limit=5,
        )
        overdue_items = [
            {
                "id": move.id,
                "number": move.name or "Draft",
                "partner": move.commercial_partner_id.name or "Customer",
                "due_date": move.invoice_date_due.isoformat(),
                "amount": move.amount_residual_signed or 0.0,
            }
            for move in overdue_moves
        ]

        return {
            "company": company.name,
            "currency": company.currency_id.name,
            "currency_symbol": company.currency_id.symbol,
            "year": today.year,
            "receivable": receivable,
            "payable": payable,
            "overdue_receivable": overdue_receivable,
            "overdue_payable": overdue_payable,
            "income_ytd": income,
            "expenses_ytd": expenses,
            "net_profit_ytd": income - expenses,
            "cash_balance": cash,
            "customer_invoices": moves.search_count(
                company_domain + [("move_type", "=", "out_invoice")]
            ),
            "vendor_bills": moves.search_count(
                company_domain + [("move_type", "=", "in_invoice")]
            ),
            "draft_documents": moves.search_count(
                company_domain + [
                    ("state", "=", "draft"),
                    ("move_type", "!=", "entry"),
                ]
            ),
            "overdue_items": overdue_items,
        }

    @http.route("/obms/finance/summary", type="jsonrpc", auth="user", methods=["POST"])
    def finance_summary(self):
        try:
            return {"ok": True, "data": self._finance_snapshot()}
        except Exception as error:
            _logger.warning(
                "OBMS finance summary failed (error=%s)",
                type(error).__name__,
                exc_info=True,
            )
            return {
                "ok": False,
                "message": "Finance data is unavailable or you do not have accounting access.",
            }
