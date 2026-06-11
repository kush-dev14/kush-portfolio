import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Award, GraduationCap, Briefcase } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ankush Kumar" },
      { name: "description", content: "Ruby on Rails developer with 4+ years of experience. Background, education, and achievements." },
      { property: "og:title", content: "About — Ankush Kumar" },
      { property: "og:description", content: "Background, education, and achievements." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      <section className="w-full px-6 lg:px-12 pt-20 pb-12">
        <p className="font-mono text-s uppercase tracking-[0.3em] text-primary mb-6">About</p>
        <h1 className="font-display text-5xl md:text-6xl font-semibold leading-tight">
          A developer driven by craft, curiosity, and clean code.
        </h1>
        <div className="mt-10 prose prose-invert max-w-none text-lg text-muted-foreground leading-relaxed space-y-5">
          <p>
            I'm Ankush Kumar — a Ruby on Rails developer with <span className="text-foreground">5+ years</span> of professional experience designing, building, and maintaining web applications across multiple domains.
          </p>
          <p>
            My focus is on writing clean, efficient code, designing thoughtful database schemas, and building RESTful APIs that other teams enjoy integrating with. I take testing seriously — RSpec is part of how I think about a problem, not an afterthought.
          </p>
          <p>
            I'm committed to continuous growth, technical excellence, and contributing to teams through innovative and impactful work.
          </p>
        </div>
      </section>

      <section className="w-full px-6 lg:px-12 py-12">
        <h2 className="font-display text-3xl mb-8 flex items-center gap-3"><Briefcase className="h-6 w-6 text-primary" /> Experience</h2>
        <div className="rounded-xl bg-card border border-border p-8">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-display text-xl">Ruby on Rails Developer</h3>
            <span className="font-mono text-xs text-primary">Jul 2021 – Present</span>
          </div>
          <p className="text-muted-foreground mt-1">Adware Technologies · Kaushambi, Uttar Pradesh</p>
          <ul className="mt-5 space-y-2 text-sm text-muted-foreground list-disc list-inside">
            <li>Analysed system requirements and translated them into reliable features.</li>
            <li>Independently developed several highly scalable and complex backend features.</li>
            <li>Built and consumed RESTful APIs with serializers and proper HTTP semantics.</li>
            <li>Wrote comprehensive RSpec test suites and API documentation.</li>
          </ul>
        </div>
      </section>

      <section className="w-full px-6 lg:px-12 py-12">
        <h2 className="font-display text-3xl mb-8 flex items-center gap-3"><GraduationCap className="h-6 w-6 text-primary" /> Education</h2>
        <div className="space-y-3">
          {[
            { q: "B.Tech", i: "AKTU, Lucknow", y: "2016" },
            { q: "Intermediate", i: "UP Board", y: "2011" },
            { q: "Matriculation", i: "UP Board", y: "2009" },
          ].map((e) => (
            <div key={e.q} className="flex flex-wrap items-baseline justify-between gap-2 p-5 rounded-lg bg-card border border-border">
              <div>
                <p className="font-display text-lg">{e.q}</p>
                <p className="text-sm text-muted-foreground">{e.i}</p>
              </div>
              <span className="font-mono text-sm text-primary">{e.y}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full px-6 lg:px-12 py-12">
        <h2 className="font-display text-3xl mb-8 flex items-center gap-3"><Award className="h-6 w-6 text-primary" /> Achievements</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            "Employee of the Month for outstanding ROR development",
            "Certified in Java programming language",
            "Best student of the batch — college & school",
          ].map((a) => (
            <div key={a} className="p-6 rounded-lg bg-card border border-border">
              <p className="text-sm">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
