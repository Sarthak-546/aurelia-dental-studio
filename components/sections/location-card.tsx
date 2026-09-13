import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { clinic } from "@/data/clinic";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

function buildAddress(addr: typeof clinic.contact.address): string {
  const p: string[] = [addr.line1];
  if (addr.line2) p.push(addr.line2);
  p.push(addr.city + ", " + addr.state + " " + addr.postalCode);
  p.push(addr.country);
  return p.join(", ");
}

export function LocationCard() {
  const address = buildAddress(clinic.contact.address);
  const directionsUrl = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(address);
  const embedUrl = clinic.contact.mapEmbedUrl;
  return (
    <section id="location" className="bg-ivory px-4 py-16 sm:px-6 sm:py-24 lg:px-8" aria-label="Contact and location">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Find Us" title="Visit the clinic" />
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-6 rounded-lg border border-stone bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-start gap-4">
              <span aria-hidden="true" className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-stone text-sage">
                <MapPin className="h-4 w-4" strokeWidth={2} />
              </span>
              <div>
                <p className="text-sm font-semibold text-charcoal">Address</p>
                <address className="mt-1 text-sm not-italic leading-relaxed text-charcoal/70">
                  {clinic.contact.address.line1}<br />
                  {clinic.contact.address.line2 && (<>{clinic.contact.address.line2}<br /></>)}
                  {clinic.contact.address.city}, {clinic.contact.address.state} {clinic.contact.address.postalCode}<br />
                  {clinic.contact.address.country}
                </address>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span aria-hidden="true" className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-stone text-sage">
                <Phone className="h-4 w-4" strokeWidth={2} />
              </span>
              <div>
                <p className="text-sm font-semibold text-charcoal">Phone</p>
                <a href={"tel:" + clinic.contact.phone.replace(/\s/g, "")} className="mt-1 block text-sm text-charcoal/70 hover:text-sage">{clinic.contact.phone}</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span aria-hidden="true" className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-stone text-sage">
                <Mail className="h-4 w-4" strokeWidth={2} />
              </span>
              <div>
                <p className="text-sm font-semibold text-charcoal">Email</p>
                <a href={"mailto:" + clinic.contact.email} className="mt-1 block text-sm text-charcoal/70 hover:text-sage">{clinic.contact.email}</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span aria-hidden="true" className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-stone text-sage">
                <Clock className="h-4 w-4" strokeWidth={2} />
              </span>
              <div className="flex-1">
                <p className="text-sm font-semibold text-charcoal">Opening hours</p>
                <ul className="mt-2 divide-y divide-stone text-sm" role="list">
                  {clinic.openingHours.map((entry) => (
                    <li key={entry.day} className={cn("flex items-center justify-between py-2", entry.closed && "opacity-50")}>
                      <span className="font-medium text-charcoal">{entry.day}</span>
                      <span className="text-charcoal/60">{entry.closed ? "Closed" : entry.open + " — " + entry.close}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <Button asChild size="lg"><a href={directionsUrl} target="_blank" rel="noopener noreferrer">Get Directions<Mail className="h-4 w-4" strokeWidth={2} /></a></Button>
              <Button asChild variant="secondary" size="lg"><a href={"tel:" + clinic.contact.phone.replace(/\s/g, "")}><Phone className="h-4 w-4" strokeWidth={2} />Call the clinic</a></Button>
            </div>
          </div>

          {/* Live Google Map embed */}
          <div className="relative min-h-[320px] overflow-hidden rounded-lg border border-stone bg-stone">
            {embedUrl ? (
              <iframe
                src={embedUrl}
                title={`Map showing ${clinic.name}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            ) : (
              <>
                <div aria-hidden="true" className="absolute inset-0" style={{ backgroundImage: "linear-gradient(to right, rgba(201,194,178,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(201,194,178,0.35) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
                <div aria-hidden="true" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"><span className="flex h-16 w-16 items-center justify-center rounded-full bg-sage/10"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage/15"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-sage shadow-md"><MapPin className="h-4 w-4 text-ivory" fill="currentColor" /></span></span></span></div>
                <div className="absolute inset-x-0 bottom-0 flex justify-center p-6"><Button asChild size="lg"><a href={directionsUrl} target="_blank" rel="noopener noreferrer">Open in Maps<MapPin className="h-4 w-4" strokeWidth={2} /></a></Button></div>
              </>
            )}
            <span className="sr-only">Live map for {address}</span>
          </div>

        </div>
      </div>
    </section>
  );
}
export default LocationCard;
