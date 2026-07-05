'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '@/lib/data';
import { SectionHeading } from '@/components/ui/section-heading';

const ALL = 'All';

export function Projects() {
  const tags = useMemo(() => {
    const set = new Set();
    projects.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return [ALL, ...Array.from(set)];
  }, []);

  const [active, setActive] = useState(ALL);

  const filtered = active === ALL ? projects : projects.filter((p) => p.tags.includes(active));

  return (
    <section id="projects" className="border-t border-line bg-white/40 px-6 py-24 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Work delivered"
          lede={`Pulled from github.com/hariprasanth-ps — filter by what you're curious about.`}
        />

        <LayoutGroup>
          <div className="mb-10 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActive(tag)}
                className={`relative rounded-full px-4 py-1.5 font-mono text-xs transition-colors ${
                  active === tag ? 'text-white dark:text-ink' : 'text-muted hover:text-teal dark:text-white/60'
                }`}
              >
                {active === tag && (
                  <motion.span suppressHydrationWarning
                    layoutId="tag-pill"
                    className="absolute inset-0 rounded-full bg-ink dark:bg-white"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative">{tag}</span>
              </button>
            ))}
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.a suppressHydrationWarning
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  href={project.url}
                  target="_blank"
                  rel="noopener"
                  className={`group flex flex-col justify-between rounded-2xl border p-6 transition-colors ${
                    project.featured
                      ? 'border-ink bg-ink text-white dark:border-white dark:bg-white dark:text-ink'
                      : 'border-line hover:border-teal'
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-mono text-base font-semibold">{project.name}</h3>
                      <ExternalLink
                        size={16}
                        className="mt-1 flex-shrink-0 opacity-40 transition-opacity group-hover:opacity-100"
                      />
                    </div>
                    <p
                      className={`mt-1 text-xs font-medium uppercase tracking-wide ${
                        project.featured ? 'text-white/60 dark:text-ink/50' : 'text-teal'
                      }`}
                    >
                      {project.tagline}
                    </p>
                    <p
                      className={`mt-3 text-sm leading-relaxed ${
                        project.featured ? 'text-white/80 dark:text-ink/70' : 'text-muted dark:text-white/60'
                      }`}
                    >
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.stack.map((s) => (
                      <span
                        key={s}
                        className={`rounded-full border px-2.5 py-0.5 font-mono text-[0.65rem] ${
                          project.featured
                            ? 'border-white/25 text-white/70 dark:border-ink/25 dark:text-ink/70'
                            : 'border-line text-muted dark:text-white/50'
                        }`}
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div
                    className={`mt-4 flex items-center gap-2 font-mono text-xs ${
                      project.featured ? 'text-white/70 dark:text-ink/70' : 'text-muted dark:text-white/50'
                    }`}
                  >
                    <Github size={13} /> View repository
                  </div>
                </motion.a>
              ))}
            </AnimatePresence>
          </div>
        </LayoutGroup>
      </div>
    </section>
  );
}
