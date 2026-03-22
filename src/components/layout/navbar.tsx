"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { asset } from "@/lib/assets";
import { usePathname } from "next/navigation";
import { Dropdown, Button as HeroButton, Label } from "@heroui/react";
import { ChevronDown, Menu, Phone } from "lucide-react";
import { navigationItems } from "@/data/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

// Separate nav items from the Contact CTA
const mainNavItems = navigationItems.filter(
  (item) => item.href !== "/contact"
);
const contactItem = navigationItems.find((item) => item.href === "/contact");

export function SiteNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Track scroll for shadow effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 2);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = useCallback(
    (href: string) => {
      if (href === "/") return pathname === "/";
      return pathname === href || pathname.startsWith(href + "/");
    },
    [pathname]
  );

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-gray-50 dark:bg-zinc-900 transition-shadow duration-300 ${
        scrolled
          ? "border-border shadow-md"
          : "border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-18 sm:px-6 lg:h-24 lg:px-8">
        {/* ---- Logo ---- */}
        <NextLink href="/" className="relative shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-sm">
          <Image
            src={asset("logo-transparent.png")}
            alt="Achieve Therapy Centre"
            width={400}
            height={100}
            className="h-12 w-auto sm:h-14 lg:h-20 dark:brightness-0 dark:invert"
            priority
          />
        </NextLink>

        {/* ---- Desktop Navigation ---- */}
        <div className="hidden items-center gap-0.5 lg:flex">
          {mainNavItems.map((item) =>
            item.children && item.children.length > 0 ? (
              <Dropdown key={item.label}>
                <HeroButton
                  variant="ghost"
                  className={`gap-1 text-sm font-medium ${
                    isActive(item.href)
                      ? "text-primary"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 opacity-50" />
                </HeroButton>
                <Dropdown.Popover placement="bottom start" className="bg-gray-50 dark:bg-zinc-900 border border-border rounded-lg shadow-lg">
                  <Dropdown.Menu>
                    {item.children.map((child) => (
                      <Dropdown.Item
                        key={child.href}
                        id={child.href}
                        href={child.href}
                        textValue={child.label}
                        className={`rounded-md transition-colors hover:bg-muted ${
                          isActive(child.href)
                            ? "text-primary font-medium"
                            : ""
                        }`}
                      >
                        <Label>{child.label}</Label>
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown.Popover>
              </Dropdown>
            ) : (
              <NextLink
                key={item.label}
                href={item.href}
                className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-foreground/70 hover:text-foreground hover:bg-muted/60"
                }`}
              >
                {item.label}
              </NextLink>
            )
          )}
        </div>

        {/* ---- Right side: Theme toggle + CTA + Mobile menu ---- */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Desktop CTA */}
          {contactItem && (
            <NextLink
              href={contactItem.href}
              className="hidden lg:inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-all duration-200 hover:bg-primary/90 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Phone className="h-3.5 w-3.5" />
              Contact Us
            </NextLink>
          )}

          {/* Mobile hamburger (Sheet trigger) */}
          <div className="lg:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger
                render={
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Open navigation menu"
                  />
                }
              >
                <Menu className="h-5 w-5" />
              </SheetTrigger>

              <SheetContent side="right" className="overflow-y-auto">
                <SheetHeader className="border-b border-border pb-4">
                  <SheetTitle>
                    <NextLink href="/" onClick={closeMobile} className="inline-block">
                      <Image
                        src={asset("logo-transparent.png")}
                        alt="Achieve Therapy Centre"
                        width={140}
                        height={35}
                        className="h-10 w-auto dark:brightness-0 dark:invert"
                      />
                    </NextLink>
                  </SheetTitle>
                  <SheetDescription className="sr-only">
                    Site navigation menu
                  </SheetDescription>
                </SheetHeader>

                {/* Mobile nav links */}
                <div className="flex flex-col gap-0.5 px-4 py-3">
                  {mainNavItems.map((item) =>
                    item.children && item.children.length > 0 ? (
                      <Accordion key={item.label}>
                        <AccordionItem value={item.label} className="border-none">
                          <AccordionTrigger
                            className={`py-2.5 text-base hover:no-underline ${
                              isActive(item.href)
                                ? "text-primary font-semibold"
                                : "text-foreground/80"
                            }`}
                          >
                            {item.label}
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="flex flex-col gap-0.5 pl-3 border-l-2 border-primary/20 ml-1">
                              {item.children.map((child) => (
                                <SheetClose
                                  key={child.href}
                                  render={
                                    <NextLink
                                      href={child.href}
                                      onClick={closeMobile}
                                      className={`rounded-md px-3 py-2 text-sm transition-colors duration-150 ${
                                        isActive(child.href)
                                          ? "text-primary font-medium bg-primary/5"
                                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                                      }`}
                                    />
                                  }
                                >
                                  {child.label}
                                </SheetClose>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    ) : (
                      <SheetClose
                        key={item.label}
                        render={
                          <NextLink
                            href={item.href}
                            onClick={closeMobile}
                            className={`rounded-md px-1 py-2.5 text-base font-medium transition-colors duration-150 ${
                              isActive(item.href)
                                ? "text-primary font-semibold"
                                : "text-foreground/80 hover:text-foreground"
                            }`}
                          />
                        }
                      >
                        {item.label}
                      </SheetClose>
                    )
                  )}
                </div>

                {/* Mobile CTA */}
                {contactItem && (
                  <div className="mt-auto border-t border-border p-4">
                    <SheetClose
                      render={
                        <NextLink
                          href={contactItem.href}
                          onClick={closeMobile}
                          className="flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors duration-200 hover:bg-primary/90"
                        />
                      }
                    >
                      <Phone className="h-4 w-4" />
                      Contact Us
                    </SheetClose>
                  </div>
                )}
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
