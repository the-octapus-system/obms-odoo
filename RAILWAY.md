# OBMS on Railway

The service requires:

1. A Railway PostgreSQL service exposed to the app as `DATABASE_URL`.
2. A generated secret named `OBMS_ADMIN_PASSWORD`.
3. A persistent volume mounted at `/var/lib/obms` for attachments and sessions.
4. A public Railway domain on port `8069` (Railway supplies `PORT`).

Do not expose the database publicly. Back up both PostgreSQL and the volume.

