"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/data/site";

export function ContactInfoCard() {
  return (
    <div className="rounded-xl border border-border bg-card p-4 shadow-sm sm:p-5 md:p-6">
      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-3">
          <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <div>
            <p className="text-sm font-medium text-foreground">Phone</p>
            <a
              href={`tel:${siteConfig.phone.replace(/-/g, "")}`}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {siteConfig.phone}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <div>
            <p className="text-sm font-medium text-foreground">Email</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <div>
            <p className="text-sm font-medium text-foreground">Address</p>
            <p className="text-sm text-muted-foreground">
              {siteConfig.fullAddress}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <div>
            <p className="text-sm font-medium text-foreground">Hours</p>
            <p className="text-sm text-muted-foreground">
              {siteConfig.hours.weekdays}
            </p>
            <p className="text-xs text-muted-foreground/70">
              {siteConfig.hours.note}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
