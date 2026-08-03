{
    "name": "OBMS Branding",
    "summary": "OCTAPUS BUSINESS MANAGEMENT SYSTEM product branding",
    "version": "19.0.1.0.0",
    "category": "Hidden",
    "author": "Octapus",
    "license": "LGPL-3",
    "depends": ["web"],
    "data": [
        "data/branding.xml",
        "views/webclient_templates.xml",
    ],
    "assets": {
        "web.assets_backend": [
            "obms_branding/static/src/scss/obms.scss",
            "obms_branding/static/src/js/obms_branding.js",
        ],
        "web.assets_frontend": [
            "obms_branding/static/src/scss/obms.scss",
            "obms_branding/static/src/js/obms_branding.js",
        ],
    },
    "installable": True,
    "application": False,
    "auto_install": True,
    "post_init_hook": "post_init_hook",
}
