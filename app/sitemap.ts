import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.gabrielakramer.de/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://www.gabrielakramer.de/angst-regulieren/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.gabrielakramer.de/besser-schlafen/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://www.gabrielakramer.de/blog/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.gabrielakramer.de/coaching/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.gabrielakramer.de/gesund-abnehmen/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.gabrielakramer.de/methoden/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.gabrielakramer.de/stress-bewaeltigen/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.gabrielakramer.de/ueber-mich/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: "https://www.gabrielakramer.de/impressum/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://www.gabrielakramer.de/datenschutz/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
