import { Reveal } from './reveal';

export function SectionHeading({ eyebrow, title, lede }) {
  return (
    <Reveal>
      <div className="mb-12 max-w-2xl">
        <span className="mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-teal">
          <span className="h-px w-5 bg-teal" aria-hidden="true" />
          {eyebrow}
        </span>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink dark:text-white sm:text-4xl">
          {title}
        </h2>
        {lede && <p className="mt-4 text-muted dark:text-white/60">{lede}</p>}
      </div>
    </Reveal>
  );
}
