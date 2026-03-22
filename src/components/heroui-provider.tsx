"use client";
import { RouterProvider } from "@heroui/react";
import { useRouter } from "next/navigation";

export function HeroUIProviderWrapper({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <RouterProvider navigate={(path) => router.push(path)}>
      {children}
    </RouterProvider>
  );
}
