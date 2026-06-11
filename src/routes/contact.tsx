import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Mail, Phone, Linkedin, Github, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ankush Kumar" },
      { name: "description", content: "Get in touch with Ankush Kumar — Ruby on Rails developer." },
      { property: "og:title", content: "Contact — Ankush Kumar" },
      { property: "og:description", content: "Get in touch." },
    ],
  }),
  component: ContactPage,
});

const channels = [
  { icon: Mail, label: "Email", value: "rockkush7@gmail.com", href: "mailto:rockkush7@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 80067 01114", href: "tel:+918006701114" },
  { icon: Linkedin, label: "LinkedIn", value: "ankush-kumar-7855aab2", href: "https://linkedin.com/in/ankush-kumar-7855aab2/" },
  { icon: Github, label: "GitHub", value: "kush-dev14", href: "https://github.com/kush-dev14" },
];

function ContactPage() {
  return (
    <Layout>
      <section className="w-full px-6 lg:px-12 pt-20 pb-12">
        <p className="font-mono text-s uppercase tracking-[0.3em] text-primary mb-6">Contact</p>
        <h1 className="font-display text-5xl md:text-7xl font-semibold leading-[0.95]">
          Let's build something <em className="text-primary not-italic">great</em>.
        </h1>
        <p className="mt-8 text-lg text-muted-foreground max-w-xl">
          Open to opportunities, collaborations, and conversations. Reach out through any channel below — I usually respond within a day.
        </p>
      </section>

      <section className="w-full px-6 lg:px-12 pb-20 space-y-3">
        {channels.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="group flex items-center justify-between gap-6 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
          >
            <div className="flex items-center gap-5">
              <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-secondary group-hover:bg-primary/10 transition-colors">
                <c.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{c.label}</p>
                <p className="font-display text-xl mt-1">{c.value}</p>
              </div>
            </div>
            <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
          </a>
        ))}
      </section>
    </Layout>
  );
}
