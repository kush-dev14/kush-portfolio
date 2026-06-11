import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Ankush Kumar" },
      { name: "description", content: "Selected Ruby on Rails projects: Open-Pantry, E-Locker, and Crowd financial record management." },
      { property: "og:title", content: "Projects — Ankush Kumar" },
      { property: "og:description", content: "Selected backend projects in Ruby on Rails." },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    name: "Open-Pantry & Kitchenmate",
    tag: "Marketplace API",
    desc: "An online food selling and buying marketplace where suppliers and restaurants manage inventories, products, and orders. Integrated SendGrid, Google APIs and location services. Documented with rspec_api_documentation.",
    tech: ["Ruby on Rails", "PostgreSQL", "RSpec", "SendGrid", "Google APIs"],
  },
  {
    name: "E-Locker",
    tag: "Security System",
    desc: "An online locking system with per-user accessibility management and backend services handling locker state and operations.",
    tech: ["Ruby on Rails", "PostgreSQL"],
  },
  {
    name: "Crowd",
    tag: "Fintech",
    desc: "Financial record management system for tracking income & expenses, generating reports, and managing budgets — built on a service-oriented Rails backend.",
    tech: ["Ruby on Rails", "PostgreSQL", "Background Jobs"],
  },
];

function ProjectsPage() {
  return (
    <Layout>
      <section className="w-full px-6 lg:px-12 pt-20 pb-12">
        <p className="font-mono text-s uppercase tracking-[0.3em] text-primary mb-6">Projects</p>
        <h1 className="font-display text-5xl md:text-6xl font-semibold leading-tight max-w-3xl">
          Things I've shipped.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl">A selection of backend systems and APIs built across multiple domains.</p>
      </section>

      <section className="w-full px-6 lg:px-12 pb-20 space-y-6">
        {projects.map((p, i) => (
          <article key={p.name} className="group relative overflow-hidden rounded-2xl bg-card border border-border p-8 md:p-12 hover:border-primary/40 transition-all">
            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-3">
                <p className="font-mono text-xs text-primary">0{i + 1} / {projects.length.toString().padStart(2, "0")}</p>
                <p className="mt-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">{p.tag}</p>
              </div>
              <div className="md:col-span-9">
                <h2 className="font-display text-3xl md:text-4xl">{p.name}</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full text-xs font-mono bg-secondary text-secondary-foreground border border-border">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </Layout>
  );
}
