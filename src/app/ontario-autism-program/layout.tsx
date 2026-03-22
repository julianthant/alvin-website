import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ontario Autism Program (OAP)",
  description:
    "Core Clinical Services provider for the Ontario Autism Program. Neurodiversity-affirming Speech-Language Pathology and Occupational Therapy for children with ASD.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
