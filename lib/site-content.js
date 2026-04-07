const pageData = {
  hero: {
    eyebrow: "Join us",
    title: "Be your own teammate.",
    description:
      "Build the operating layer for real-world assets with a team that cares about velocity, ownership, and long-horizon execution. This page is intentionally structured so hero copy, media, jobs, and partner proof can move into a CMS later.",
    primaryCta: {
      label: "Explore roles",
      href: "#jobs",
    },
    secondaryCta: {
      label: "Read our thesis",
      href: "#thesis",
    },
  },
  founders: {
    eyebrow: "Hear from the team",
    title: "Why operators join early.",
    items: [
      {
        name: "Aarav Malhotra",
        role: "Co-founder & CEO",
        initials: "AM",
        quote:
          "We hire people who want to own outcomes, not just tasks. That means working across product, field operations, and capital formation with unusually high trust.",
      },
      {
        name: "Naina Kapoor",
        role: "Co-founder & COO",
        initials: "NK",
        quote:
          "The strongest people here enjoy ambiguity because it gives them room to define systems that will still matter when the market scales tenfold.",
      },
      {
        name: "Rohan Sethi",
        role: "Founding Product Lead",
        initials: "RS",
        quote:
          "Our best work happens when design, underwriting, and distribution sit at the same table. The page mirrors that cross-functional story.",
      },
    ],
  },
  logoStrip: ["Polygon", "Base", "Circle", "Fireblocks", "BitGo"],
  portfolio: {
    eyebrow: "What we build",
    title: "Structured products with real-world exposure.",
    description:
      "The PDF reads like a careers page anchored in proof, so the portfolio section is built as CMS-friendly cards that can later switch to dynamic case studies, assets, or market snapshots.",
    items: [
      {
        title: "Yield-linked farmland notes",
        category: "Agriculture",
        summary:
          "Tokenized exposure to operating farmland with transparent reporting, investor-ready workflows, and strong offline distribution support.",
        visualClass: "",
      },
      {
        title: "Logistics warehousing pools",
        category: "Industrial",
        summary:
          "Warehouse-backed structures designed for efficient deployment, recurring cash flows, and institutional diligence requirements.",
        visualClass: "visual--city",
      },
      {
        title: "Climate infrastructure baskets",
        category: "Energy transition",
        summary:
          "Projects that bundle durable assets with digital servicing layers so reporting, token issuance, and investor updates stay connected.",
        visualClass: "visual--earth",
      },
    ],
  },
  thesis: {
    eyebrow: "Build with us",
    title: "Real assets need software-native distribution.",
    description:
      "The original layout transitions into a dense thesis block. Here that becomes a reusable section for a CMS-managed manifesto, investor proof points, or product principles.",
    points: [
      {
        title: "Asset pipelines",
        copy:
          "We evaluate sourcing, diligence, servicing, and reporting as one product loop instead of a series of disconnected teams.",
      },
      {
        title: "Capital orchestration",
        copy:
          "Investor onboarding, jurisdiction controls, and post-investment communication should be modeled as product primitives.",
      },
      {
        title: "Operator advantage",
        copy:
          "The winning RWA stack will be built by teams that understand both local asset realities and global digital distribution.",
      },
    ],
  },
  jobs: {
    eyebrow: "Open roles",
    title: "Join the team building the category.",
    description:
      "This section is deliberately shaped as a list of job cards so you can later replace the static array with entries from a headless CMS, Airtable, or a jobs API without changing the page layout.",
    items: [
      {
        slug: "founding-full-stack-engineer",
        team: "Engineering",
        title: "Founding Full-Stack Engineer",
        location: "Bengaluru / Hybrid",
        summary:
          "Own the app surface for investors, internal operations, and issuer workflows across a modern TypeScript stack.",
        href: "/jobs/founding-full-stack-engineer",
      },
      {
        slug: "product-operations-manager",
        team: "Operations",
        title: "Product Operations Manager",
        location: "Mumbai / On-site",
        summary:
          "Design repeatable systems between underwriting, servicing, compliance, and customer success as the platform scales.",
        href: "/jobs/product-operations-manager",
      },
      {
        slug: "investment-analyst-rwa",
        team: "Investments",
        title: "Investment Analyst, RWA",
        location: "Remote India",
        summary:
          "Support asset diligence, market research, and product packaging with a strong understanding of private markets and crypto rails.",
        href: "/jobs/investment-analyst-rwa",
      },
    ],
  },
  footer: {
    tagline: "RWA careers",
    title: "Build the bridge between assets and the internet.",
    columns: [
      {
        title: "Company",
        links: [
          { label: "About", href: "#" },
          { label: "Portfolio", href: "#" },
          { label: "Careers", href: "#jobs" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Thesis", href: "#thesis" },
          { label: "Documentation", href: "#" },
          { label: "Contact", href: "#" },
        ],
      },
      {
        title: "Notes",
        links: [
          { label: "CMS-ready content model", href: "#" },
          { label: "Static demo data", href: "#" },
          { label: "Prepared for dynamic jobs", href: "#" },
        ],
      },
    ],
  },
};

export async function getLandingPageData() {
  return pageData;
}
