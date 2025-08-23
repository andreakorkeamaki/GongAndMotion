import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.gongandmotion.com';

  const routes = [
    '',
    'qigong',
    'massage',
    'gongbath',
    'dancingmindfulness',
    'events',
    'contact',
  ];

  const now = new Date();

  return routes.map((path) => ({
    url: path ? `${baseUrl}/${path}` : baseUrl,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.8,
  }));
}
