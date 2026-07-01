// Data-driven project content. Add a project by appending to `projects`.

export type Project = {
  slug: string;
  title: string;
  company: string;
  summary: string;
  cover?: string;
};

export const projects: Project[] = [
  {
    slug: "fleet-logistics-oms",
    title:
      "Transforming Fleet Logistics with a Purpose-Built Order Management System",
    company: "Samsung Electronics America",
    summary: "Simplifying complex workflows",
    cover: "/images/work/fleet-logistics-oms.png",
  },
  {
    slug: "career-buying-journey",
    title: "Career Buying Journey",
    company: "Samsung Electronics America",
    summary: "Simplifying complex workflows",
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
