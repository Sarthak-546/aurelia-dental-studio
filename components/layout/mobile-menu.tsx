"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import { X, Phone, Mail } from "lucide-react";

import { cn } from "@/lib/utils";
import { NAV_LINKS, CTA_LABELS, SITE_CONFIG } from "@/lib/constants";

const EASE = [0.16, 1, 0.3, 1] as const;

const overlayVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
};

const panelVariants = {
  closed: { x: "100%" },
  open: { x: 0 },
};

const linkContainerVariants = {
  closed: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
  open: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const linkItemVariants = {
  closed: { opacity: 0, y: 16 },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal>
            <Dialog.Overlay asChild forceMount>
            <motion.div
              key="mobile-menu-overlay"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed inset-0 z-50 bg-charcoal/40"
            />
          </Dialog.Overlay>

          <Dialog.Content asChild forceMount>
            <motion.div
              key="mobile-menu-panel"
              variants={panelVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ duration: 0.4, ease: EASE }}
              className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col border-l border-stone bg-ivory"
            >
              <div className="flex items-center justify-between px-5 pb-2 pt-5">
                <Link
                  href="/"
                  onClick={onClose}
                  className="flex flex-col leading-none"
                  aria-label={`${SITE_CONFIG.name} — home`}
                >
                  <span className="font-display text-2xl italic text-charcoal">
                    Aurelia
                  </span>
                  <span className="font-sans text-[11px] uppercase tracking-widest text-sage">
                    Dental Studio
                  </span>
                </Link>

                <Dialog.Close
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full text-charcoal transition-colors duration-200 hover:bg-stone"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" strokeWidth={2} />
                </Dialog.Close>
              </div>

              <nav className="flex-1 overflow-y-auto px-5 py-6" aria-label="Mobile">
                <motion.ul
                  variants={linkContainerVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="flex flex-col gap-5"
                >
                  <motion.li variants={linkItemVariants}>
                    <Link
                      href="/"
                      onClick={onClose}
                      className="font-display text-2xl text-charcoal transition-colors duration-200 hover:text-sage"
                    >
                      Home
                    </Link>
                  </motion.li>
                  {NAV_LINKS.map((link) => (
                    <motion.li key={link.href} variants={linkItemVariants}>
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className="font-display text-2xl text-charcoal transition-colors duration-200 hover:text-sage"
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </nav>

              <div className="border-t border-stone px-5 py-6">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.35, duration: 0.4, ease: "easeOut" }}
                  className="mb-5 space-y-3 text-sm text-charcoal/75"
                >
                  <a
                    href={SITE_CONFIG.phoneLink}
                    onClick={onClose}
                    className="flex items-center gap-2.5 transition-colors duration-200 hover:text-sage"
                  >
                    <Phone className="h-4 w-4 text-sage" strokeWidth={2} />
                    {SITE_CONFIG.phone}
                  </a>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    onClick={onClose}
                    className="flex items-center gap-2.5 transition-colors duration-200 hover:text-sage"
                  >
                    <Mail className="h-4 w-4 text-sage" strokeWidth={2} />
                    {SITE_CONFIG.email}
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.45, duration: 0.4, ease: "easeOut" }}
                >
                  <Link
                    href={CTA_LABELS.bookAppointmentHref}
                    onClick={onClose}
                    className={cn(
                      "flex w-full items-center justify-center rounded-full bg-sage px-6 py-4",
                      "font-semibold text-ivory transition-colors duration-200 hover:bg-sage-dark"
                    )}
                  >
                    {CTA_LABELS.bookAppointment}
                  </Link>
                </motion.div>
              </div>

              <Dialog.Description className="sr-only">
                Mobile navigation for {SITE_CONFIG.name}.
              </Dialog.Description>
            </motion.div>
          </Dialog.Content>
        </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}