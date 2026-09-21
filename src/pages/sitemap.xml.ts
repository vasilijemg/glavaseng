import type { APIRoute } from "astro";
import { pageUrl } from "../constants/site";
import { services } from "../data/services";
import { workMeta } from "../data/workMeta";

const pages = ["/", "/services", "/work", "/about", "/contact", ...services.map((service) => `/services/${service.slug}`), ...workMeta.map((project) => `/work/${project.slug}`)];

export const GET: APIRoute = () => {
  const urls = pages.map((path) => `    <url><loc>${pageUrl(path)}</loc></url>`).join("\n");
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
