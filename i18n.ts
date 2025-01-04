import { getRequestConfig } from "next-intl/server";
import { createLocalizedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en", "uz"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const getConfig = getRequestConfig(async ({ requestLocale }) => {
  try {
    const locale = (await requestLocale) || defaultLocale;

    if (!locales.includes(locale as Locale)) {
      return {
        messages: (await import(`./messages/${defaultLocale}.json`)).default,
        timeZone: "UTC",
        locale: defaultLocale,
      };
    }

    return {
      messages: (await import(`./messages/${locale}.json`)).default,
      timeZone: "UTC",
      locale,
    };
  } catch (error) {
    console.error(`Failed to load messages for locale:`, error);
    throw new Error(`Failed to load messages: ${error.message}`);
  }
});

export const { Link, redirect, useRouter, usePathname } =
  createLocalizedPathnamesNavigation({ locales });
