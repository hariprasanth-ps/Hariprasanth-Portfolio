'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { profile } from '@/lib/data';
import { GithubStats } from '@/components/github-stats';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[92vh] items-center overflow-hidden pt-24">
      {/* Ambient gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-teal/10 blur-3xl" />
        <div className="absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-amber/10 blur-3xl" />
      </div>

      <motion.div suppressHydrationWarning
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-6xl px-6"
      >
        <motion.span suppressHydrationWarning
          variants={item}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal/40 px-3 py-1 font-mono text-xs uppercase tracking-[0.12em] text-teal"
        >
          <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-teal" />
          Available for opportunities
        </motion.span>

        <motion.h1 suppressHydrationWarning
          variants={item}
          className="max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink dark:text-white sm:text-6xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p suppressHydrationWarning variants={item} className="mt-4 font-mono text-lg text-muted dark:text-white/60 sm:text-xl">
          {profile.role}
        </motion.p>

        <motion.p suppressHydrationWarning variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-muted dark:text-white/70">
          {profile.tagline}
        </motion.p>

        <motion.div suppressHydrationWarning variants={item} className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-mono text-sm text-white transition-transform hover:-translate-y-0.5 dark:bg-white dark:text-ink"
          >
            View projects
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-mono text-sm text-ink transition-colors hover:border-teal hover:text-teal dark:text-white"
          >
            Get in touch
          </a>
          <div className="flex items-center gap-3 pl-1 text-muted dark:text-white/60">
            <a href={profile.github} target="_blank" rel="noopener" aria-label="GitHub" className="transition-colors hover:text-teal">
              <Github size={19} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn" className="transition-colors hover:text-teal">
              <Linkedin size={19} />
            </a>
          </div>
        </motion.div>

        <motion.div suppressHydrationWarning variants={item} className="mt-14">
          <GithubStats />
        </motion.div>
      </motion.div>
    </section>
  );
}
