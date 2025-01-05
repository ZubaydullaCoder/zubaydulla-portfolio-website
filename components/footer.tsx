import { useTranslations } from "next-intl";
import React from "react";

export default function Footer() {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        {t("copyright", { year: currentYear })}
      </small>
      <p className="text-xs">
        <span className="font-semibold">{t("aboutWebsite")}</span>{" "}
        {t("techStack")}
      </p>
    </footer>
  );
}
