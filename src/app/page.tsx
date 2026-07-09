import Link from "next/link";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import { getAllProjects } from "@/lib/projects";

export default function Home() {
  const projects = getAllProjects();

  return (
    <>
      <Hero />

      <section
        id="work"
        className="mx-auto max-w-[1440px] scroll-mt-[72px] px-6 sm:px-16"
      >
        <div className="border-t border-line pt-11">
          <div className="flex items-center justify-between gap-11">
            <h2 className="font-display text-3xl font-medium">
              Featured projects
            </h2>
            <Link
              href="/work"
              className="group flex shrink-0 items-center gap-2 text-base font-medium text-[#1a1a1a] transition-colors hover:text-muted"
            >
              See all projects
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-0.5"
              >
                →
              </span>
            </Link>
          </div>

          <div className="mt-11 pb-11">
            <ProjectGrid projects={projects} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 sm:px-16">
        <div className="flex flex-col items-center gap-8 border-t border-line py-24 text-center">
          <div className="flex flex-col gap-2">
            <h2 className="font-display text-3xl font-bold">
              Let&rsquo;s work together!
            </h2>
            <p className="text-base text-ink">
              Interested in discussing UX strategy, product design, or logistics
              tech?
            </p>
          </div>

          <Link
            href="/connect"
            className="inline-flex items-center gap-2.5 rounded-xl bg-ink px-6 py-5 text-xl font-bold text-paper transition-opacity hover:opacity-90"
          >
            Get in touch
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              aria-hidden
              className="shrink-0"
            >
              <path
                d="M9.8427 19.637C9.59551 19.3949 9.46607 19.0869 9.45438 18.7129C9.4436 18.3388 9.5618 18.0308 9.80899 17.7888L16.4157 11.3201H1.34831C0.966292 11.3201 0.645843 11.1934 0.386967 10.9399C0.128989 10.6873 0 10.374 0 10C0 9.62596 0.128989 9.31221 0.386967 9.05875C0.645843 8.80616 0.966292 8.67987 1.34831 8.67987H16.4157L9.80899 2.21122C9.5618 1.9692 9.4436 1.66117 9.45438 1.28713C9.46607 0.913091 9.59551 0.60506 9.8427 0.363036C10.0899 0.121012 10.4045 0 10.7865 0C11.1685 0 11.4831 0.121012 11.7303 0.363036L20.6292 9.07591C20.764 9.18592 20.8598 9.32321 20.9164 9.48779C20.9721 9.65325 21 9.82398 21 10C21 10.176 20.9721 10.341 20.9164 10.495C20.8598 10.6491 20.764 10.7921 20.6292 10.9241L11.7303 19.637C11.4831 19.879 11.1685 20 10.7865 20C10.4045 20 10.0899 19.879 9.8427 19.637Z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
