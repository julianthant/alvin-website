import type { Metadata } from "next";
import { Antic } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { HeroUIProviderWrapper } from "@/components/heroui-provider";
import { SiteNavbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { StructuredData } from "@/components/structured-data";
import "./globals.css";

const antic = Antic({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-antic",
});

const siteUrl = "https://alvin-website.vercel.app";
const ogImage = `${process.env.NEXT_PUBLIC_BLOB_URL || ""}/og-image.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Achieve Therapy Centre | Speech-Language Pathology & Occupational Therapy in Ottawa",
    template: "%s | Achieve Therapy Centre",
  },
  description:
    "A client-centered approach to Speech-Language Pathology and Occupational Therapy for babies, children, and adolescents in Ottawa. Currently accepting new clients.",
  keywords: [
    "speech therapy Ottawa",
    "occupational therapy Ottawa",
    "pediatric therapy",
    "speech-language pathology",
    "child therapy Ottawa",
    "OT Ottawa",
    "SLP Ottawa",
    "Achieve Therapy Centre",
    "autism therapy Ottawa",
    "group therapy children",
    "Ontario Autism Program",
  ],
  authors: [{ name: "Achieve Therapy Centre" }],
  creator: "Achieve Therapy Centre",
  publisher: "Achieve Therapy Centre",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    siteName: "Achieve Therapy Centre",
    title: "Achieve Therapy Centre | Speech-Language Pathology & Occupational Therapy",
    description:
      "A client-centered approach to Speech-Language Pathology and Occupational Therapy for babies, children, and adolescents in Ottawa.",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Achieve Therapy Centre",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Achieve Therapy Centre | Speech-Language Pathology & Occupational Therapy",
    description:
      "Client-centered Speech-Language Pathology and Occupational Therapy for children in Ottawa.",
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={antic.variable} suppressHydrationWarning>
      <body className="antialiased">
        <StructuredData />
        <ThemeProvider>
          <HeroUIProviderWrapper>
            <div className="flex min-h-screen flex-col">
              <SiteNavbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </HeroUIProviderWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
