import { education } from '@/lib/data';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/ui/reveal';
import { GraduationCap } from 'lucide-react';

export function Education() {
  if (education.length === 0) return null;

  return (
    <section id="education" className="border-t border-line bg-white/40 px-6 py-24 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Education" title="Academic background" />
        <div className="space-y-4">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 0.1}>
              <div className="flex flex-col gap-3 rounded-2xl border border-line p-6 sm:flex-row sm:items-start">
                <GraduationCap size={20} className="mt-1 flex-shrink-0 text-teal" />
                <div>
                  <h3 className="font-display text-lg font-semibold">{e.degree}</h3>
                  <p className="mt-1 font-mono text-xs text-muted dark:text-white/50">
                    {e.school} · {e.period}
                  </p>
                  {e.detail && <p className="mt-2 text-sm text-muted dark:text-white/60">{e.detail}</p>}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
