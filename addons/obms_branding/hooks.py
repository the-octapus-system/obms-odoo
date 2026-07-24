import os


def post_init_hook(env):
    """Replace the framework's default administrator password on first install."""
    password = os.environ.get("OBMS_INITIAL_ADMIN_PASSWORD")
    if not password:
        raise RuntimeError("OBMS_INITIAL_ADMIN_PASSWORD is required for first installation")
    env.ref("base.user_admin").write({"password": password})

