import { testimonials } from '@/lib/data';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/ui/reveal';
import { Quote } from 'lucide-react';

export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="border-t border-line bg-white/40 px-6 py-24 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Testimonials" title="What people say" />
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="rounded-2xl border border-line p-6">
                <Quote size={20} className="mb-3 text-amber" />
                <p className="text-sm leading-relaxed text-muted dark:text-white/70">{t.quote}</p>
                <p className="mt-4 font-mono text-xs text-ink dark:text-white">
                  {t.name} <span className="text-muted dark:text-white/50">— {t.role}</span>
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
