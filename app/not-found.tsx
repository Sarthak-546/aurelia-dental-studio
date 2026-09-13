import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-5 py-24 text-center md:px-12">
      <h1 className="font-display text-4xl leading-tight text-charcoal md:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-charcoal/60">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Button asChild variant="primary" size="lg" className="mt-8">
        <Link href="/">Back to Home</Link>
      </Button>
    </main>
  );
}
