import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProjectBySlug, projects } from "@/lib/projects";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Jack Ziegler`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="site-shell">
      <div className="ambient-grid" />
      <div className="ambient-orb ambient-orb-cyan" />
      <div className="ambient-orb ambient-orb-amber" />

      <section className="content-frame py-8 sm:py-10">
        <Link href="/" className="secondary-button">
          Back to Home
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="section-label">{project.category}</p>
            <h1 className="mt-4 text-[clamp(2.8rem,7vw,5.75rem)] font-semibold leading-[0.92] tracking-[-0.08em] text-white">
              {project.title}
            </h1>
            <p className="section-copy">{project.subtitle}</p>

            <div className="mt-8 flex flex-wrap gap-2">
              {project.techStack.map((item) => (
                <span key={item} className="pill">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="detail-section space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm text-slate-300">
              <div>
                <p className="section-label">Role</p>
                <p className="mt-2">{project.role}</p>
              </div>
              <div>
                <p className="section-label">Year</p>
                <p className="mt-2">{project.year}</p>
              </div>
              <div>
                <p className="section-label">Platform</p>
                <p className="mt-2">{project.platform}</p>
              </div>
              <div>
                <p className="section-label">Stack</p>
                <p className="mt-2">
                  {project.techStack.slice(0, 2).join(" / ")}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {project.liveUrl ? (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="premium-button"
                >
                  Live Site
                </Link>
              ) : null}
              {project.githubUrl ? (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary-button"
                >
                  GitHub
                </Link>
              ) : null}
            </div>
          </div>
        </div>

        <div className="glass-panel mt-10 overflow-hidden rounded-[2rem] p-3 sm:p-4">
          <div className="relative overflow-hidden rounded-[1.5rem]">
            <div className="relative aspect-[16/10]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="100vw"
                className="object-cover"
                priority
                loading="eager"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,20,0.04),rgba(7,10,20,0.16)_36%,rgba(7,10,20,0.9)_100%),linear-gradient(135deg,rgba(255,255,255,0.16),transparent_30%)]" />
          </div>
        </div>
      </section>

      <section className="content-frame grid gap-8 pb-16 sm:pb-24 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-8">
          <div className="detail-section">
            <p className="section-label">Problem / Goal</p>
            <p className="section-copy mt-5 max-w-none">{project.problem}</p>
          </div>

          <div className="detail-section">
            <p className="section-label">What I Built</p>
            <p className="section-copy mt-5 max-w-none">{project.built}</p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="detail-section">
            <p className="section-label">Standout Features</p>
            <div className="mt-5 grid gap-3">
              {project.features.map((feature) => (
                <div key={feature} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-slate-200">
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="detail-section">
            <p className="section-label">Challenges / Decisions</p>
            <div className="mt-5 grid gap-3">
              {project.challenges.map((challenge) => (
                <div key={challenge} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-slate-300">
                  {challenge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="content-frame pb-16 sm:pb-24">
        <div className="space-y-6">
          <div>
            <p className="section-label">Visual Sections</p>
            <h2 className="section-title">A more detailed look at the product surfaces.</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {project.gallery.map((item) => (
              <article key={item.title} className="detail-section overflow-hidden p-4">
                <div className="relative overflow-hidden rounded-[1.4rem]">
                  <div className="relative aspect-[16/11]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,20,0.02),rgba(7,10,20,0.14)_38%,rgba(7,10,20,0.82)_100%),linear-gradient(135deg,rgba(255,255,255,0.16),transparent_30%)]" />
                </div>
                <div className="px-1 pb-1 pt-5">
                  <h3 className="text-2xl font-semibold tracking-[-0.05em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
