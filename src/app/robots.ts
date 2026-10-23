import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: ['Googlebot', 'Bingbot', 'YandexBot', 'DuckDuckBot', 'Baiduspider'],
        allow: '/',
      },
    ],
    sitemap: 'https://pengembang.bikinkilat.web.id/sitemap.xml',
    host: 'https://pengembang.bikinkilat.web.id',
  };
}
