"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { faqs } from "@/lib/constants";

export function FAQ() {
  return (
    <section id="faq" className="max-w-3xl mx-auto px-4 md:px-8 py-16 md:py-24">
      <SectionHeading
        eyebrow="FAQ"
        title="Common questions, answered"
        subtitle="Still unsure about something? Call us — we're happy to talk it through before you book."
      />

      <Accordion className="w-full">
  {faqs.map((faq, i) => (
    <AccordionItem key={i} value={`item-${i}`} className="border-border">
      <AccordionTrigger className="font-heading text-left text-base font-medium hover:text-primary">
        {faq.question}
      </AccordionTrigger>
      <AccordionContent className="text-text-muted leading-relaxed">
        {faq.answer}
      </AccordionContent>
    </AccordionItem>
  ))}
</Accordion>
    </section>
  );
}