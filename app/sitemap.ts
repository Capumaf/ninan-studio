import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ninan-studio.vercel.app",
      lastModified: new Date(),
    },
  ];
}
