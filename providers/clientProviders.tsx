"use client";

import { NextIntlClientProvider } from "next-intl";
import ThemeContextProvider from "@/context/theme-context";
import ActiveSectionContextProvider from "@/context/active-section-context";

interface ClientProvidersProps {
  children: React.ReactNode;
  locale: string;
  messages: any;
}

export function ClientProviders({
  children,
  locale,
  messages,
}: ClientProvidersProps) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone="UTC">
      <ThemeContextProvider>
        <ActiveSectionContextProvider>{children}</ActiveSectionContextProvider>
      </ThemeContextProvider>
    </NextIntlClientProvider>
  );
}
