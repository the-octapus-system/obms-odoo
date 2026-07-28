import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, ExternalLink, Check, X, Sparkles, Zap, Shield, Activity, MessageSquare, FileText, BarChart3, Bot, Cpu, Workflow, Star } from "lucide-react";
import heroImg from "@/assets/hero-laptop.png";
import oisAnimationAsset from "@/assets/ois-animation.mp4.asset.json";
import { Container, Section } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/site/JsonLd";
import { ThemeToggle } from "@/components/site/ThemeToggle";
import { site, products, services, industries, capabilities, processStages, stats, comparison, aiCapabilities, techStack, testimonials, faqs } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { buildMeta, breadcrumbSchema } from "@/lib/seo";


export const Route = createFileRoute("/")({
  head: () => ({
    ...buildMeta({
      title: "Octapus — Engineering Intelligent Software That Powers Modern Business",
      description: "Octapus is the UAE software, AI and business-systems partner behind custom ERP, CRM, automation and intelligent platforms for startups and growing companies. One team. One roadmap. One connected operation.",
      path: "/",
      ogType: "website",
      image: heroImg,
      keywords: ["Octapus", "UAE software company", "custom ERP UAE", "custom CRM Dubai", "AI development UAE", "business automation", "Odoo Dubai", "software agency UAE"],
    }),
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: heroImg, fetchpriority: "high" } as unknown as Record<string, string>,
    ],
  }),
  component: Home,
});


function Home() {
  return (
    <>
      {/* Floating bulb toggle for mobile — visible at the top-right of the landing page */}
      <div className="fixed top-3 right-3 z-50 md:hidden">
        <ThemeToggle className="glass-card border hairline bg-background/80 backdrop-blur size-10 hover:bg-accent/50" />
      </div>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Octapus",
          url: "/",
          publisher: { "@type": "Organization", name: site.legalName },
          potentialAction: {
            "@type": "SearchAction",
            target: "/sitemap?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Octapus Products",
          itemListElement: products.slice(0, 8).map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `/products/${p.slug}`,
            name: p.name,
          })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }])} />
      <Hero />

      <TrustBar />
      <StatsBand />
      <BrandProposition />
      <ProductsShowcase />
      <WhyChooseUs />
      <AICapabilitiesSection />
      <OISFeature />
      <ServicesGrid />
      <TechStackSection />
      <StartupSection />
      <IndustriesBand />
      <ProcessSection />
      <Testimonials />
      <FAQSection />
      <FinalConversion />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b hairline">
      <div className="absolute inset-0 aurora-bg opacity-70" aria-hidden />
      <div className="absolute inset-0 grid-canvas opacity-40" aria-hidden />
      <Container className="relative pt-16 pb-16 md:pt-24 md:pb-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10 items-center">
          <div className="lg:col-span-6 reveal">
            <div className="inline-flex items-center gap-2 rounded-full border hairline glass-card px-3 py-1 mb-6">
              <span className="size-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium tracking-wide">UAE · Software, AI & Business Systems</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.02]">
              Every moving part of your business, <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">running as one system.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Octapus designs, builds and operates the software, AI and integrations that turn disconnected tools into one intelligent operation — engineered in the UAE for companies that intend to scale.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="rounded-full px-6 shadow-lg shadow-primary/20" onClick={() => trackEvent("strategy_call_click", { source: "hero" })}>
                <Link to="/book">Book a Strategy Call <ArrowRight className="ml-1 size-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-6">
                <Link to="/products">Explore our systems</Link>
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { k: "120+", v: "Systems shipped" },
                { k: "12+", v: "Industries" },
                { k: "98%", v: "Retention" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="text-2xl md:text-3xl font-display font-semibold tracking-tight">{s.k}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 relative reveal" style={{ animationDelay: "120ms" }}>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border hairline bg-background shadow-2xl shadow-primary/10">
              <img
                src={heroImg}
                alt="Octapus connected business dashboard on a premium laptop"
                width={1600}
                height={1104}
                className="size-full object-cover"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-transparent" aria-hidden />
            </div>

            {/* Floating glass cards */}
            <div className="hidden md:flex absolute -left-6 top-10 glass-card rounded-2xl p-4 float-slow shadow-xl min-w-[200px]">
              <div className="flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary"><Activity className="size-5" /></div>
                <div>
                  <div className="text-xs text-muted-foreground">Live systems</div>
                  <div className="text-sm font-semibold">All operations nominal</div>
                </div>
              </div>
            </div>
            <div className="hidden md:flex absolute -right-4 bottom-8 glass-card rounded-2xl p-4 float-slow shadow-xl min-w-[220px]" style={{ animationDelay: "1.2s" }}>
              <div className="flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary"><Sparkles className="size-5" /></div>
                <div>
                  <div className="text-xs text-muted-foreground">AI Agent</div>
                  <div className="text-sm font-semibold">Reconciled 214 records</div>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex absolute -bottom-6 left-16 glass-card rounded-2xl px-4 py-3 float-slow shadow-xl" style={{ animationDelay: "2.4s" }}>
              <div className="flex items-center gap-2 text-xs">
                <Shield className="size-4 text-primary" />
                <span className="font-medium">ISO-grade delivery discipline</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function TrustBar() {
  const badges = ["ERP", "CRM", "Custom AI", "Automation", "Odoo", "Integrations", "Voice AI", "WhatsApp AI", "OCR", "Analytics"];
  return (
    <section className="border-b hairline bg-[var(--color-surface)] py-8 overflow-hidden">
      <Container>
        <div className="flex items-center justify-between gap-6 mb-5 flex-wrap">
          <p className="text-sm text-muted-foreground">Trusted across the operating stack — from the ledger to the AI layer.</p>
          <div className="text-xs tracking-widest text-muted-foreground uppercase">Dubai · Ajman · Global</div>
        </div>
        <div className="relative">
          <div className="flex gap-3 marquee-track w-max">
            {[...badges, ...badges].map((b, i) => (
              <span key={i} className="inline-flex items-center gap-2 rounded-full border hairline bg-background px-4 py-2 text-xs font-medium whitespace-nowrap">
                <span className="size-1.5 rounded-full bg-primary" /> {b}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function StatsBand() {
  return (
    <section className="border-b hairline py-12 md:py-16">
      <Container>
        <div className="grid gap-y-10 gap-x-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((s) => (
            <div key={s.label} className="group">
              <div className="text-4xl md:text-5xl font-display font-semibold tracking-tight bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
                {s.value}
              </div>
              <div className="mt-2 text-sm font-medium">{s.label}</div>
              <div className="mt-1 text-xs text-muted-foreground leading-relaxed">{s.detail}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function BrandProposition() {
  return (
    <Section
      eyebrow="One partner"
      title={<>One company. One roadmap. <br className="hidden md:block" /> One connected operation.</>}
      intro="Octapus connects the parts of your business that already exist — and builds the parts that don't yet."
    >
      <div className="mx-auto max-w-6xl">
        <div className="relative rounded-3xl border hairline bg-[var(--color-surface)] p-8 md:p-14 overflow-hidden">
          <div className="absolute -top-24 -right-24 size-72 rounded-full bg-primary/10 blur-3xl" aria-hidden />
          <div className="relative grid gap-10 md:grid-cols-5">
            {capabilities.map((c, i) => (
              <div key={c.verb} className="relative">
                <div className="text-eyebrow mb-3">0{i + 1}</div>
                <div className="text-2xl md:text-3xl font-display font-semibold tracking-tight">{c.verb}</div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.detail}</p>
                {i < capabilities.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-5 w-10 h-px bg-primary/30" aria-hidden />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function ProductsShowcase() {
  const featured = products.filter((p) => p.image).slice(0, 3);
  return (
    <Section
      eyebrow="Products"
      title="A product ecosystem, engineered to compound."
      intro="Editorial glimpses of the systems we build. Each product exists to remove one specific kind of friction."
    >
      <div className="space-y-16 md:space-y-24">
        {featured.map((p, i) => (
          <article key={p.slug} className={cn("grid gap-10 lg:gap-16 items-center lg:grid-cols-12")}>
            <div className={cn("lg:col-span-7", i % 2 === 1 && "lg:order-2")}>
              <div className="relative aspect-[16/11] rounded-3xl overflow-hidden border hairline bg-background shadow-xl shadow-primary/5 group">
                <img src={p.image!} alt={`${p.name} interface preview`} loading="lazy" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent" aria-hidden />
              </div>
            </div>
            <div className={cn("lg:col-span-5 space-y-5", i % 2 === 1 && "lg:order-1")}>
              <div className="text-eyebrow">{p.tags.join(" · ")}</div>
              <h3 className="text-3xl md:text-5xl font-semibold tracking-tight">{p.name}</h3>
              <p className="text-lg leading-relaxed">{p.headline}</p>
              <dl className="grid grid-cols-1 gap-4 pt-2">
                <div><dt className="text-xs uppercase tracking-widest text-muted-foreground">Customer</dt><dd className="mt-1 text-sm">{p.customer}</dd></div>
                <div><dt className="text-xs uppercase tracking-widest text-muted-foreground">Problem</dt><dd className="mt-1 text-sm">{p.problem}</dd></div>
                <div><dt className="text-xs uppercase tracking-widest text-muted-foreground">Outcome</dt><dd className="mt-1 text-sm">{p.outcome}</dd></div>
              </dl>
              <Link to="/products/$slug" params={{ slug: p.slug }} className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline underline-offset-4">
                See details <ArrowRight className="size-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-16 text-center">
        <Button asChild variant="outline" size="lg" className="rounded-full">
          <Link to="/products">Every Octapus product <ArrowRight className="ml-1 size-4" /></Link>
        </Button>
      </div>
    </Section>
  );
}

function WhyChooseUs() {
  return (
    <Section
      eyebrow="Why Octapus"
      title="Not another agency. A long-term operating partner."
      intro="Traditional agencies hand off. Octapus stays — one team from first conversation to steady operation."
    >
      <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border hairline bg-[var(--color-surface)] p-8 md:p-10">
          <div className="text-eyebrow mb-3" style={{ color: "var(--color-muted-foreground)" }}>Traditional company</div>
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">The stitched-together approach</h3>
          <ul className="mt-6 space-y-4">
            {comparison.map((c) => (
              <li key={c.dimension} className="flex items-start gap-3 text-sm border-b hairline pb-4 last:border-0">
                <X className="size-4 mt-0.5 text-muted-foreground shrink-0" />
                <div>
                  <div className="font-medium">{c.dimension}</div>
                  <div className="text-muted-foreground mt-0.5">{c.traditional}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/5 to-transparent p-8 md:p-10 shadow-xl shadow-primary/10 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 size-60 rounded-full bg-primary/10 blur-3xl" aria-hidden />
          <div className="relative">
            <div className="text-eyebrow mb-3">Octapus</div>
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">One connected operation</h3>
            <ul className="mt-6 space-y-4">
              {comparison.map((c) => (
                <li key={c.dimension} className="flex items-start gap-3 text-sm border-b hairline pb-4 last:border-0">
                  <Check className="size-4 mt-0.5 text-primary shrink-0" />
                  <div>
                    <div className="font-medium">{c.dimension}</div>
                    <div className="text-muted-foreground mt-0.5">{c.octapus}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

const aiIcons = [Bot, Workflow, MessageSquare, FileText, Sparkles, BarChart3, Activity, Cpu];
function AICapabilitiesSection() {
  return (
    <Section
      eyebrow="AI Capabilities"
      title="Intelligence, engineered into the operation."
      intro="Not chatbots pasted onto the surface — agents, automations and models designed around your data, your decisions and evaluations you can trust."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {aiCapabilities.map((c, i) => {
          const Icon = aiIcons[i % aiIcons.length];
          return (
            <div key={c.name} className="group relative rounded-2xl border hairline bg-background p-6 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all">
              <div className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon className="size-5" />
              </div>
              <div className="text-lg font-semibold tracking-tight">{c.name}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.detail}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function OISFeature() {
  return (
    <Section
      dark
      eyebrow="OIS"
      title="One intelligent layer, coordinating the whole business."
      intro="OIS is the Octapus vision for coordinating authorized business activity through specialized AI agents — helping teams identify issues, organize work and act through text or voice."
    >
      <div className="mx-auto max-w-5xl">
        <div className="relative rounded-3xl overflow-hidden border border-border bg-surface-dark shadow-2xl shadow-primary/20">
          <video
            src={oisAnimationAsset.url}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-label="Five specialized AI agents connected around one business core"
            className="w-full h-auto opacity-95"
            poster={oisAnimationAsset.url}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/60 via-transparent to-transparent" aria-hidden />
        </div>
        <div className="mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground max-w-xl">
            The OIS concept explores how specialized AI agents can coordinate — not replace — the operators inside a business.
          </p>
          <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:opacity-90" onClick={() => trackEvent("ois_external_click", { source: "home_ois" })}>
            <a href={site.oisExternalUrl} target="_blank" rel="noopener noreferrer">
              Experience the OIS Concept <ExternalLink className="ml-1 size-4" />
            </a>
          </Button>
        </div>
      </div>
    </Section>
  );
}

function ServicesGrid() {
  return (
    <Section eyebrow="Services" title="Six disciplines. One accountable team." intro="Not six agencies stitched together — one continuous delivery relationship.">
      <div className="grid gap-px bg-hairline border hairline rounded-3xl overflow-hidden md:grid-cols-3">
        {services.map((s, i) => (
          <Link key={s.slug} to="/services" className="group bg-background p-8 hover:bg-[var(--color-primary-soft)]/40 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <div className="text-eyebrow">0{i + 1}</div>
              <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">{s.name}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.summary}</p>
          </Link>
        ))}
      </div>
    </Section>
  );
}

function TechStackSection() {
  return (
    <Section eyebrow="Technology" title="A stack chosen for the next decade, not the demo." intro="Modern, boring where it should be — sharp where it needs to be.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {techStack.map((t) => (
          <div key={t.group} className="rounded-2xl border hairline bg-[var(--color-surface)] p-6">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="size-4 text-primary" />
              <div className="text-sm font-semibold tracking-tight">{t.group}</div>
            </div>
            <div className="flex flex-wrap gap-2">
              {t.items.map((i) => (
                <span key={i} className="inline-flex items-center rounded-full border hairline bg-background px-3 py-1 text-xs font-medium">{i}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function StartupSection() {
  return (
    <Section>
      <div className="mx-auto max-w-6xl rounded-3xl border hairline bg-gradient-to-br from-[var(--color-surface)] to-primary/5 p-10 md:p-16 relative overflow-hidden">
        <div className="absolute -bottom-20 -left-20 size-72 rounded-full bg-primary/10 blur-3xl" aria-hidden />
        <div className="relative grid gap-10 md:grid-cols-2 md:gap-16 items-center">
          <div>
            <div className="text-eyebrow mb-4">For founders</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
              Ship version one without engineering tomorrow's technical debt.
            </h2>
          </div>
          <div className="space-y-5 text-muted-foreground">
            <p>Founders come to Octapus for product strategy, UX, engineering, launch support and the systems that will scale after the first version ships.</p>
            <p>One accountable team. One roadmap. Software that stays maintainable as the company grows.</p>
            <div>
              <Button asChild className="rounded-full">
                <Link to="/book">Talk to us <ArrowRight className="ml-1 size-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function IndustriesBand() {
  return (
    <Section eyebrow="Industries" title="Sectors already running on Octapus systems." intro="Relevant use cases across sectors — we describe what we actually do, not what we could pretend to specialize in.">
      <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4 gap-px border hairline rounded-3xl overflow-hidden bg-hairline">
        {industries.map((i) => (
          <div key={i} className="bg-background px-5 py-8 text-center text-sm font-medium hover:bg-primary/5 transition-colors">{i}</div>
        ))}
      </div>
    </Section>
  );
}

function ProcessSection() {
  return (
    <Section eyebrow="Process" title="From first conversation to steady operation." intro="A single controlled progression — no handoffs, no rework.">
      <ol className="mx-auto max-w-4xl relative border-l hairline pl-8 space-y-8">
        {processStages.map((s, i) => (
          <li key={s.name} className="relative">
            <span className="absolute -left-[41px] top-1 grid size-8 place-items-center rounded-full border hairline bg-background text-xs font-mono text-primary">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="text-xl md:text-2xl font-semibold tracking-tight">{s.name}</div>
            <p className="mt-1 text-sm text-muted-foreground max-w-xl leading-relaxed">{s.detail}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Testimonials() {
  return (
    <Section eyebrow="Clients" title="Operators who chose one connected system." intro="Selected notes from teams running real operations on Octapus systems.">
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure key={t.quote} className="rounded-3xl border hairline bg-background p-8 flex flex-col">
            <div className="flex gap-0.5 text-primary mb-4">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-current" />)}
            </div>
            <blockquote className="text-lg leading-relaxed flex-1">"{t.quote}"</blockquote>
            <figcaption className="mt-6 pt-6 border-t hairline">
              <div className="text-sm font-semibold">{t.author}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{t.company}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

function FAQSection() {
  return (
    <Section eyebrow="FAQ" title="Answers before you pick up the phone." intro="If your question isn't here, the strategy call is a better format for it.">
      <div className="mx-auto max-w-3xl divide-y hairline border-t border-b hairline">
        {faqs.map((f) => (
          <details key={f.q} className="group py-6">
            <summary className="flex items-center justify-between cursor-pointer list-none gap-6">
              <span className="text-lg font-semibold tracking-tight">{f.q}</span>
              <span className="grid size-8 place-items-center rounded-full border hairline text-primary shrink-0 group-open:rotate-45 transition-transform">
                <span className="text-lg leading-none">+</span>
              </span>
            </summary>
            <p className="mt-4 text-muted-foreground leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

function FinalConversion() {
  return (
    <section className="relative border-t hairline overflow-hidden">
      <div className="absolute inset-0 aurora-bg opacity-80" aria-hidden />
      <div className="absolute inset-0 grid-canvas opacity-30" aria-hidden />
      <Container className="relative py-20 md:py-28 text-center">
        <div className="text-eyebrow mb-5">Let's build</div>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight max-w-4xl mx-auto leading-[1.05]">
          You don't need another tool. <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">You need the right system.</span>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">One strategy call is enough to see whether Octapus is the right partner for the next chapter of your operation.</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" className="rounded-full px-6 shadow-lg shadow-primary/20" onClick={() => trackEvent("strategy_call_click", { source: "home_final" })}>
            <Link to="/book">Book a Strategy Call <ArrowRight className="ml-1 size-4" /></Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full px-6">
            <Link to="/contact">Contact the team</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
