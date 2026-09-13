"use client";

import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";

import { bookingFormSchema, type BookingSubmission } from "@/lib/validations/booking";
import { treatments } from "@/data/treatments";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormField } from "@/components/forms/form-field";

export function BookingForm() {
  const [submitted, setSubmitted] = React.useState(false);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingSubmission>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      preferredTreatment: "",
      preferredDate: "",
      preferredTime: "",
      message: "",
    },
  });

  function onSubmit(data: BookingSubmission) {
    // No real backend — success state only.
    console.info("Booking submission", data);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-md border border-sage/25 bg-sage/5 px-6 py-14 text-center">
        <CheckCircle2 className="size-10 text-sage" aria-hidden="true" />
        <h3 className="font-display text-2xl leading-tight text-charcoal">
          Booking request received
        </h3>
        <p className="max-w-md text-charcoal/70">
          Thank you — our care team will review your request and get back to you
          shortly to confirm your appointment.
        </p>
        <Button
          type="button"
          variant="ghost"
          className="mt-2"
          onClick={() => {
            reset();
            setSubmitted(false);
          }}
        >
          Submit another request
        </Button>
      </div>
    );
  }

  const errorId = (id: string) => `${id}-error`;

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-x-8">
        {/* Row: name spans full width */}
        <FormField
          htmlFor="name"
          label="Full name"
          required
          error={errors.name?.message}
          className="md:col-span-2"
        >
          <Input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? errorId("name") : undefined}
            {...register("name")}
          />
        </FormField>

        <FormField
          htmlFor="phone"
          label="Phone number"
          required
          error={errors.phone?.message}
        >
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 00000 00000"
            aria-invalid={errors.phone ? true : undefined}
            aria-describedby={errors.phone ? errorId("phone") : undefined}
            {...register("phone")}
          />
        </FormField>

        <FormField
          htmlFor="email"
          label="Email address"
          required
          error={errors.email?.message}
        >
          <Input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? errorId("email") : undefined}
            {...register("email")}
          />
        </FormField>

        <FormField
          htmlFor="preferredTreatment"
          label="Preferred treatment"
          required
          error={errors.preferredTreatment?.message}
          className="md:col-span-2"
        >
          <Controller
            control={control}
            name="preferredTreatment"
            render={({ field }) => (
              <Select
                onValueChange={field.onChange}
                value={field.value || undefined}
              >
                <SelectTrigger
                  id="preferredTreatment"
                  aria-invalid={errors.preferredTreatment ? true : undefined}
                  aria-describedby={
                    errors.preferredTreatment ? errorId("preferredTreatment") : undefined
                  }
                >
                  <SelectValue placeholder="Select a treatment" />
                </SelectTrigger>
                <SelectContent>
                  {treatments.map((treatment) => (
                    <SelectItem key={treatment.slug} value={treatment.slug}>
                      {treatment.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </FormField>

        {/* Paired fields: date + time — single column on mobile, two columns on desktop */}
        <FormField
          htmlFor="preferredDate"
          label="Preferred date"
          required
          error={errors.preferredDate?.message}
        >
          <Input
            id="preferredDate"
            type="date"
            aria-invalid={errors.preferredDate ? true : undefined}
            aria-describedby={
              errors.preferredDate ? errorId("preferredDate") : undefined
            }
            {...register("preferredDate")}
          />
        </FormField>

        <FormField
          htmlFor="preferredTime"
          label="Preferred time"
          required
          error={errors.preferredTime?.message}
        >
          <Input
            id="preferredTime"
            type="time"
            aria-invalid={errors.preferredTime ? true : undefined}
            aria-describedby={
              errors.preferredTime ? errorId("preferredTime") : undefined
            }
            {...register("preferredTime")}
          />
        </FormField>

        <FormField
          htmlFor="message"
          label="Message"
          className="md:col-span-2"
        >
          <Textarea
            id="message"
            rows={4}
            placeholder="Anything we should know? (optional)"
            aria-describedby={errors.message ? errorId("message") : undefined}
            {...register("message")}
          />
        </FormField>
      </div>

      <div className="flex flex-col items-start gap-3">
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="w-full sm:w-auto"
        >
          Book Appointment
        </Button>
        <p className="text-sm text-charcoal/60">
          We&apos;ll confirm your appointment by phone or email within one
          business day.
        </p>
      </div>
    </form>
  );
}