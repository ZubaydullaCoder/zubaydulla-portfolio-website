"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useTranslations } from "next-intl";
import zubaydulla from "@/public/linkedin_Zubaydulla1.jpg";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const t = useTranslations("intro");

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={zubaydulla}
              alt="Zubaydulla portrait"
              width="150"
              height="130"
              quality="95"
              priority={true}
              className="rounded-full h-44 w-42 object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.div
            className="absolute bottom-0 right-0 text-4xl p-1"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">{t("greeting")}</span> {t("role")}{" "}
        <span className="font-bold">{t("experience")}</span> {t("enjoy")}{" "}
        <span className="underline">{t("focus")}</span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-950 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-102 transition border border-gray-400/10 dark:border-gray-300/20"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          {t("contactMe")}{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <Link
          href="/CV.pdf"
          download
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-102 transition borderBlack dark:bg-white/10"
        >
          {t("downloadCV")}{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </Link>

        <Link
          href="https://linkedin.com"
          target="_blank"
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <BsLinkedin />
        </Link>

        <Link
          href="https://github.com"
          target="_blank"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <FaGithubSquare />
        </Link>
      </motion.div>
    </section>
  );
}
