import "../globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import LanguageSwitcher from "@/components/language-switcher";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import { ClientProviders } from "@/providers/clientProviders";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <html
      lang={locale}
      className={`${inter.className} !scroll-smooth bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
    >
      <body>
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ClientProviders locale={locale} messages={messages}>
          <Header />
          <LanguageSwitcher />
          {children}
          <Footer />
          <Toaster position="top-right" />
          <ThemeSwitch />
        </ClientProviders>
      </body>
    </html>
  );
}
