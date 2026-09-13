import type { FAQ } from "@/types/faq";
import SectionHeading from "@/components/ui/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs as defaultFaqs } from "@/data/faqs";

interface FaqAccordionProps {
  items?: FAQ[];
  defaultOpen?: boolean;
  eyebrow?: string;
  heading?: string;
  groupByCategory?: boolean;
}

export default function FaqAccordion({
  items = defaultFaqs,
  defaultOpen = false,
  eyebrow = "FAQ",
  heading = "Questions, answered",
  groupByCategory = false,
}: FaqAccordionProps) {
  if (items.length === 0) return null;

  const grouped: Record<string, FAQ[]> | null = groupByCategory
    ? items.reduce<Record<string, FAQ[]>>((acc, faq) => {
        (acc[faq.category] ??= []).push(faq);
        return acc;
      }, {})
    : null;

  const singleValue = defaultOpen && items[0] ? items[0].id : undefined;

  if (grouped) {
    return (
      <section className="bg-ivory px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow={eyebrow} title={heading} />

          <div className="mt-10 space-y-10">
            {Object.entries(grouped).map(([category, list]) => (
              <div key={category}>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/45">
                  {category}
                </p>
                <Accordion type="single" collapsible defaultValue={singleValue && category === list[0]?.category && list.some((f) => f.id === singleValue) ? singleValue : undefined}>
                  {list.map((faq) => (
                    <AccordionItem key={faq.id} value={faq.id}>
                      <AccordionTrigger>{faq.question}</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-charcoal/75 leading-relaxed">
                          {faq.answer}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-ivory px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow={eyebrow} title={heading} />

        <Accordion
          type="single"
          collapsible
          defaultValue={singleValue}
          className="mt-10"
        >
          {items.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>
                <p className="text-charcoal/75 leading-relaxed">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}