#!/usr/bin/env python3
"""Translate Railway's DATABASE_URL into safe Odoo command-line options."""

import os
import re
import sys
import tempfile
from urllib.parse import unquote, urlparse


def required(name):
    value = os.environ.get(name)
    if not value:
        raise SystemExit(f"Missing required environment variable: {name}")
    return value


database = urlparse(required("DATABASE_URL"))
if database.scheme not in {"postgres", "postgresql"}:
    raise SystemExit("DATABASE_URL must be a PostgreSQL URL")

port = os.environ.get("PORT", "8069")
admin_password = required("OBMS_ADMIN_PASSWORD")
database_name = unquote(database.path.lstrip("/"))

if not database_name or "/" in database_name:
    raise SystemExit("DATABASE_URL must include exactly one database name")
if not database.username:
    raise SystemExit("DATABASE_URL must include a database user")
if any(character in admin_password for character in "\r\n"):
    raise SystemExit("OBMS_ADMIN_PASSWORD cannot contain line breaks")
try:
    port_number = int(port)
except ValueError as error:
    raise SystemExit("PORT must be a number between 1 and 65535") from error
if not 1 <= port_number <= 65535:
    raise SystemExit("PORT must be a number between 1 and 65535")

config = tempfile.NamedTemporaryFile(
    mode="w", prefix="obms-", suffix=".conf", delete=False
)
config.write(
    "[options]\n"
    f"admin_passwd = {admin_password}\n"
    "list_db = False\n"
)
config.close()
os.chmod(config.name, 0o600)

command = [
    sys.executable,
    "/opt/obms/odoo-bin",
    "--config", config.name,
    "--http-port", str(port_number),
    "--http-interface", "0.0.0.0",
    "--proxy-mode",
    "--data-dir", "/var/lib/obms",
    "--addons-path", "/opt/obms/odoo/addons,/opt/obms/addons",
    "--db_host", database.hostname or "localhost",
    "--db_port", str(database.port or 5432),
    "--db_user", unquote(database.username or ""),
    "--db_password", unquote(database.password or ""),
    "--database", database_name,
    "--db-filter", f"^{re.escape(database_name)}$",
    "--without-demo", "true",
    "--init", "base,web,obms_branding,obms_accountant_ai",
]

if os.environ.get("PGSSLMODE"):
    command.extend(["--db_sslmode", os.environ["PGSSLMODE"]])

if os.environ.get("OBMS_UPDATE_MODULES"):
    command.extend(["--update", os.environ["OBMS_UPDATE_MODULES"]])

if os.environ.get("OBMS_STOP_AFTER_INIT") == "1":
    command.append("--stop-after-init")

os.execv(command[0], command)
