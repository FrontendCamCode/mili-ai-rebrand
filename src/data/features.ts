export const features: Record<string, {
  label: string;
  tagline: string;
  description: string;
  bullets: string[];
}> = {
  "material-search": {
    label: "Material Search",
    tagline: "Find the right material record in seconds, every time.",
    description: "Stop losing time hunting through ERP screens. MiLi's material search gives every user — from planners to buyers to maintenance techs — a fast, intelligent way to locate the exact material record they need across every site, every plant, every catalogue.",
    bullets: [
      "Search across all sites and plants from one interface",
      "Filter by classification, unit of measure, manufacturer, and more",
      "Surface duplicate or similar records before new ones are created",
      "Reduce free-text purchasing by making catalogue search frictionless",
    ],
  },
  "material-creation": {
    label: "Material Creation",
    tagline: "Create standardised material records from day one.",
    description: "Every new material added to your ERP starts with the right structure. MiLi guides users through a consistent creation workflow — enforcing naming conventions, required fields, and classification standards so your master data stays clean as it grows.",
    bullets: [
      "Guided creation workflow with configurable required fields",
      "Enforce naming conventions and classification standards",
      "Prevent duplicates before they enter your system of record",
      "Route new materials through approval before they post back to ERP",
    ],
  },
  "material-extension": {
    label: "Material Extension",
    tagline: "Roll materials out across plants without duplicating data.",
    description: "When a material needs to be available at a new site, plant, or storage location, MiLi handles the extension cleanly — carrying the right data forward and applying site-specific parameters without creating new records or losing master data integrity.",
    bullets: [
      "Extend existing records to new plants and storage locations",
      "Apply site-specific parameters without touching the master record",
      "Configurable approval routing before extensions post to ERP",
      "Full audit trail of every extension event",
    ],
  },
  "bulk-enrichment": {
    label: "Bulk Enrichment",
    tagline: "Clean thousands of records without a manual rework project.",
    description: "Years of free-text purchasing, inconsistent naming, and missing classifications leave most materials databases unreliable. MiLi's bulk enrichment tools let you identify, prioritise, and fix data quality issues at scale — without a lengthy IT project or a team of consultants.",
    bullets: [
      "Identify records with missing or inconsistent data in bulk",
      "Apply standardised descriptions and classifications across thousands of items",
      "Route enrichment changes through approval before they post back",
      "Track enrichment progress and data quality improvement over time",
    ],
  },
  "rop-roq-calculator": {
    label: "ROP & ROQ Calculator",
    tagline: "Calculate exactly when to reorder and how much to hold.",
    description: "Most MRO reorder points are set once and never revisited. MiLi's ROP and ROQ calculator uses real operational data — demand history, lead times, criticality, and service level targets — to generate defensible stocking parameters for every item in your catalogue.",
    bullets: [
      "Calculate reorder points from actual demand and lead time history",
      "Set minimum/maximum stock levels aligned to criticality and service targets",
      "Identify items with reorder logic that no longer reflects operational reality",
      "Post approved parameters directly back to your ERP or CMMS",
    ],
  },
  "lead-time-calculator": {
    label: "Lead Time Calculator",
    tagline: "Replace manual estimates with lead times built from real history.",
    description: "Static lead times entered at material creation quickly become fiction. MiLi calculates lead times from actual purchase order and goods receipt history, giving planners and buyers accurate data to work from — and a defensible basis for inventory optimisation.",
    bullets: [
      "Calculate lead times from historical PO and GR data",
      "Identify items where lead time estimates are significantly wrong",
      "Separate supplier lead time from internal processing time",
      "Feed accurate lead times directly into ROP and ROQ calculations",
    ],
  },
  "material-details": {
    label: "Material Details",
    tagline: "Every attribute, movement, and decision for a material in one place.",
    description: "MiLi's material detail view brings together everything relevant to a single item — master data, stock positions, purchase history, open orders, criticality, reorder parameters, and pending changes — so decisions get made with the full picture in front of you.",
    bullets: [
      "Single view of master data, stock, and transactional history",
      "See open purchase orders, pending changes, and approval status",
      "Drill into demand patterns and lead time history",
      "Review and action any exceptions flagged against this material",
    ],
  },
  "flag-for-deletion": {
    label: "Flag for Deletion",
    tagline: "Remove dead stock and obsolete records without risk.",
    description: "Obsolete materials tied up in inventory are a hidden cost most operations don't track. MiLi's flag for deletion workflow identifies items that haven't moved, helps you assess disposal options, and routes deletion requests through approval before anything changes in your ERP.",
    bullets: [
      "Identify slow-moving and zero-movement stock across all locations",
      "Calculate working capital tied up in obsolete inventory",
      "Route deletion recommendations through configurable approval",
      "Full audit trail — every deletion decision is recorded and reversible",
    ],
  },
  "free-text-monitor": {
    label: "Free Text Monitor",
    tagline: "Surface uncatalogued spend hiding in your purchase orders.",
    description: "Every free-text purchase order is a cataloguing failure, a compliance risk, and a missed cost-saving opportunity. MiLi's free text monitor continuously scans your PO data to identify spend that should be on catalogue — so you can act on it before it compounds.",
    bullets: [
      "Continuous monitoring of purchase orders for free-text line items",
      "Identify patterns in free-text spend that indicate cataloguing gaps",
      "Route flagged items to buyers and materials teams for action",
      "Track reduction in free-text spend as catalogue coverage improves",
    ],
  },
  "bom-monitor": {
    label: "BOM Monitor",
    tagline: "Catch supply chain gaps in your bills of material before they cause downtime.",
    description: "Bills of material contain the critical parts your maintenance teams depend on. MiLi's BOM monitor checks every component against your current stock position, lead time, and supplier status — so gaps are visible before they become emergencies.",
    bullets: [
      "Monitor BOM components against live stock positions",
      "Flag items with no stock, long lead times, or single-source supply",
      "Prioritise action by asset criticality and maintenance schedule",
      "Connect BOM gaps to procurement workflows for fast resolution",
    ],
  },
  "duplicate-monitor": {
    label: "Duplicate Monitor",
    tagline: "Find and consolidate duplicate records inflating your inventory count.",
    description: "Duplicate material records are one of the most common and costly causes of excess inventory. The same item exists under multiple numbers across sites — bought separately, held separately, never reconciled. MiLi finds them, quantifies the cost, and manages the consolidation.",
    bullets: [
      "Identify potential duplicates using description, classification, and attributes",
      "Calculate combined stock position and working capital impact",
      "Manage consolidation workflow with approval routing",
      "Track duplicate reduction over time as a data quality KPI",
    ],
  },
  "criticality-calculator": {
    label: "Criticality Calculator",
    tagline: "Know which parts will halt production before they run out.",
    description: "Not all parts are equal. The wrong item being out of stock can shut down an entire operation. MiLi's criticality calculator helps you classify materials by their operational impact — so stocking decisions, reorder parameters, and procurement priority all reflect what actually matters.",
    bullets: [
      "Classify materials by consequence of failure and availability risk",
      "Connect criticality ratings to ROP/ROQ and lead time calculations",
      "Identify items with high criticality but inadequate stock coverage",
      "Use criticality to prioritise data quality and supplier management effort",
    ],
  },
  "mili-mind": {
    label: "MiLi Mind",
    tagline: "Ask questions and trigger workflows in plain language.",
    description: "MiLi Mind is the native AI harness built into MiLi. Ask it to find anomalies, run calculations, explain decisions, or trigger workflows — all in plain language, with no training required. Every answer is grounded in your operational data, not a general model.",
    bullets: [
      "Natural language interface to every MiLi module and dataset",
      "Ask questions about stock positions, spend, anomalies, and more",
      "Trigger approval workflows and actions directly from conversation",
      "Responses grounded in your data — not generic AI hallucinations",
    ],
  },
  "ai-tool-api": {
    label: "AI Tool API",
    tagline: "Plug any AI platform directly into your materials operations.",
    description: "Every capability in MiLi is exposed as a discrete, callable tool via our open API. Connect ChatGPT, Claude, Gemini, or your own model — and give your AI agents the ability to read, analyse, and act on materials data without custom integration work.",
    bullets: [
      "Every MiLi module available as a structured API tool",
      "Compatible with OpenAI, Anthropic, Google, and open-source models",
      "OAuth 2.0 secured — no credentials exposed to AI models",
      "Full request/response logging for auditability",
    ],
  },
  "agentic-workflows": {
    label: "Agentic Workflows",
    tagline: "Automate routine materials decisions without human intervention.",
    description: "AI agents can now handle the repetitive, rule-based decisions that slow down materials operations — flagging anomalies, triggering reorders, routing approvals, and surfacing exceptions — so your team focuses on judgement calls, not administration.",
    bullets: [
      "Configure agents to monitor, flag, and act on defined conditions",
      "Connect to external triggers — maintenance events, production schedules, supplier updates",
      "Human-in-the-loop approval for actions above defined thresholds",
      "Full audit trail of every autonomous action taken",
    ],
  },
  "ai-insights": {
    label: "AI Insights",
    tagline: "Surface what matters before you know to look for it.",
    description: "MiLi continuously analyses your materials data for patterns, anomalies, and opportunities that manual review would miss. AI Insights surfaces these automatically — so your team acts on what's important, not what's visible at the top of a report.",
    bullets: [
      "Proactive anomaly detection across inventory, spend, and supplier data",
      "Trend analysis on demand patterns, lead times, and stock performance",
      "Natural language explanations of every insight surfaced",
      "Actionable recommendations linked to MiLi workflows",
    ],
  },
};
