export const dynamic = 'force-static';

export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://hariprasanth-ps.github.io/Hariprasanth-Portfolio//sitemap.xml', // TODO: replace with your real domain
  };
}
