"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";
import { contactData } from "@/lib/data";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const t = useTranslations("contact");

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>{t("title")}</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        {t.rich("description", {
          email: (chunks) => (
            <a className="underline" href="mailto:zubaydullacoder@gmail.com">
              zubaydullacoder@gmail.com
            </a>
          ),
        })}
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(t("form.error"));
            return;
          }
          toast.success(t("form.success"));
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder={t("form.emailPlaceholder")}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          required
          maxLength={5000}
          placeholder={t("form.messagePlaceholder")}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
