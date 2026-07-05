import { certifications } from '@/lib/data';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/ui/reveal';
import { Award, ExternalLink } from 'lucide-react';

export function Certifications() {
  if (certifications.length === 0) return null;

  return (
    <section id="certifications" className="border-t border-line px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Certifications" title="Credentials" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => {
            const Wrapper = c.url ? 'a' : 'div';
            return (
              <Reveal key={c.name} delay={i * 0.08}>
                <Wrapper
                  {...(c.url ? { href: c.url, target: '_blank', rel: 'noopener' } : {})}
                  className="flex items-start gap-3 rounded-2xl border border-line p-5 transition-colors hover:border-teal"
                >
                  <Award size={18} className="mt-0.5 flex-shrink-0 text-teal" />
                  <div>
                    <h3 className="font-display text-base font-semibold">{c.name}</h3>
                    <p className="text-sm text-muted dark:text-white/60">
                      {c.issuer}
                      {c.year ? ` · ${c.year}` : ''}
                    </p>
                  </div>
                  {c.url && <ExternalLink size={14} className="ml-auto mt-1 text-muted" />}
                </Wrapper>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
