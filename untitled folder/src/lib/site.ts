import productErpImg from "@/assets/product-erp.png";
import productCrmImg from "@/assets/product-crm.png";
import productAiImg from "@/assets/product-ai.png";

export const site = {
  name: "Octapus",
  legalName: "Octapus L.L.C.",
  tagline: "The systems behind your business. Connected.",
  origin: "Designed in the UAE — Built for the world.",
  oisExternalUrl: "https://your-whisper-employee.lovable.app",
  emails: {
    sales: "sales@octapus.ae",
    info: "info@octapus.ae",
    hr: "hr@octapus.ae",
    tech: "code@octapus.info",
  },
  phones: {
    general: "+971 50 862 1612",
    support: "+971 50 292 0388",
    sales: "+971 50 266 1088",
  },
  addresses: [
    { city: "Dubai", line: "Business Village, Dubai, UAE" },
    { city: "Ajman", line: "Amper Gem Tower, Khalifa Street, Ajman, UAE" },
  ],
  whatsapp: "971508621612",
} as const;

export type Product = {
  slug: string;
  name: string;
  headline: string;
  customer: string;
  problem: string;
  outcome: string;
  image?: string;
  tags: string[];
};

export const products: Product[] = [
  {
    slug: "obms-erp",
    name: "O.B.M.S ERP",
    headline: "One operating layer for finance, operations and reporting.",
    customer: "Growing companies outgrowing spreadsheets and disconnected tools.",
    problem: "Numbers live in different places and never agree.",
    outcome: "A single ledger for accounting, inventory, HR and reporting — with roles, approvals and audit trails.",
    image: productErpImg,
    tags: ["ERP", "Finance", "Operations"],
  },
  {
    slug: "wish",
    name: "wish",
    headline: "Turn service requests into structured, resolvable work.",
    customer: "Teams handling client requests across WhatsApp, email and forms.",
    problem: "Requests arrive everywhere and disappear into inboxes.",
    outcome: "One intake surface, clear ownership, timelines the client can trust.",
    tags: ["Service", "Ops"],
  },
  {
    slug: "hub8",
    name: "HUB8",
    headline: "A control plane for connected business tools.",
    customer: "Companies running eight-plus tools that don't talk to each other.",
    problem: "Data trapped in silos, workflows stitched by hand.",
    outcome: "Systems connected with defined contracts, visibility and monitoring.",
    tags: ["Integration", "Platform"],
  },
  {
    slug: "algorithem",
    name: "ALGORITHEM",
    headline: "Rules and automations for repeatable business decisions.",
    customer: "Ops leaders who repeat the same decision hundreds of times a week.",
    problem: "Every decision waits on a person even when the rule is clear.",
    outcome: "Decisions moved into transparent, auditable rules with human overrides.",
    tags: ["Automation", "Rules"],
  },
  {
    slug: "lead-intelligence",
    name: "Octapus Lead Intelligence",
    headline: "Understand which leads are worth your time.",
    customer: "Sales teams overwhelmed by unqualified enquiries.",
    problem: "Time spent qualifying instead of selling.",
    outcome: "Structured lead capture, enrichment and prioritization with clean handoff to sales.",
    tags: ["Sales", "AI"],
  },
  {
    slug: "content-manager",
    name: "Content Manager",
    headline: "A quiet publishing workspace for teams that ship content.",
    customer: "Marketing teams juggling briefs, drafts, assets and approvals.",
    problem: "Content lives in five tools and one shared drive.",
    outcome: "Briefs, drafts, assets, approvals and schedule — in one place.",
    tags: ["Marketing", "Publishing"],
  },
  {
    slug: "custom-crm",
    name: "Custom CRM",
    headline: "A CRM shaped to how your team actually sells.",
    customer: "Sales organizations forced into generic pipelines.",
    problem: "The tool defines the process instead of the process defining the tool.",
    outcome: "Pipelines, fields, automations and reporting built around your motion.",
    image: productCrmImg,
    tags: ["CRM", "Custom"],
  },
  {
    slug: "custom-business-solutions",
    name: "Custom Business Solutions",
    headline: "Software built for the systems that only your business has.",
    customer: "Operators with a workflow that no off-the-shelf tool covers.",
    problem: "You've been paying for the software you don't need to work around the software you do.",
    outcome: "A precise system built for your exact operation — nothing more, nothing less.",
    tags: ["Custom", "Software"],
  },
  {
    slug: "odoo-custom-erp",
    name: "Odoo Custom ERP",
    headline: "Odoo, extended and integrated to fit your operation.",
    customer: "Companies choosing Odoo as their operating layer.",
    problem: "Standard Odoo covers most of the work; the rest is where the value is.",
    outcome: "Modules extended, integrations built, deployment operated and supported.",
    tags: ["Odoo", "ERP"],
  },
  {
    slug: "custom-ai",
    name: "Custom AI",
    headline: "AI systems designed around your data and your decisions.",
    customer: "Teams ready to move beyond generic chat tools.",
    problem: "Off-the-shelf AI doesn't understand your business.",
    outcome: "Focused AI systems: retrieval on your knowledge, actions on your systems, evaluations you can trust.",
    image: productAiImg,
    tags: ["AI", "Custom"],
  },
  {
    slug: "ois",
    name: "OIS — Octapus Intelligent System",
    headline: "One intelligent layer across your business.",
    customer: "Operators exploring how AI agents can coordinate real work.",
    problem: "AI assistants sit next to the work rather than participating in it.",
    outcome: "The Octapus vision for coordinating authorized business activity through specialized AI agents.",
    tags: ["AI", "Vision"],
  },
];

export const services = [
  {
    slug: "engineering",
    name: "Engineering",
    summary: "Custom software, web platforms, mobile apps, integrations and infrastructure — built with modern engineering discipline.",
  },
  {
    slug: "business-systems",
    name: "Business Systems",
    summary: "ERP, CRM and workflow platforms designed around how your team actually operates — including Odoo implementations.",
  },
  {
    slug: "ai-and-data",
    name: "AI & Data",
    summary: "AI systems, agents, retrieval on your knowledge, analytics and data pipelines with human-readable evaluations.",
  },
  {
    slug: "design-and-brand",
    name: "Design & Brand",
    summary: "Product design, brand systems and interface work that make complex systems understandable.",
  },
  {
    slug: "growth",
    name: "Growth",
    summary: "Positioning, search, content and measurement — connected to the systems that convert.",
  },
  {
    slug: "operate",
    name: "Operate",
    summary: "Ongoing operation, support, monitoring and scaling of the systems we build together.",
  },
] as const;

export const industries = [
  "Construction", "Healthcare", "Retail", "Education",
  "Finance", "Manufacturing", "Hospitality", "Real Estate",
  "Transportation", "E-commerce", "Logistics", "Professional Services",
] as const;

export const processStages = [
  { name: "Discover", detail: "We map your operation, systems and constraints in plain language." },
  { name: "Plan", detail: "A clear scope, sequencing and definition of done — before code." },
  { name: "Design", detail: "Interfaces designed for the people who will actually use them." },
  { name: "Develop", detail: "Engineered in short cycles with reviews and measurable progress." },
  { name: "Integrate", detail: "Connected to the systems that already exist — with defined contracts." },
  { name: "Launch", detail: "Rehearsed release, migration and rollback." },
  { name: "Support", detail: "Monitoring, response and continuous improvement." },
  { name: "Scale", detail: "The system grows with the business, not against it." },
] as const;

export const capabilities = [
  { verb: "Build", detail: "The custom software your operation needs." },
  { verb: "Operate", detail: "The systems that run the business day to day." },
  { verb: "Automate", detail: "The repeatable decisions that slow the team down." },
  { verb: "Understand", detail: "The data that already tells the story." },
  { verb: "Grow", detail: "The channels connected to the systems that convert." },
] as const;

export const stats = [
  { value: "120+", label: "Systems shipped", detail: "Custom platforms, ERP rollouts and AI systems delivered end-to-end." },
  { value: "98%", label: "Client retention", detail: "Long-term partnerships that outlast the first release." },
  { value: "12+", label: "Industries served", detail: "From construction and healthcare to retail and finance." },
  { value: "24/7", label: "Operate & support", detail: "Monitoring, response and continuous improvement." },
  { value: "50+", label: "Integrations", detail: "ERPs, CRMs, payment rails, messaging and data pipelines." },
  { value: "10+", label: "Years of practice", detail: "A decade of building software that runs real operations." },
] as const;

export const comparison = [
  { dimension: "Delivery speed", traditional: "6–12 month waterfall cycles", octapus: "Working software every 2 weeks" },
  { dimension: "Ownership", traditional: "Handed to five vendors", octapus: "One accountable team, one roadmap" },
  { dimension: "AI & automation", traditional: "Bolted on after launch", octapus: "Designed into the system from day one" },
  { dimension: "Support", traditional: "Ticket queues, timezone gaps", octapus: "Direct line to the engineers who built it" },
  { dimension: "Scalability", traditional: "Rewrites every 3 years", octapus: "Architecture that grows with the business" },
  { dimension: "Total cost", traditional: "Licence sprawl and rework", octapus: "One system, predictable spend" },
] as const;

export const aiCapabilities = [
  { name: "AI Agents", detail: "Specialized agents that act on your systems with authorization, guardrails and audit trails." },
  { name: "Workflow Automation", detail: "Repeatable decisions moved into transparent, auditable rules with human overrides." },
  { name: "Voice & WhatsApp AI", detail: "Conversational surfaces on the channels your customers and teams already use." },
  { name: "OCR & Document AI", detail: "Extract, classify and route documents into your ERP and CRM automatically." },
  { name: "Retrieval & Chatbots", detail: "Grounded answers on your knowledge, your policies and your product." },
  { name: "Predictive Analytics", detail: "Forecasting and scoring models trained on your operational data." },
  { name: "Smart Reporting", detail: "Executive dashboards that surface the number that matters, not the noise." },
  { name: "Custom ML Systems", detail: "Focused models designed around your decisions and evaluated the way you measure them." },
] as const;

export const techStack = [
  { group: "Frontend", items: ["React", "Next.js", "TanStack", "TypeScript", "Tailwind"] },
  { group: "Backend", items: ["Node.js", "Python", "PostgreSQL", "Supabase", "Redis"] },
  { group: "Mobile", items: ["React Native", "Expo", "Swift", "Kotlin"] },
  { group: "Cloud & DevOps", items: ["AWS", "Cloudflare", "Docker", "Kubernetes", "Terraform"] },
  { group: "AI & Data", items: ["OpenAI", "Anthropic", "LangChain", "Vector DBs", "dbt"] },
  { group: "Integrations", items: ["Odoo", "Zoho", "Stripe", "WhatsApp", "Twilio"] },
] as const;

export const testimonials = [
  {
    quote: "Octapus rebuilt our operations layer in six months. The system pays for itself every quarter.",
    author: "Managing Director",
    company: "Construction group, Dubai",
  },
  {
    quote: "The team behaves like an internal engineering function — not a vendor. That is what actually moved the numbers.",
    author: "Chief Operating Officer",
    company: "Retail chain, UAE",
  },
  {
    quote: "They connected eight tools we thought would never talk to each other. Reporting is finally honest.",
    author: "Head of Finance",
    company: "Healthcare provider",
  },
] as const;

export const faqs = [
  { q: "How is Octapus different from a traditional software agency?", a: "We stay with the system after launch. Design, engineering, AI, integrations and operations sit inside one team with one roadmap — so accountability never moves between vendors." },
  { q: "Do you build from scratch or extend existing systems?", a: "Both. We extend Odoo, ERPs and CRMs where it makes sense, and build custom software where off-the-shelf tools force painful compromises." },
  { q: "What does an engagement typically look like?", a: "Discover, plan, design, develop, integrate, launch, support, scale. Short cycles, working software every two weeks and a definition of done agreed before code." },
  { q: "How do you approach AI and automation?", a: "AI is a capability inside the system, not a bolt-on. We design agents, retrieval and automations around your data, your decisions and evaluations you can trust." },
  { q: "Where are you based and who do you serve?", a: "Octapus is headquartered in the UAE with offices in Dubai and Ajman. We work with startups and growing companies across the GCC and internationally." },
  { q: "Do you offer ongoing support and monitoring?", a: "Yes. Operate is a first-class service — 24/7 monitoring, response and continuous improvement on the systems we build together." },
] as const;
