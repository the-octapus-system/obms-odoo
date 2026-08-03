/** @odoo-module **/

import { rpc } from "@web/core/network/rpc";
import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";
import { standardActionServiceProps } from "@web/webclient/actions/action_service";
import { Component, onWillStart, useState } from "@odoo/owl";


export class ObmsFinanceDashboard extends Component {
    static template = "obms_accountant_ai.FinanceDashboard";
    static props = { ...standardActionServiceProps };

    setup() {
        this.action = useService("action");
        this.state = useState({ loading: true, error: null, data: null });
        this.loadPromise = null;
        onWillStart(() => this.load());
    }

    async load() {
        if (this.loadPromise) {
            return this.loadPromise;
        }
        this.state.loading = true;
        this.state.error = null;
        this.loadPromise = (async () => {
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
        return this.loadPromise;
    }

    money(value) {
        if (!this.state.data) {
            return "—";
        }
        const amount = Number.isFinite(Number(value)) ? Number(value) : 0;
        try {
            return new Intl.NumberFormat(undefined, {
                style: "currency",
                currency: this.state.data.currency,
                maximumFractionDigits: 2,
            }).format(amount);
        } catch {
            // Keep the finance dashboard explicit and locale-independent for UAE users.
            return `AED ${amount.toFixed(2)}`;
        }
    }

    openAction(xmlId) {
        return this.action.doAction(xmlId);
    }

    openDiscuss() {
        window.location.assign("/odoo/discuss");
    }
}

registry.category("actions").add("obms.finance_dashboard", ObmsFinanceDashboard);
