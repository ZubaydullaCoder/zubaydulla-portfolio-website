import { getRequestConfig } from "next-intl/server";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { notFound } from "next/navigation";

const locales = ["en", "uz"] as const;
const defaultLocale = "en";

export default getRequestConfig(async ({ requestLocale }) => {
  try {
    // Get locale using the new API
    let locale = await requestLocale;

    // Validate and fallback if needed
    if (!locale || !locales.includes(locale)) {
      locale = defaultLocale;
    }

    return {
      messages: (await import(`./messages/${locale}.json`)).default,
      timeZone: "UTC",
      locale,
    };
  } catch (error) {
    console.error(`Failed to load messages:`, error);
    throw new Error(`Failed to load messages: ${error.message}`);
  }
});

export const { Link, redirect, useRouter, usePathname } =
  createSharedPathnamesNavigation({ locales });
