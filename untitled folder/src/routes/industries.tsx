import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { JsonLd } from "@/components/site/JsonLd";
import { RelatedLinks } from "@/components/site/RelatedLinks";
import { industries } from "@/lib/site";
import { buildMeta, breadcrumbSchema } from "@/lib/seo";

export const Route = createFileRoute("/industries")({
  head: () => buildMeta({
    title: "Industries We Serve — Software, ERP, CRM and AI Across 12+ Sectors",
    description: "Octapus builds software, ERP, CRM and AI systems for construction, healthcare, retail, education, finance, manufacturing, hospitality, real estate, logistics, e-commerce and professional services.",
    path: "/industries",
    ogType: "website",
    keywords: ["ERP by industry", "custom software industries", "construction software UAE", "healthcare software UAE", "retail ERP", "manufacturing software"],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Industries served by Octapus",
        itemListElement: industries.map((name, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name,
        })),
      }} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Industries", path: "/industries" }])} />

      <Section
        eyebrow="Industries"
        title="Sectors Where Octapus Systems Already Run."
        titleAs="h1"
        intro="We describe what we actually do rather than pretend equal expertise everywhere. Regulated industries receive extra diligence before we take on the work."
      />
      <Section className="!pt-0">
        <div className="grid gap-px bg-hairline border hairline rounded-2xl overflow-hidden grid-cols-2 md:grid-cols-3">
          {industries.map((i) => (
            <div key={i} className="bg-background px-6 py-8">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">{i}</h3>
              <p className="mt-2 text-sm text-muted-foreground">Relevant Octapus use cases available on request.</p>
            </div>
          ))}
        </div>
      </Section>

      <RelatedLinks
        title="Connect the industry to a system."
        items={[
          { to: "/products", label: "Products", detail: "ERP, CRM, AI and custom systems already delivered across sectors." },
          { to: "/services", label: "Services", detail: "How we design, build and operate for your sector." },
          { to: "/book", label: "Book a strategy call", detail: "Discuss the specifics of your industry with the Octapus team." },
        ]}
      />
    </>
  );
}
