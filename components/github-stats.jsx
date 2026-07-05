'use client';

import { useEffect, useState } from 'react';
import { profile } from '@/lib/data';

const username = profile.github.split('/').filter(Boolean).pop();

export function GithubStats() {
  const [stats, setStats] = useState(null);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    let cancelled = false;
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => {
        if (!res.ok) throw new Error('request failed');
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        setStats({
          public_repos: data.public_repos,
          followers: data.followers,
          following: data.following,
        });
        setStatus('ready');
      })
      .catch(() => {
        if (!cancelled) setStatus('error');
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const tiles = [
    { label: 'Years experience', value: `${profile.yearsExperience}+`, live: false },
    {
      label: 'Public repositories',
      value: status === 'ready' && stats ? String(stats.public_repos) : status === 'error' ? '11' : null,
      live: true,
    },
    { label: 'Core technologies', value: '7', live: false },
  ];

  return (
    <div className="flex flex-wrap gap-4">
      {tiles.map((t, i) => (
        <div
          key={t.label}
          className="min-w-[130px] rounded-xl border border-line bg-white/60 px-5 py-4 backdrop-blur-sm dark:bg-white/5"
          style={{ transform: i === 1 ? 'rotate(-1deg)' : i === 2 ? 'rotate(1deg)' : undefined }}
        >
          {t.value === null ? (
            <span className="mb-1 block h-7 w-8 animate-pulse rounded bg-line" aria-hidden="true" />
          ) : (
            <b className="block font-display text-2xl">{t.value}</b>
          )}
          <span className="font-mono text-[0.65rem] uppercase tracking-wide text-muted dark:text-white/50">
            {t.label}
          </span>
        </div>
      ))}
      {status === 'error' && (
        <p className="w-full font-mono text-[0.65rem] text-muted dark:text-white/40">
          live GitHub stats unavailable right now — showing static figures
        </p>
      )}
    </div>
  );
}
