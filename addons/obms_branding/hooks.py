import os


def post_init_hook(env):
    """Set OBMS first-install defaults for authentication and UAE accounting."""
    password = os.environ.get("OBMS_INITIAL_ADMIN_PASSWORD")
    if not password:
        raise RuntimeError("OBMS_INITIAL_ADMIN_PASSWORD is required for first installation")
    env.ref("base.user_admin").write({"password": password})
    aed = env.ref("base.AED", raise_if_not_found=False)
    if aed:
        env.company.write({"currency_id": aed.id})
