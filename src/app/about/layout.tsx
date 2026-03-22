import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Our Clinic",
  description:
    "Founded in 2009, Achieve Therapy Centre provides quality, client-centered therapy services in Ottawa with a team of Occupational Therapists and Speech-Language Pathologists.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
