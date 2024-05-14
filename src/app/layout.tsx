import { Toaster } from "@/components/ui/toaster";

import "@/styles/globals.css";

import { ThemeProvider } from "@/components/ui/theme-provider";

import NextTopLoader from "nextjs-toploader";

import { PROJECT_NAME, SITE_URL } from "@/constants/constants";

import genPageMetadata from "./gen-page-metadata";

import { nunitoFont } from "./font";

const ogImg = "servify.png";
const description =
  "Encuentra al profesional para el servicio que necesitas en tu ciudad";

genPageMetadata(PROJECT_NAME, description, SITE_URL, ogImg, SITE_URL);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={nunitoFont.className}>
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
