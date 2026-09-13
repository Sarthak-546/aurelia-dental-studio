import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import SectionHeading from "@/components/ui/section-heading";
import { doctors } from "@/data/doctors";

export default function DoctorGrid() {
  return (
    <section className="bg-ivory px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Meet Our Team" title="Doctors & specialists" />

        <div className="mt-12 grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor) => (
            <Link
              key={doctor.slug}
              href={`/doctors/${doctor.slug}`}
              className={cn(
                "group flex flex-col overflow-hidden rounded-md bg-white shadow-sm transition-all duration-300",
                "hover:-translate-y-1.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 focus-visible:ring-offset-ivory"
              )}
            >
              <div
                className="relative aspect-[3/4] w-full overflow-hidden bg-stone"
                aria-hidden="true"
              >
                <Image
                  src={doctor.portraitUrl}
                  alt={`Portrait of ${doctor.name}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-xl font-medium text-charcoal">
                  {doctor.name}
                </h3>
                <p className="mt-1 text-sm text-sage">{doctor.credentials}</p>
                <p className="mt-2 text-sm text-charcoal/70">
                  {doctor.specialty}
                </p>
                <span className="mt-auto pt-4 text-xs font-semibold uppercase tracking-[0.15em] text-sage transition-colors group-hover:text-sage-dark">
                  View profile
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}