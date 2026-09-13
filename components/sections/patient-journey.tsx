"use client";

import { motion } from "framer-motion";
import {
  CalendarClock,
  Coffee,
  Stethoscope,
  ClipboardList,
  HeartHandshake
} from "lucide-react";

import { cn } from "@/lib/utils";
import SectionHeading from "@/components/ui/section-heading";

const STEPS = [
  {
    number: "01",
    title: "Booking & reminders",
    description:
      "Book online in under a minute. We confirm by text and send a gentle reminder the day before, so there’s never any guesswork.",
    icon: CalendarClock,
  },
  {
    number: "02",
    title: "Welcome & coffee",
    description:
      "Arrive to a calm reception, warm tea or espresso, and a team that already knows your name and why you’re here.",
    icon: Coffee,
  },
  {
    number: "03",
    title: "Meet your dentist",
    description:
      "Your dedicated dentist talks through your history and concerns before any examination begins — no rushing, ever.",
    icon: Stethoscope,
  },
  {
    number: "04",
    title: "Consultation & plan",
    description:
      "Digital X-rays and scans put you in the picture. You’ll see your options on screen and leave with a clear, written plan.",
    icon: ClipboardList,
  },
  {
    number: "05",
    title: "Care & follow-up",
    description:
      "We check in after every treatment and keep long-term progress notes, so your care continues seamlessly between visits.",
    icon: HeartHandshake,
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

function StepCard({ step }: { step: typeof STEPS[0] }) {
  const Icon = step.icon;
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-stone bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-sage/30 hover:shadow-md sm:p-10">
      {/* Background Watermark Number */}
      <span className="absolute -right-4 -top-6 select-none font-display text-[130px] font-bold leading-none text-stone-dark/30 transition-colors duration-500 group-hover:text-sage/20">
        {step.number}
      </span>

      <div className="relative z-10 flex flex-col items-start">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sage/10 text-sage transition-colors duration-500 group-hover:bg-sage group-hover:text-white">
          <Icon className="h-6 w-6" strokeWidth={1.5} />
        </span>

        <h3 className="mt-6 font-display text-2xl font-medium text-charcoal">
          {step.title}
        </h3>

        <p className="mt-3 text-base leading-relaxed text-charcoal/70 text-pretty">
          {step.description}
        </p>
      </div>
    </div>
  );
}

export default function PatientJourney() {
  return (
    <section className="bg-ivory px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Your Visit" title="A calm, clear journey" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="relative mt-16 md:mt-24"
        >
          {/* Continuous vertical line */}
          <div
            className="absolute bottom-4 left-[28px] top-4 w-px bg-stone-dark/40 md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          />

          <ol className="relative space-y-8 md:space-y-0">
            {STEPS.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.li
                  key={step.number}
                  variants={item}
                  className={cn(
                    "relative flex flex-col md:flex-row md:items-center",
                    !isEven && "md:flex-row-reverse"
                  )}
                >
                  {/* Pin (Mobile aligns with icon, Desktop centers) */}
                  <div className="absolute left-[28px] top-[72px] z-10 flex h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ivory ring-[6px] ring-ivory md:left-1/2 md:top-1/2">
                    <div className="h-2.5 w-2.5 rounded-full bg-sage" />
                  </div>

                  {/* Card side */}
                  <div
                    className={cn(
                      "ml-14 py-4 md:ml-0 md:w-1/2 md:py-8",
                      isEven ? "md:pr-12 lg:pr-20" : "md:pl-12 lg:pl-20"
                    )}
                  >
                    <StepCard step={step} />
                  </div>

                  {/* Empty side for centering structure */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.li>
              );
            })}
          </ol>
        </motion.div>
      </div>
    </section>
  );
}