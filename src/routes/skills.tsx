import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Ankush Kumar" },
      { name: "description", content: "Technical stack: Ruby, Rails, PostgreSQL, MySQL, JavaScript, React, Git, and more." },
      { property: "og:title", content: "Skills — Ankush Kumar" },
      { property: "og:description", content: "Technical stack and tools." },
    ],
  }),
  component: SkillsPage,
});

const groups = [
  { title: "Languages", items: ["Ruby", "Java", "JavaScript", "Python", "ReactJS"] },
  { title: "Frameworks", items: ["Ruby on Rails"] },
  { title: "Databases", items: ["PostgreSQL", "MySQL"] },
  { title: "Version Control", items: ["Git", "GitHub"] },
  { title: "Tools / IDE", items: ["VS Code", "Sublime Text"] },
  { title: "Issue Tracking", items: ["Trello", "Asana"] },
  { title: "Operating Systems", items: ["Windows", "Ubuntu", "macOS"] },
  { title: "Methodology", items: ["Agile / SDLC"] },
];

function SkillsPage() {
  return (
    <Layout>
      <section className="w-full px-6 lg:px-12 pt-20 pb-12">
        <p className="font-mono text-s uppercase tracking-[0.3em] text-primary mb-6">Skills</p>
        <h1 className="font-display text-5xl md:text-6xl font-semibold leading-tight max-w-3xl">
          The tools of the trade.
        </h1>
      </section>
      <section className="w-full px-6 lg:px-12 pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {groups.map((g) => (
            <div key={g.title} className="p-6 rounded-xl bg-card border border-border">
              <h3 className="font-display text-lg mb-4 text-primary">{g.title}</h3>
              <ul className="space-y-2">
                {g.items.map((i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
