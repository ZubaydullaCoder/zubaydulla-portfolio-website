"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import Flag from "react-world-flags";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { IoChevronDown } from "react-icons/io5";

const languages = [
  { code: "en", label: "English", flag: "GB" },
  { code: "uz", label: "O'zbek", flag: "UZ" },
];

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage =
    languages.find((lang) => lang.code === locale) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const switchLocale = (newLocale: string) => {
    const currentPath = pathname.replace(`/${locale}`, "") || "/";
    router.push(`/${newLocale}${currentPath}`, { scroll: false });
    setIsOpen(false);
  };

  return (
    <div className="fixed top-8 right-20 z-[999]" ref={dropdownRef}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 justify-between h-[4.5rem] sm:h-[2.2rem] w-full rounded-none sm:rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] px-4 dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex items-center gap-2">
          <Flag code={currentLanguage.flag} width="24" />
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {currentLanguage.label}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <IoChevronDown className="text-gray-500 dark:text-gray-400" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-auto right-0 mt-2 w-auto min-w-[140px] bg-white dark:bg-gray-800 rounded-full shadow-xl py-[2px] overflow-hidden"
          >
            {languages.map((language) => (
              <motion.button
                key={language.code}
                onClick={() => switchLocale(language.code)}
                className={`flex items-center justify-start gap-2 w-full px-1.5 pl-6 py-1 text-left transition-colors
               ${
                 locale === language.code
                   ? "text-gray-950 dark:text-gray-200 bg-gray-100 dark:bg-gray-700"
                   : "text-gray-500 hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-200"
               }`}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                >
                  <Flag code={language.flag} width="20" />
                  <span className="text-sm">{language.label}</span>
                </motion.div>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
