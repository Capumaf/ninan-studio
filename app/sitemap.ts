import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ninan-studio.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://ninan-studio.vercel.app/#about",
      lastModified: new Date(),
    },
    {
      url: "https://ninan-studio.vercel.app/#work",
      lastModified: new Date(),
    },
    {
      url: "https://ninan-studio.vercel.app/#services",
      lastModified: new Date(),
    },
    {
      url: "https://ninan-studio.vercel.app/#process",
      lastModified: new Date(),
    },
    {
      url: "https://ninan-studio.vercel.app/#contact",
      lastModified: new Date(),
    },
  ];
}
