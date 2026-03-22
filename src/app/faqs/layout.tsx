import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about therapy sessions, billing, insurance coverage, cancellation policy, and more at Achieve Therapy Centre.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
