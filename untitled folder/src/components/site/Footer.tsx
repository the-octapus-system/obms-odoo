import { Link } from "@tanstack/react-router";
import { Wordmark } from "./Wordmark";
import { site } from "@/lib/site";

const columns = [
  {
    label: "Company",
    links: [
      { to: "/about", text: "About" },
      { to: "/careers", text: "Careers" },
      { to: "/blog", text: "Blog" },
      { to: "/contact", text: "Contact" },
    ],
  },
  {
    label: "Products",
    links: [
      { to: "/products", text: "All products" },
      { to: "/products/obms-erp", text: "o.b.m.s ERP" },
      { to: "/products/custom-crm", text: "Custom CRM" },
      { to: "/products/custom-ai", text: "Custom AI" },
      { to: "/products/ois", text: "OIS" },
    ],
  },
  {
    label: "Services",
    links: [
      { to: "/services", text: "All services" },
      { to: "/industries", text: "Industries" },
      { to: "/support", text: "Support" },
      { to: "/book", text: "Book a strategy call" },
    ],
  },
  {
    label: "Legal",
    links: [
      { to: "/privacy", text: "Privacy" },
      { to: "/terms", text: "Terms" },
      { to: "/sitemap", text: "Sitemap" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="border-t hairline bg-[var(--color-surface)]">
      <div className="container-page py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-6">
          <div className="md:col-span-2 space-y-5">
            <Wordmark />
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              {site.tagline}
            </p>
            <p className="text-xs text-muted-foreground/80">{site.origin}</p>
          </div>
          {columns.map((col) => (
            <div key={col.label}>
              <div className="text-eyebrow mb-4">{col.label}</div>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-sm text-foreground/80 hover:text-foreground">
                      {l.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 text-sm text-muted-foreground">
          <div className="space-y-1">
            <div>Dubai — {site.addresses[0].line}</div>
            <div>Ajman — {site.addresses[1].line}</div>
          </div>
          <div className="md:text-right space-y-1">
            <div>General {site.phones.general}</div>
            <div>Sales {site.phones.sales} · Support {site.phones.support}</div>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 border-t hairline pt-6 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</div>
          <div>{site.emails.info} · {site.emails.sales}</div>
        </div>
      </div>
    </footer>
  );
}
