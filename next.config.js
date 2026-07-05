/** @type {import('next').NextConfig} */

// When building for GitHub Pages (set by the deploy workflow), the site is
// served from https://<user>.github.io/<repo>/ instead of the domain root,
// so it needs a basePath and static export. Local dev and other hosts
// (Vercel, Netlify, your own server) are unaffected.
const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repoName = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split('/')[1] : '';
const basePath = isGithubPages && repoName ? `/${repoName}` : '';

const nextConfig = {
  reactStrictMode: true,
  ...(isGithubPages && {
    output: 'export',
    basePath,
    assetPrefix: basePath ? `${basePath}/` : undefined,
    images: { unoptimized: true },
  }),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

module.exports = nextConfig;
