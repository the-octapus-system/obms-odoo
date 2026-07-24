{
    "name": "OBMS Accounts & Finance",
    "summary": "Unified accounts and finance dashboard for OBMS",
    "version": "19.0.1.0.0",
    "category": "Productivity",
    "author": "Octapus",
    "license": "LGPL-3",
    "depends": ["web", "account"],
    "data": ["views/accountant_ai_views.xml"],
    "assets": {
        "web.assets_backend": [
            "obms_accountant_ai/static/src/finance_dashboard.js",
            "obms_accountant_ai/static/src/finance_dashboard.xml",
            "obms_accountant_ai/static/src/finance_dashboard.scss",
        ],
    },
    "installable": True,
    "application": True,
    "auto_install": True,
}
