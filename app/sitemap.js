export const dynamic = 'force-static';

export default function sitemap() {
  return [
    {
      url: 'https://example.com', // TODO: replace with your real domain
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
