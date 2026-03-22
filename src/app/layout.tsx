import type { Metadata } from "next";
import { Antic } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { HeroUIProviderWrapper } from "@/components/heroui-provider";
import { SiteNavbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const antic = Antic({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-antic",
});

export const metadata: Metadata = {
  title: "Achieve Therapy Centre",
  description:
    "A client-centered approach to Speech-Language Pathology and Occupational Therapy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={antic.variable} suppressHydrationWarning>
      <body className="antialiased">
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
