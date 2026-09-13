"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, CTA_LABELS, SITE_CONFIG } from "@/lib/constants";
import MobileMenu from "./mobile-menu";

/**
 * Sticky site navigation. Compacts to a slimmer bar once the page has
 * scrolled, keeps the primary "Book Appointment" CTA visible at all depths,
 * and switches to logo + hamburger + compact CTA on mobile.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          paddingTop: scrolled ? 10 : 18,
          paddingBottom: scrolled ? 10 : 18,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
          scrolled
            ? "border-stone bg-ivory/90 backdrop-blur-md"
            : "border-transparent bg-transparent"
        )}
      >
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-5 md:px-12">
          {/* Logo — text lockup, no image asset */}
          <Link href="/" className="group flex flex-col leading-none" aria-label={`${SITE_CONFIG.name} — home`}>
            <span className="font-display text-xl md:text-2xl italic tracking-tight text-charcoal">
              Aurelia
            </span>
            <span className="text-[0.6rem] font-medium uppercase tracking-[0.35em] text-sage-dark group-hover:text-sage">
              Dental Studio
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => {
              const active =
                pathname === link.href ||
                pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors duration-150",
                    active ? "text-sage" : "text-charcoal/70 hover:text-charcoal"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href={CTA_LABELS.bookAppointmentHref}
              className="hidden rounded-sm bg-sage px-5 py-2.5 text-sm font-medium text-white transition-colors duration-150 hover:bg-sage-dark sm:inline-flex"
            >
              {CTA_LABELS.bookAppointment}
            </Link>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="inline-flex items-center justify-center rounded-sm border border-stone-dark p-2 text-charcoal transition-colors hover:bg-stone lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}