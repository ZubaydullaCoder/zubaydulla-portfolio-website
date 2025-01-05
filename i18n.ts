import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";
import { getRequestConfig } from "next-intl/server";

export const locales = ["en", "uz"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

// Define routing configuration
export const routing = defineRouting({
  locales,
  defaultLocale,
  pathnames: {
    "/": "/",
    "/projects": "/projects",
    "/about": "/about",
    "/contact": "/contact",
  },
});

// Create navigation APIs
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);

export default getRequestConfig(async ({ requestLocale }) => {
  // Await the requestLocale and provide a fallback if necessary
  let locale = await requestLocale;

  // Validate the locale or set it to the default if invalid
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
    timeZone: "UTC",
  };
});
