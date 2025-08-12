import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import Providers from "@/components/Providers";
import { GoogleAnalytics } from "nextjs-google-analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IO-TECH",
  description: "io tech",
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: 'en' | 'ar'}>;
}) {

  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Load translation messages for the selected locale
  const messages = (await import(`@/messages/${locale}.json`)).default;



  return (
    <html className="dark" lang={locale} dir={locale=="ar"?"rlt":"ltr"} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  ${locale==="ar" && "text-right"}`}
      >
        <GoogleAnalytics trackPageViews gaMeasurementId='G-63NP5CQ8DZ'/>
        <Providers locale={locale} messages={messages}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
