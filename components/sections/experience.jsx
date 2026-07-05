import { experience, achievements } from '@/lib/data';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/ui/reveal';
import { Trophy } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="border-t border-line px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Experience"
          title="4+ years in production"
          lede="A timeline of where that time has gone."
        />

        <div className="relative border-l border-line pl-8">
          {experience.map((item, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="relative pb-10 last:pb-0">
                <span className="absolute -left-[2.35rem] top-1.5 h-3 w-3 rounded-full border-2 border-teal bg-paper dark:bg-paper-dark" />
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-display text-xl font-semibold">{item.role}</h3>
                  <span className="font-mono text-xs text-muted dark:text-white/50">
                    {item.org} · {item.period}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted dark:text-white/70">{item.summary}</p>
                <ul className="mt-3 space-y-1.5">
                  {item.highlights.map((h, hi) => (
                    <li key={hi} className="flex gap-2 text-sm text-muted dark:text-white/60">
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-teal" />
                      {h}
                    </li>
                  ))}
                </ul>
                {item.isPlaceholder && (
                  <p className="mt-3 font-mono text-xs text-amber">
                    ↳ placeholder — replace with your real employer, dates, and outcomes
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {achievements.length > 0 && (
          <div className="mt-4">
            <Reveal>
              <h3 className="mb-5 font-mono text-xs uppercase tracking-wide text-muted dark:text-white/50">
                Key Accomplishments
              </h3>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-3">
              {achievements.map((a, i) => (
                <Reveal key={a.title} delay={i * 0.08}>
                  <div className="h-full rounded-2xl border border-line p-5">
                    <Trophy size={16} className="mb-3 text-amber" />
                    <h4 className="font-display text-sm font-semibold">{a.title}</h4>
                    <p className="mt-2 text-sm text-muted dark:text-white/60">{a.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
