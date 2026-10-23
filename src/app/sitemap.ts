import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: 'https://pengembang.bikinkilat.web.id',
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: 'https://developer.bikinkilat.web.id',
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ];
}
