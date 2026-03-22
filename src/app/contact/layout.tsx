import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Achieve Therapy Centre — Suite 310, 1 Centrepointe Dr, Ottawa, ON K2G 6E2. Phone: 613-680-1780. Currently accepting new clients.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
