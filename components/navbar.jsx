'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileDown } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { stagesNav, profile } from '@/lib/data';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'border-b border-line bg-paper/80 backdrop-blur-md dark:bg-paper-dark/80'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm font-medium">
          <span className="h-2 w-2 rounded-full bg-teal shadow-[0_0_0_3px_theme(colors.teal.dim)]" />
          HPS
        </a>

        <nav className="hidden items-center gap-8 font-mono text-xs uppercase tracking-wide text-muted dark:text-white/60 md:flex">
          {stagesNav.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="transition-colors hover:text-teal">
              {s.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={profile.resumeUrl}
            download
            className="flex items-center gap-2 rounded-full border border-line px-4 py-2 font-mono text-xs transition-colors hover:border-teal hover:text-teal"
          >
            <FileDown size={14} /> Resume
          </a>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-line bg-paper dark:bg-paper-dark md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4 font-mono text-sm">
              {stagesNav.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-muted transition-colors hover:bg-teal/10 hover:text-teal dark:text-white/70"
                >
                  {s.label}
                </a>
              ))}
              <a
                href={profile.resumeUrl}
                download
                className="mt-2 flex items-center gap-2 rounded-lg border border-line px-3 py-2 text-muted"
              >
                <FileDown size={14} /> Download resume
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
