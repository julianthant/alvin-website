"use client";

import { Accordion } from "@heroui/react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  defaultExpandedKeys?: string[];
}

export function FaqAccordion({
  items,
  defaultExpandedKeys,
}: FaqAccordionProps) {
  return (
    <Accordion
      variant="surface"
      defaultExpandedKeys={defaultExpandedKeys}
      allowsMultipleExpanded
    >
      {items.map((item, index) => (
        <Accordion.Item key={index} id={index.toString()}>
          <Accordion.Heading>
            <Accordion.Trigger>
              <span className="font-medium text-foreground">
                {item.question}
              </span>
              <Accordion.Indicator>
                <ChevronDown />
              </Accordion.Indicator>
            </Accordion.Trigger>
          </Accordion.Heading>
          <Accordion.Panel>
            <Accordion.Body>
              <p className="leading-relaxed text-muted-foreground pb-2">
                {item.answer}
              </p>
            </Accordion.Body>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
