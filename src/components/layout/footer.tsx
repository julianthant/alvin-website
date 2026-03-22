import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/data/site";
import { SocialLinks } from "@/components/social-links";
import { asset } from "@/lib/assets";

const serviceLinks = [
  { label: "Occupational Therapy", href: "/occupational-therapy" },
  { label: "Speech Language Pathology", href: "/speech-language-pathology" },
  { label: "Joint Therapy", href: "/joint-therapy" },
  { label: "Group Therapy", href: "/group-therapy" },
];

const clinicLinks = [
  { label: "About", href: "/about" },
  { label: "Our Staff", href: "/about/our-staff" },
  { label: "Ontario Autism Program", href: "/ontario-autism-program" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 md:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
          {/* Column 1: Logo + Tagline + Social */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src={asset("logo-transparent.png")}
                alt="Achieve Therapy Centre"
                width={400}
                height={100}
                className="h-14 w-auto sm:h-16 lg:h-20 dark:brightness-0 dark:invert"
              />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {siteConfig.tagline}
            </p>
            <SocialLinks />
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="mb-4 font-serif text-sm font-semibold uppercase tracking-wider text-foreground">
              Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Clinic */}
          <div>
            <h3 className="mb-4 font-serif text-sm font-semibold uppercase tracking-wider text-foreground">
              Our Clinic
            </h3>
            <ul className="space-y-2.5">
              {clinicLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="mb-4 font-serif text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/-/g, "")}`}
                  className="flex items-start gap-2.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-2.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{siteConfig.fullAddress}</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <Clock className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{siteConfig.hours.weekdays}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-border pt-5 text-center sm:mt-10 sm:pt-6 md:mt-12">
          <p className="text-xs text-muted-foreground">
            &copy; 2025 {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
