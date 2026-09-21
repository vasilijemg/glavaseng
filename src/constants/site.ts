export const CONTACT_EMAIL = "vg@glavasengineering.com";
export const SITE_URL = "https://glavasengineering.com";
export const LINKEDIN_URL = "https://www.linkedin.com/in/vasilije/";
export const pagePath = (path: string) => path === "/" ? path : `${path.replace(/\/+$/, "")}/`;
export const pageUrl = (path: string) => new URL(pagePath(path), SITE_URL).toString();
