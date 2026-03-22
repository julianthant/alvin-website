export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Achieve Therapy Centre",
    description:
      "A client-centered approach to Speech-Language Pathology and Occupational Therapy for babies, children, and adolescents.",
    url: "https://alvin-website.vercel.app",
    telephone: "613-680-1780",
    email: "info@achievetherapycentre.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Suite 310, 1 Centrepointe Dr",
      addressLocality: "Ottawa",
      addressRegion: "ON",
      postalCode: "K2G 6E2",
      addressCountry: "CA",
    },
    openingHours: "Mo-Fr 09:00-17:00",
    medicalSpecialty: ["Speech-Language Pathology", "Occupational Therapy"],
    availableService: [
      { "@type": "MedicalTherapy", name: "Occupational Therapy" },
      { "@type": "MedicalTherapy", name: "Speech-Language Pathology" },
      { "@type": "MedicalTherapy", name: "Joint Therapy" },
      { "@type": "MedicalTherapy", name: "Group Therapy" },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
