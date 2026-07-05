import { skillGroups } from '@/lib/data';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/ui/reveal';

export function Skills() {
  return (
    <section id="skills" className="border-t border-line bg-white/40 px-6 py-24 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="Tools that shape the data"
          lede="A working set split between application development and data movement — legacy-stable on one side, streaming-fresh on the other."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.category} delay={gi * 0.1}>
              <div className="rounded-2xl border border-line p-6">
                <div className="mb-4 flex items-baseline justify-between">
                  <h3 className="font-mono text-xs uppercase tracking-wide text-muted dark:text-white/50">
                    {group.category}
                  </h3>
                  <span className="font-mono text-[0.65rem] text-muted/70 dark:text-white/30">{group.note}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`rounded-lg px-3 py-1.5 font-mono text-sm transition-transform hover:-translate-y-0.5 ${
                        gi === 0
                          ? 'bg-teal-dim text-teal'
                          : 'bg-amber-dim text-amber'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
