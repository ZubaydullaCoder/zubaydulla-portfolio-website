import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "uz"],
  defaultLocale: "en",
  localePrefix: "always",
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
