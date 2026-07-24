FROM python:3.12-slim-bookworm

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PIP_NO_CACHE_DIR=1

RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential gcc libffi-dev libjpeg62-turbo-dev libldap2-dev \
    libmagic1 libpq-dev libsasl2-dev libssl-dev libxml2-dev libxslt1-dev \
    node-less postgresql-client wkhtmltopdf zlib1g-dev \
    && rm -rf /var/lib/apt/lists/*

RUN useradd --create-home --uid 10001 obms && mkdir -p /var/lib/obms \
    && chown obms:obms /var/lib/obms

WORKDIR /opt/obms
COPY requirements.txt ./
RUN pip install --upgrade pip setuptools wheel && pip install -r requirements.txt

COPY --chown=obms:obms . .
RUN chmod +x /opt/obms/railway-entrypoint.py

USER obms
EXPOSE 8069
ENTRYPOINT ["python3", "/opt/obms/railway-entrypoint.py"]
