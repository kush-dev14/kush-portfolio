import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import heroImg from "@/assets/hero.jpg";
import { ArrowRight, Code2, Database, Server } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ankush Kumar — Ruby on Rails Developer" },
      { name: "description", content: "Portfolio of Ankush Kumar, Ruby on Rails developer with 4+ years building scalable APIs and backend systems." },
      { property: "og:title", content: "Ankush Kumar — Ruby on Rails Developer" },
      { property: "og:description", content: "4+ years building scalable Rails APIs and backend systems." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <Layout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-30">
          <img src={heroImg} alt="" width={1280} height={1280} className="w-full h-full object-cover object-right" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, var(--background) 30%, transparent 80%)" }} />
        </div>
        <div className="w-full px-6 lg:px-12 pt-24 pb-32 md:pt-36 md:pb-44">
          <p className="font-mono text-s uppercase tracking-[0.3em] text-primary mb-6">Ruby on Rails Developer</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] max-w-4xl">
            Building <em className="text-primary not-italic">reliable</em> backends with craft & care.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
            I'm Ankush Kumar — a software developer with 5+ years of experience designing and shipping scalable web applications and RESTful APIs in Ruby on Rails.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/projects" className="group inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition" style={{ boxShadow: "var(--shadow-glow)" }}>
              View projects <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border hover:bg-secondary font-medium transition">
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full px-6 lg:px-12 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Server, title: "Backend Systems", desc: "Scalable Rails apps, background jobs, and service architecture." },
            { icon: Code2, title: "RESTful APIs", desc: "Clean, well-documented APIs with controllers, serializers & RSpec tests." },
            { icon: Database, title: "Databases", desc: "PostgreSQL & MySQL — schema design, optimization, and reliable storage." },
          ].map((c) => (
            <div key={c.title} className="p-8 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors">
              <c.icon className="h-6 w-6 text-primary mb-5" />
              <h3 className="font-display text-xl mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full px-6 lg:px-12 py-20 border-t border-border">
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { n: "4.8+", l: "Years experience" },
            { n: "3", l: "Major projects" },
            { n: "100%", l: "Test coverage focus" },
            { n: "1", l: "Employee of the Month" },
          ].map((s) => (
            <div key={s.l}>
              <p className="font-display text-5xl text-primary">{s.n}</p>
              <p className="text-sm text-muted-foreground mt-2">{s.l}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}