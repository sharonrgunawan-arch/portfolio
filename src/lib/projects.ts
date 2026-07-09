// Data-driven project content. Add a project by appending to `projects`.

export type Project = {
  slug: string;
  title: string;
  company: string;
  summary: string;
  /** Short two-line blurb shown under the card title on the homepage grid. */
  description?: string;
  cover?: string;
};

export const projects: Project[] = [
  {
    slug: "carrier-device-buying-journey",
    title: "Carrier Device Buying Journey",
    company: "Samsung Electronics America",
    summary: "Simplifying complex workflows",
    description:
      "Served as SME for the carrier journey, optimizing the end-to-end setup experience across three major US carriers.",
    cover: "/images/work/carrier-device-buying-journey.png",
  },
  {
    slug: "fleet-logistics-oms",
    title: "Fleet Management System",
    company: "Reindeer Auto Relocation",
    summary: "Simplifying complex workflows",
    description:
      "Designed the fleet management platform at the intersection of strategy and solutioning, transforming logistics operations.",
    cover: "/images/work/fleet-management-reindeer.png",
  },
  {
    slug: "home-appliances-buying-guide",
    title: "Home Appliances Buying Guide",
    company: "Samsung Electronics America",
    summary: "Simplifying complex workflows",
    description:
      "Guided customers to the right appliance with a clearer, more confident path from browsing to purchase.",
    cover: "/images/work/home-appliances-buying-guide.png",
  },
  {
    slug: "mygarda-lifestyle-app",
    title: "MyGarda Lifestyle Mobile App",
    company: "MyGarda",
    summary: "Designing for everyday moments",
    description:
      "Shaped a lifestyle mobile app that brings services, rewards, and daily essentials together in one seamless experience.",
    cover: "/images/work/mygarda-lifestyle-app.png",
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
