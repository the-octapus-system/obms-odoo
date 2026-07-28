import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/site/Section";
import { JsonLd } from "@/components/site/JsonLd";
import { RelatedLinks } from "@/components/site/RelatedLinks";
import { products } from "@/lib/site";
import { buildMeta, breadcrumbSchema, SITE_NAME } from "@/lib/seo";

export const Route = createFileRoute("/products/")({
  head: () => buildMeta({
    title: "Products — The Octapus Software, ERP, CRM and AI Ecosystem",
    description: "Explore the Octapus product ecosystem: O.B.M.S ERP, custom CRM, HUB8, ALGORITHEM, Lead Intelligence, Content Manager, Odoo Custom ERP, Custom AI and the OIS vision.",
    path: "/products",
    ogType: "website",
    keywords: ["Octapus products", "OBMS ERP", "custom CRM UAE", "AI products UAE", "Odoo Dubai", "business automation platform"],
  }),
  component: ProductsIndex,
});

function ProductsIndex() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: `${SITE_NAME} Products`,
        url: "/products",
        hasPart: products.map((p) => ({
          "@type": "SoftwareApplication",
          name: p.name,
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description: p.headline,
          url: `/products/${p.slug}`,
        })),
      }} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Products", path: "/products" }])} />

      <Section
        eyebrow="Products"
        title="The Systems Octapus Builds — And Operates With You."
        titleAs="h1"
        intro="Every product exists to remove one specific kind of friction. Choose one to see the customer, the problem and the outcome."
      >
        <div className="grid gap-px bg-hairline border hairline rounded-2xl overflow-hidden md:grid-cols-2">
          {products.map((p) => (
            <Link key={p.slug} to="/products/$slug" params={{ slug: p.slug }} className="group bg-background p-8 hover:bg-[var(--color-primary-soft)]/40 transition-colors">
              <div className="text-eyebrow mb-4">{p.tags.join(" · ")}</div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{p.name}</h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.headline}</p>
              <div className="mt-6 inline-flex items-center gap-1 text-sm text-primary">
                See product <ArrowUpRight className="size-4" />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <RelatedLinks
        title="Beyond the product list."
        items={[
          { to: "/services", label: "Services", detail: "The engineering, AI and operate capabilities behind every product." },
          { to: "/industries", label: "Industries", detail: "Sectors where these products already run." },
          { to: "/book", label: "Book a strategy call", detail: "Discuss which system fits your operation." },
        ]}
      />
    </>
  );
}
