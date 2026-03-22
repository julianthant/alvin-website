import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Joint Therapy",
  description:
    "Combined Speech-Language Pathology and Occupational Therapy for children with Autism, Down Syndrome, Cerebral Palsy, and other developmental needs in Ottawa.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
