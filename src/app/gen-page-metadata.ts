import { Metadata } from "next";

export default function genPageMetadata(
  title: string,
  description: string,
  siteUrl: string,
  ogImg: string,
  canonical: string
): Metadata {
  return {
    title,
    description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: `/${canonical}`,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: title,
      images: [
        {
          url: ogImg,
        },
      ],
      locale: "es",
      type: "website",
    },
    twitter: {
      title,
      description,
      images: [ogImg],
    },
  };
}
