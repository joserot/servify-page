import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

import "@/styles/globals.css";

import { ThemeProvider } from "@/components/ui/theme-provider";

import NextTopLoader from "nextjs-toploader";

import { PROJECT_NAME } from "@/constants/constants";

const font = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const siteUrl = "https://servify-page.vercel.app";
const ogImg = "servify.png";
const description =
  "Encuentra al profesional para el servicio que necesitas en tu ciudad";
const canonical = "https://servify-page.vercel.app";

export const metadata: Metadata = {
  title: PROJECT_NAME,
  description: description,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: `/${canonical}`,
  },
  openGraph: {
    title: PROJECT_NAME,
    description: description,
    url: canonical,
    siteName: PROJECT_NAME,
    images: [
      {
        url: ogImg,
      },
    ],
    locale: "es",
    type: "website",
  },
  twitter: {
    title: PROJECT_NAME,
    description: description,
    images: [ogImg],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={font.className}>
        <NextTopLoader color="#2563eb" height={3} />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <>
            {children}
            <Toaster />
          </>
        </ThemeProvider>
      </body>
    </html>
  );
}
