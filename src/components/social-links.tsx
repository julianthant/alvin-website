import { Facebook, Instagram } from "lucide-react";
import { siteConfig } from "@/data/site";

export function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      <a
        href={siteConfig.social.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="text-muted-foreground transition-all duration-200 hover:scale-110 hover:text-primary"
      >
        <Facebook className="h-5 w-5" />
      </a>
      <a
        href={siteConfig.social.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="text-muted-foreground transition-all duration-200 hover:scale-110 hover:text-primary"
      >
        <Instagram className="h-5 w-5" />
      </a>
    </div>
  );
}
