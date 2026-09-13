"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Phone, MapPin, Calendar } from "lucide-react";

import { cn } from "@/lib/utils";
import { CTA_LABELS, SITE_CONFIG } from "@/lib/constants";

export default function MobileActionBar() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  const hidden = pathname === "/book";

  useEffect(() => {
    if (hidden) {
      setVisible(false);
      return;
    }

    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hidden]);

  const actions = [
    {
      label: "Call",
      href: SITE_CONFIG.phoneLink,
      Icon: Phone,
    },
    {
      label: "Directions",
      href: SITE_CONFIG.mapsUrl,
      external: true,
      Icon: MapPin,
    },
    {
      label: "Book",
      href: CTA_LABELS.bookAppointmentHref,
      Icon: Calendar,
    },
  ];

  return (
    <motion.nav
      aria-label="Quick actions"
      initial={false}
      animate={visible && !hidden ? { y: 0 } : { y: 80 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed inset-x-0 bottom-0 z-40 border-t border-stone bg-white shadow-md md:hidden"
      style={{
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      <div className="grid grid-cols-3">
        {actions.map(({ label, href, external, Icon }) => {
          const content = (
            <>
              <Icon className="h-5 w-5" strokeWidth={1.75} />
              <span className="text-xs font-medium">{label}</span>
            </>
          );

          if (external) {
            return (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex flex-col items-center justify-center gap-1 py-3",
                  "text-charcoal/80 transition-colors duration-200 hover:text-sage"
                )}
              >
                {content}
              </a>
            );
          }

          return (
            <Link
              key={label}
              href={href}
              className={cn(
                "flex flex-col items-center justify-center gap-1 py-3",
                "text-charcoal/80 transition-colors duration-200 hover:text-sage"
              )}
            >
              {content}
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}