"use client";

import Image from "next/image";
import { Chip, Modal, Button } from "@heroui/react";
import type { StaffMember, StaffCategory } from "@/data/staff";

function getCategoryColor(
  category: StaffCategory
): "accent" | "default" | "warning" | "success" {
  switch (category) {
    case "Co-Owners":
      return "accent";
    case "Occupational Therapists":
      return "accent";
    case "OT Assistants":
      return "default";
    case "Speech-Language Pathologists":
      return "success";
    case "Communicative Disorders Assistants":
      return "warning";
    default:
      return "default";
  }
}

function getInitials(name: string): string {
  const parts = name.split(" ");
  const first = parts[0]?.[0] ?? "";
  const last = parts[parts.length - 1]?.[0] ?? "";
  return (first + last).toUpperCase();
}

function getCategoryLabel(category: StaffCategory): string {
  switch (category) {
    case "Co-Owners":
      return "Co-Owner";
    case "Occupational Therapists":
      return "OT";
    case "OT Assistants":
      return "OTA";
    case "Speech-Language Pathologists":
      return "SLP";
    case "Communicative Disorders Assistants":
      return "CDA";
    default:
      return category;
  }
}

const BLANK_PROFILE = "/staff/blank-profile.jpg";

function hasPhoto(photo: string): boolean {
  return !!photo && photo !== BLANK_PROFILE;
}

interface StaffCardProps {
  member: StaffMember;
}

export function StaffCard({ member }: StaffCardProps) {
  const color = getCategoryColor(member.category);
  const showPhoto = hasPhoto(member.photo);

  return (
    <Modal>
      <button className="h-full w-full text-left">
        <div className="h-full rounded-xl border border-border bg-card shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
          <div className="flex flex-col h-full items-center gap-2 p-4 text-center sm:gap-3 sm:p-5 md:p-6">
            {showPhoto ? (
              <Image
                src={member.photo}
                alt={member.name}
                width={80}
                height={80}
                className="h-16 w-16 rounded-full object-cover sm:h-20 sm:w-20"
              />
            ) : (
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 sm:h-20 sm:w-20">
                <span className="text-sm font-semibold text-primary sm:text-lg">
                  {getInitials(member.name)}
                </span>
              </div>
            )}
            <div className="space-y-0.5 sm:space-y-1">
              <h3 className="text-sm font-semibold text-foreground sm:text-base">{member.name}</h3>
              <p className="text-xs text-muted-foreground sm:text-sm">{member.title}</p>
            </div>
            <Chip size="sm" color={color} className="mt-auto">
              {getCategoryLabel(member.category)}
            </Chip>
            {member.languages.length > 1 && (
              <p className="text-xs text-muted-foreground">
                {member.languages.join(" / ")}
              </p>
            )}
          </div>
        </div>
      </button>
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-[600px]">
            <Modal.CloseTrigger />
            <Modal.Header>
              <div className="flex items-center gap-4">
                {showPhoto && (
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-full object-cover"
                  />
                )}
                <div>
                  <Modal.Heading className="font-serif text-xl font-bold">
                    {member.name}
                  </Modal.Heading>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </div>
            </Modal.Header>
            <Modal.Body className="space-y-6">
              <p className="leading-relaxed text-muted-foreground">
                {member.bio}
              </p>

              {member.education.length > 0 && (
                <div>
                  <h4 className="mb-2 font-serif text-sm font-semibold uppercase tracking-wider text-foreground">
                    Education
                  </h4>
                  <ul className="space-y-1">
                    {member.education.map((edu, i) => (
                      <li key={i} className="text-sm text-muted-foreground">
                        {edu}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <hr className="border-border" />

              {member.certifications.length > 0 && (
                <div>
                  <h4 className="mb-2 font-serif text-sm font-semibold uppercase tracking-wider text-foreground">
                    Certifications
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {member.certifications.map((cert, i) => (
                      <Chip key={i} size="sm">
                        {cert}
                      </Chip>
                    ))}
                  </div>
                </div>
              )}

              {member.specializations.length > 0 && (
                <div>
                  <h4 className="mb-2 font-serif text-sm font-semibold uppercase tracking-wider text-foreground">
                    Specializations
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {member.specializations.map((spec, i) => (
                      <Chip key={i} size="sm" color="accent">
                        {spec}
                      </Chip>
                    ))}
                  </div>
                </div>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button slot="close" variant="ghost">Close</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
