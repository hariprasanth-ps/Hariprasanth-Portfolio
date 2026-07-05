'use client';

import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { profile } from '@/lib/data';
import { Reveal } from '@/components/ui/reveal';

export function Contact() {
  return (
    <section id="contact" className="border-t border-line px-6 py-28 text-center">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <span className="mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-teal">
            <span className="h-px w-5 bg-teal" /> Contact
          </span>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Let&apos;s build something reliable together
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted dark:text-white/60">
            Open to conversations about full-stack engineering, ColdFusion modernization, or data pipelines.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {profile.email && (
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-mono text-sm text-white transition-transform hover:-translate-y-0.5 dark:bg-white dark:text-ink"
              >
                <Mail size={16} /> Email
              </a>
            )}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-2 rounded-full border border-line px-6 py-3 font-mono text-sm transition-colors hover:border-teal hover:text-teal"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-2 rounded-full border border-line px-6 py-3 font-mono text-sm transition-colors hover:border-teal hover:text-teal"
            >
              <Github size={16} /> GitHub
            </a>
            {profile.phone && (
              <a
                href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 rounded-full border border-line px-6 py-3 font-mono text-sm transition-colors hover:border-teal hover:text-teal"
              >
                <Phone size={16} /> Call
              </a>
            )}
          </div>
        </Reveal>

        <p className="mt-14 font-mono text-xs text-muted dark:text-white/40">
          built with Next.js &amp; Tailwind — © {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}
