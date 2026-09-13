import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format a 10-digit US phone number string into (XXX) XXX-XXXX display format.
 * Strips non-digit characters before formatting.
 * Returns the original string if the digit count is not 10 or 11 (with leading 1).
 */
export function formatPhone(phone: string): string {
  const digits = phone.replace(/\D/g, "");

  const normalized =
    digits.length === 11 && digits.startsWith("1") ? digits.slice(1) : digits;

  if (normalized.length !== 10) {
    return phone;
  }

  const area = normalized.slice(0, 3);
  const prefix = normalized.slice(3, 6);
  const line = normalized.slice(6, 10);

  return `(${area}) ${prefix}-${line}`;
}

/**
 * Format a Date or ISO date string into a human-readable format.
 *
 * @param date - A Date object or ISO date string
 * @param options - Intl.DateTimeFormat options (defaults to long month, numeric day/year)
 * @returns Formatted date string, e.g. "January 15, 2025"
 */
export function formatDate(
  date: Date | string,
  options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }
): string {
  const d = typeof date === "string" ? new Date(date) : date;

  if (isNaN(d.getTime())) {
    return String(date);
  }

  return new Intl.DateTimeFormat("en-US", options).format(d);
}
