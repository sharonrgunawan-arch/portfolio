// Data-driven project content. Add a project by appending to `projects`.
// (The instruction doc suggests MDX; this scaffold uses typed data so the
//  build is self-contained. Swap to MDX/contentlayer later if desired.)

export type Metric = { label: string; value: string };

export type Section = {
  heading: string;
  body: string;
};

export type Project = {
  slug: string;
  title: string;
  company: string;
  summary: string;
  /** Tailwind gradient classes used as a placeholder cover until real exports land. */
  cover: string;
  featured?: boolean;
  role: string;
  industry: string;
  platform: string;
  timeline: string;
  overview: string;
  sections: Section[];
  metrics?: Metric[];
};

export const projects: Project[] = [
  {
    slug: "fleet-logistics-oms",
    title:
      "Transforming Fleet Logistics with a Purpose-Built Order Management System",
    company: "Samsung Electronics America",
    summary: "Simplifying complex workflows",
    cover: "from-emerald-200 via-teal-100 to-slate-200",
    featured: true,
    role: "Senior UX Designer",
    industry: "Logistics / Enterprise",
    platform: "Web (internal tooling)",
    timeline: "2024 — 6 months",
    overview:
      "A purpose-built order management system that replaced a tangle of spreadsheets and legacy tools with a single, role-aware workflow — cutting the time to dispatch and giving operators real-time visibility into every order.",
    sections: [
      {
        heading: "The problem",
        body: "Operators juggled multiple disconnected tools to place, track, and reconcile fleet orders. Context lived in spreadsheets and email, errors were common, and onboarding a new operator took weeks.",
      },
      {
        heading: "The solution",
        body: "We designed a single order management surface organized around the operator's real workflow: a personalized dashboard, guided order creation, live order tracking, and reconciliation in one place — with the right data surfaced at each step.",
      },
      {
        heading: "Methodology",
        body: "Discovery interviews and workflow mapping, iterative prototyping with operators, and usability validation before each release. Design decisions were tied directly to measured outcomes after launch.",
      },
    ],
    metrics: [
      { label: "Faster dispatch", value: "−42%" },
      { label: "Fewer order errors", value: "−67%" },
      { label: "Onboarding time", value: "3 days" },
      { label: "Operator satisfaction", value: "+38%" },
    ],
  },
  {
    slug: "career-buying-journey",
    title: "Career Buying Journey",
    company: "Samsung Electronics America",
    summary: "Simplifying complex workflows",
    cover: "from-indigo-200 via-sky-100 to-slate-200",
    featured: true,
    role: "Senior UX Designer",
    industry: "Enterprise",
    platform: "Web",
    timeline: "2023 — 4 months",
    overview:
      "Reimagined a multi-step purchasing flow so that complex decisions felt simple, guided, and reversible.",
    sections: [
      {
        heading: "The problem",
        body: "The existing journey forced users through dense forms with little guidance, leading to drop-off and support tickets.",
      },
      {
        heading: "The solution",
        body: "A progressive, guided flow that breaks decisions into clear steps and lets users move backward without losing work.",
      },
    ],
    metrics: [
      { label: "Completion rate", value: "+29%" },
      { label: "Support tickets", value: "−45%" },
    ],
  },
  {
    slug: "nonprofit-volunteer-hub",
    title: "Volunteer Hub for a Community Nonprofit",
    company: "Pro bono",
    summary: "Matching people with the right opportunities",
    cover: "from-amber-200 via-orange-100 to-slate-200",
    featured: true,
    role: "Lead Designer",
    industry: "Nonprofit",
    platform: "Web & mobile",
    timeline: "2023 — 3 months",
    overview:
      "A lightweight platform that matches volunteers with opportunities based on skills, availability, and cause.",
    sections: [
      {
        heading: "The problem",
        body: "Coordinators managed volunteers over email and spreadsheets, making it hard to match the right person to the right shift.",
      },
      {
        heading: "The solution",
        body: "A simple matching hub with profiles, availability, and one-tap sign-up — built for low-tech users on any device.",
      },
    ],
    metrics: [
      { label: "Shifts filled", value: "+54%" },
      { label: "Coordinator time saved", value: "8 hrs/wk" },
    ],
  },
  {
    slug: "startup-onboarding",
    title: "Zero-to-Aha Onboarding for an Early-Stage Startup",
    company: "Confidential startup",
    summary: "Getting new users to value, fast",
    cover: "from-fuchsia-200 via-pink-100 to-slate-200",
    featured: true,
    role: "Product Designer",
    industry: "SaaS / Startup",
    platform: "Web app",
    timeline: "2022 — 2 months",
    overview:
      "Redesigned first-run onboarding to get users to their first meaningful outcome in under five minutes.",
    sections: [
      {
        heading: "The problem",
        body: "New users signed up but rarely reached the product's core value before churning.",
      },
      {
        heading: "The solution",
        body: "A focused, milestone-based onboarding that removes setup friction and celebrates the first real win.",
      },
    ],
    metrics: [
      { label: "Activation rate", value: "+61%" },
      { label: "Time to value", value: "4.5 min" },
    ],
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
