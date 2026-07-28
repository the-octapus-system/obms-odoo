import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import oisImg from "@/assets/ois-network.png";
import { Container, Section } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/site/JsonLd";
import { RelatedLinks } from "@/components/site/RelatedLinks";
import { site } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";
import { buildMeta, breadcrumbSchema } from "@/lib/seo";

export const Route = createFileRoute("/ois")({
  head: () => buildMeta({
    title: "OIS — The Octapus Intelligent System for Coordinated Business AI",
    description: "OIS is the Octapus vision for one intelligent layer across your business — specialized AI agents that identify issues, organize work and act on authorized business activity.",
    path: "/ois",
    ogType: "article",
    image: oisImg,
    keywords: ["OIS", "Octapus Intelligent System", "AI agents", "business AI UAE", "AI orchestration", "voice AI", "WhatsApp AI"],
  }),
  component: OIS,
});


function OIS() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "TechArticle",
        headline: "OIS — Octapus Intelligent System",
        description: "One intelligent layer across your business — specialized AI agents coordinating authorized business activity.",
        image: oisImg,
        author: { "@type": "Organization", name: site.legalName },
        publisher: { "@type": "Organization", name: site.legalName, url: "/" },
        url: "/ois",
      }} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "OIS", path: "/ois" }])} />
      <section className="bg-[var(--color-surface-dark)] dark">

      <Container className="pt-20 pb-14">
        <div className="text-eyebrow mb-6 text-primary-glow">OIS</div>
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.02] max-w-3xl text-foreground">
          One intelligent layer, coordinating the whole business.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          OIS is the Octapus vision for coordinating authorized business activity through specialized AI agents — helping teams identify issues, organize work and act through text or voice.
        </p>
      </Container>
      <Container className="pb-20">
        <div className="rounded-3xl overflow-hidden border border-border">
          <img src={oisImg} alt="Specialized AI agents connected around one business core" loading="lazy" className="w-full h-auto" />
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3 text-muted-foreground">
          {[
            { k: "Coordinated", v: "OIS is designed as a coordination layer between people and the systems they already use." },
            { k: "Authorized", v: "Actions happen inside boundaries set by your organization — not around them." },
            { k: "Specialized", v: "Purpose-built agents for concrete business tasks, not one generic assistant." },
          ].map((c) => (
            <div key={c.k} className="rounded-2xl border border-border p-6">
              <div className="text-eyebrow mb-2 text-primary-glow">{c.k}</div>
              <p className="text-sm leading-relaxed text-foreground">{c.v}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground max-w-xl">
            OIS is under active exploration. We describe what the system is designed to do — not more.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-full bg-primary hover:opacity-90"
            onClick={() => trackEvent("ois_external_click", { source: "ois_page" })}
          >
            <a href={site.oisExternalUrl} target="_blank" rel="noopener noreferrer">
              Experience the OIS Concept <ExternalLink className="ml-1 size-4" />
            </a>
          </Button>
        </div>
      </Container>
    </section>

    <RelatedLinks
      title="Systems adjacent to the OIS vision."
      items={[
        { to: "/products", label: "Products", detail: "The Octapus systems that OIS coordinates." },
        { to: "/services", label: "AI & Data", detail: "How Octapus designs AI agents around your operation." },
        { to: "/book", label: "Book a strategy call", detail: "Talk through what OIS could look like for your business." },
      ]}
    />
    </>
  );
}


