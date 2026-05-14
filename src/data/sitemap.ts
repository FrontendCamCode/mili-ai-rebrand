export type StaticPage = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  kind?: "page" | "resource";
};

export const staticPages: StaticPage[] = [
  {
    slug: "mili",
    title: "MiLi Platform",
    eyebrow: "Platform Overview",
    description: "MiLi is the indirect material supply chain platform for asset-intensive industries. A single trusted place to manage, clean, and optimize the materials your operations depend on.",
    ctaLabel: "Book a pilot",
    ctaHref: "mailto:info@lexinsolutions.com",
    kind: "page",
  },
  {
    slug: "contact",
    title: "Contact Us",
    eyebrow: "Lexin Solutions",
    description: "Get in touch with the Lexin Solutions team to learn more about MiLi or to request a pilot.",
    ctaLabel: "Send a message",
    ctaHref: "mailto:info@lexinsolutions.com",
    kind: "page",
  },
  {
    slug: "trust",
    title: "Trust Center",
    eyebrow: "Security & Compliance",
    description: "MiLi is SOC 2 Type II certified, ISO 27001 compliant, and SAP certified. Learn about our security architecture, data handling, and compliance posture.",
    ctaLabel: "Request security documents",
    ctaHref: "mailto:info@lexinsolutions.com",
    kind: "page",
  },
  {
    slug: "pilot",
    title: "Book a MiLi Pilot",
    eyebrow: "MiLi Lite Pilot",
    description: "A dedicated MiLi environment loaded with your real inventory data so your team can see exactly what MiLi finds — and build a real business case before committing.",
    ctaLabel: "Start the conversation",
    ctaHref: "mailto:info@lexinsolutions.com",
    kind: "page",
  },
  {
    slug: "resources/capability-uplift",
    title: "Capability Uplift",
    eyebrow: "Resource",
    description: "How Lexin enables teams to build lasting operational knowledge across indirect material supply chains.",
    ctaLabel: "Download",
    ctaHref: "mailto:info@lexinsolutions.com",
    kind: "resource",
  },
  {
    slug: "resources/scaas",
    title: "Supply Chain as a Service",
    eyebrow: "Resource",
    description: "Lexin's Supply Chain as a Service model combines technology, process, and people to deliver sustained operational improvement.",
    ctaLabel: "Download",
    ctaHref: "mailto:info@lexinsolutions.com",
    kind: "resource",
  },
  {
    slug: "resources/maintenance-health-check",
    title: "Maintenance Health Check",
    eyebrow: "Resource",
    description: "A structured assessment to identify where your maintenance and MRO operations are losing value.",
    ctaLabel: "Download",
    ctaHref: "mailto:info@lexinsolutions.com",
    kind: "resource",
  },
  {
    slug: "resources/supply-chain-review",
    title: "Supply Chain Review",
    eyebrow: "Resource",
    description: "A comprehensive review framework for identifying inefficiencies across your indirect material supply chain.",
    ctaLabel: "Download",
    ctaHref: "mailto:info@lexinsolutions.com",
    kind: "resource",
  },
  {
    slug: "demo",
    title: "Request a Demo",
    eyebrow: "MiLi",
    description: "See MiLi in action with a live demo tailored to your operation.",
    ctaLabel: "Request a demo",
    ctaHref: "mailto:info@lexinsolutions.com",
    kind: "page",
  },
  {
    slug: "eam-mro-flow",
    title: "EAM MRO Flow",
    eyebrow: "Lexin Solutions",
    description: "End-to-end EAM and MRO flow — the complete picture from demand signal to stores to job completion.",
    kind: "page",
  },
  {
    slug: "report",
    title: "Industry Report",
    eyebrow: "Resource",
    description: "Lexin's annual view on the state of indirect material supply chain management.",
    ctaLabel: "Download",
    ctaHref: "mailto:info@lexinsolutions.com",
    kind: "resource",
  },
  {
    slug: "success",
    title: "Thank You",
    eyebrow: "Lexin Solutions",
    description: "Your message has been received. We'll be in touch shortly.",
    kind: "page",
  },
  {
    slug: "popcorn",
    title: "Popcorn",
    eyebrow: "Lexin Solutions",
    description: "",
    kind: "page",
  },
  {
    slug: "partners-hidden",
    title: "Partners",
    eyebrow: "Lexin Solutions",
    description: "Lexin partner information.",
    kind: "page",
  },
];

export const getStaticPage = (slug: string) => staticPages.find((p) => p.slug === slug);
