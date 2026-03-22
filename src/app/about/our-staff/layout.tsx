import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Staff",
  description:
    "Meet our team of Occupational Therapists, Speech-Language Pathologists, and therapy assistants at Achieve Therapy Centre in Ottawa.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
