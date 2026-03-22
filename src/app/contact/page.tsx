"use client";

import { useState } from "react";
import { Info } from "lucide-react";
import { siteConfig } from "@/data/site";
import { PageHero } from "@/components/layout/page-hero";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { CtaSection } from "@/components/layout/cta-section";
import { ContactInfoCard } from "@/components/contact-info-card";
import { StatusBadge } from "@/components/status-badge";
import { SocialLinks } from "@/components/social-links";
import { MotionWrapper } from "@/components/motion-wrapper";

const serviceOptions = [
  { key: "ot", label: "Occupational Therapy" },
  { key: "slp", label: "Speech-Language Pathology" },
  { key: "joint", label: "Joint Therapy" },
  { key: "group", label: "Group Therapy" },
  { key: "oap", label: "Ontario Autism Program" },
  { key: "other", label: "Other" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "Thank you for your message! We will get back to you shortly. (Note: This is a demo form.)"
    );
  };

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We would love to hear from you. Reach out to learn more about our services."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <SectionWrapper>
        <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Left Column: Contact Info */}
          <MotionWrapper>
            <div className="space-y-6 sm:space-y-8">
              <ContactInfoCard />

              {/* Service Availability */}
              <div>
                <h3 className="mb-3 font-serif text-lg font-semibold">
                  Service Availability
                </h3>
                <div className="flex flex-col gap-2">
                  <StatusBadge
                    status="accepting"
                    label="Speech-Language Pathology: Accepting new clients"
                  />
                  <StatusBadge
                    status="waitlist"
                    label="Occupational Therapy: Waitlist open for handwriting only"
                  />
                  <StatusBadge
                    status="closed"
                    label="Joint Therapy: Waitlist currently closed"
                  />
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="mb-3 font-serif text-lg font-semibold">
                  Follow Us
                </h3>
                <SocialLinks />
              </div>
            </div>
          </MotionWrapper>

          {/* Right Column: Contact Form */}
          <MotionWrapper delay={0.15}>
            <div className="rounded-xl border border-border bg-card p-5 shadow-sm sm:p-6 md:p-8">
              <h3 className="mb-4 font-serif text-lg font-bold sm:mb-6 sm:text-xl">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full rounded-md border border-border bg-input px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Email <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full rounded-md border border-border bg-input px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="(613) 000-0000"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full rounded-md border border-border bg-input px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30"
                  />
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Service Interest
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full rounded-md border border-border bg-input px-3 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30"
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((option) => (
                      <option key={option.key} value={option.key}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Message <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    id="message"
                    placeholder="Tell us how we can help..."
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full rounded-md border border-border bg-input px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-sm transition hover:bg-primary/90"
                >
                  Send Message
                </button>
              </form>
            </div>
          </MotionWrapper>
        </div>
      </SectionWrapper>

      {/* Location Section */}
      <SectionWrapper alternate>
        <MotionWrapper>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-2xl font-bold">Our Location</h2>
            <p className="mt-2 text-muted-foreground">
              {siteConfig.fullAddress}
            </p>
            <div className="mt-1 flex items-center gap-2">
              <Info className="h-4 w-4 text-primary" />
              <p className="text-sm text-primary">{siteConfig.locationNote}</p>
            </div>

            {/* Google Maps embed */}
            <div className="mt-6 overflow-hidden rounded-2xl border border-border/60 shadow-sm">
              <iframe
                src="https://maps.google.com/maps?q=1+Centrepointe+Dr+Ottawa+ON+K2G+6E2&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Achieve Therapy Centre location"
              />
            </div>

            <div className="mt-6 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-4">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Note:</span>{" "}
                Please contact us to request intake forms for specific services.
                Our team will guide you through the registration process.
              </p>
            </div>
          </div>
        </MotionWrapper>
      </SectionWrapper>

      <CtaSection
        title="Prefer to Call?"
        subtitle={`Reach us at ${siteConfig.phone} during business hours.`}
        buttonText="Call Now"
        buttonHref={`tel:${siteConfig.phone.replace(/-/g, "")}`}
      />
    </>
  );
}
