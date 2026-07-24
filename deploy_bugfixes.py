from pathlib import Path


ROOT = Path("/opt/obms/src")


def replace(path, old, new):
    target = ROOT / path
    text = target.read_text()
    if old not in text:
        raise RuntimeError(f"Expected source text missing in {path}")
    target.write_text(text.replace(old, new, 1))


replace("railway-entrypoint.py", "import os\nimport sys", "import os\nimport re\nimport sys")
replace(
    "railway-entrypoint.py",
    'database_name = unquote(database.path.lstrip("/"))\n',
    '''database_name = unquote(database.path.lstrip("/"))

if not database_name or "/" in database_name:
    raise SystemExit("DATABASE_URL must include exactly one database name")
if not database.username:
    raise SystemExit("DATABASE_URL must include a database user")
if any(character in admin_password for character in "\\r\\n"):
    raise SystemExit("OBMS_ADMIN_PASSWORD cannot contain line breaks")
try:
    port_number = int(port)
except ValueError as error:
    raise SystemExit("PORT must be a number between 1 and 65535") from error
if not 1 <= port_number <= 65535:
    raise SystemExit("PORT must be a number between 1 and 65535")
''',
)
replace("railway-entrypoint.py", '"--http-port", port,', '"--http-port", str(port_number),')
replace("railway-entrypoint.py", 'f"^{database_name}$",', 'f"^{re.escape(database_name)}$",')

controller = "addons/obms_accountant_ai/controllers/main.py"
replace(controller, "_logger = logging.getLogger(__name__)\nclass", "_logger = logging.getLogger(__name__)\n\n\n+class")
replace(controller, "return result[0][0] if result else 0.0", "value = result[0][0] if result else 0.0\n        return value or 0.0")
replace(controller, '"number": move.name,', '"number": move.name or "Draft",')
replace(controller, '"amount": move.amount_residual_signed,', '"amount": move.amount_residual_signed or 0.0,')

js = "addons/obms_accountant_ai/static/src/finance_dashboard.js"
replace(js, 'this.state = useState({ loading: true, error: null, data: null });', 'this.state = useState({ loading: true, error: null, data: null });\n        this.loadPromise = null;')
replace(js, '''        if (this.state.loading && this.state.data) {
            return;
        }''', '''        if (this.loadPromise) {
            return this.loadPromise;
        }''')
replace(js, '''        try {
            const response = await rpc("/obms/finance/summary", {});
            if (response?.ok && response.data) {
                this.state.data = response.data;
            } else {
                this.state.error = response?.message || "Finance data is unavailable.";
            }
        } catch {
            this.state.error = "Unable to connect to the finance service. Please try again.";
        } finally {
            this.state.loading = false;
        }''', '''        this.loadPromise = (async () => {
            try {
                const response = await rpc("/obms/finance/summary", {});
                if (response?.ok && response.data && response.data.currency) {
                    this.state.data = response.data;
                } else {
                    this.state.error = response?.message || "Finance data is unavailable.";
                }
            } catch {
                this.state.error = "Unable to connect to the finance service. Please try again.";
            } finally {
                this.state.loading = false;
                this.loadPromise = null;
            }
        })();
        return this.loadPromise;''')
replace(js, '''        return new Intl.NumberFormat(undefined, {
            style: "currency",
            currency: this.state.data.currency,
            maximumFractionDigits: 2,
        }).format(value || 0);''', '''        const amount = Number.isFinite(Number(value)) ? Number(value) : 0;
        try {
            return new Intl.NumberFormat(undefined, {
                style: "currency",
                currency: this.state.data.currency,
                maximumFractionDigits: 2,
            }).format(amount);
        } catch {
            return `${this.state.data.currency_symbol || ""} ${amount.toFixed(2)}`.trim();
        }''')

xml = "addons/obms_accountant_ai/static/src/finance_dashboard.xml"
replace(xml, 'state.loading" class=', 'state.loading &amp;&amp; !state.data" class=')
replace(xml, 'state.error" class="alert alert-danger', 'state.error &amp;&amp; !state.data" class="alert alert-danger')
replace(xml, '                <t t-else="">\n                    <section', '''                <t t-else="">
                    <div t-if="state.error" class="alert alert-warning d-flex align-items-center justify-content-between gap-3">
                        <span><t t-esc="state.error"/> Showing the most recent available data.</span>
                        <button class="btn btn-outline-warning btn-sm" t-on-click="load">Try again</button>
                    </div>
                    <section''')
