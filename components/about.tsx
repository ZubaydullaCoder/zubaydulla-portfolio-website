"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function About() {
  const { ref } = useSectionInView("About");
  const t = useTranslations("about");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{t("title")}</SectionHeading>
      <p className="mb-3">
        {t("aboutDescriptionPart1")}
        <Link
          href="https://www.testdome.com/certificates/eac7a232c0d14f7d9c80a75a4a972865"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium underline"
        >
          {t("testDomeLink")}
        </Link>
        {t("aboutDescriptionPart2")}
      </p>
    </motion.section>
  );
}
