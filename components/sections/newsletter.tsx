"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (email.trim().includes("@")) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <section className="bg-stone px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <p className="font-display text-xl text-charcoal">
            Thank you for subscribing.
          </p>
          <p className="mt-2 text-sm text-charcoal/65">
            We&apos;ll send you dental health tips and clinic updates when we
            have something worth sharing.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-stone px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="font-display text-2xl font-medium text-charcoal md:text-3xl">
          Dental health, in your inbox.
        </h2>
        <p className="mt-3 text-sm text-charcoal/65">
          Occasional tips from our clinicians. No spam, unsubscribe anytime.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-3"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="h-11 flex-1 rounded-full border border-stone-dark bg-white px-5 text-sm text-charcoal shadow-sm placeholder:text-charcoal/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage"
          />
          <Button type="submit" size="default" className="w-full sm:w-auto">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}