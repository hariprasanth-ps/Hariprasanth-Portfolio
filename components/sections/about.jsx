import { about } from '@/lib/data';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/ui/reveal';

export function About() {
  return (
    <section id="about" className="border-t border-line px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="About" title={about.heading} />

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal delay={0.1}>
            <div className="space-y-5 text-base leading-relaxed text-muted dark:text-white/70">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {about.focusAreas.map((f, i) => (
              <Reveal key={f.title} delay={0.15 + i * 0.08}>
                <div className="rounded-2xl border border-line p-5 transition-colors hover:border-teal/60">
                  <h3 className="font-display text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted dark:text-white/60">{f.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
