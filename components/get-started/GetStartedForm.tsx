"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { YesNoSegmentedControl } from "@/components/ui/yes-no-segmented-control";
import {
  GET_STARTED_FORM_NAME,
  initialGetStartedFormData,
  qualificationFields,
  submitGetStartedForm,
  type GetStartedFormData,
} from "@/lib/get-started-form";
import { cn } from "@/lib/utils";

export function GetStartedForm({ className }: { className?: string }) {
  const [formData, setFormData] =
    useState<GetStartedFormData>(initialGetStartedFormData);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const updateField = <K extends keyof GetStartedFormData>(
    field: K,
    value: GetStartedFormData[K]
  ) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");

    const unanswered = qualificationFields.find((field) => !formData[field.name]);
    if (unanswered) {
      setStatus("error");
      setErrorMessage("Please answer all qualification questions.");
      return;
    }

    setStatus("submitting");

    const result = await submitGetStartedForm(formData);

    if (result.ok) {
      setStatus("success");
      setFormData(initialGetStartedFormData);
      return;
    }

    setStatus("error");
    setErrorMessage(result.error ?? "Something went wrong. Please try again.");
  };

  if (status === "success") {
    return (
      <div
        className={cn(
          "flex min-h-[520px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-slate-200/90 bg-brand-white p-10 text-center",
          "shadow-[0_2px_8px_rgba(11,19,43,0.04),0_12px_32px_rgba(11,19,43,0.07)] sm:p-12",
          className
        )}
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-aqua/10">
          <CheckCircle2 className="h-8 w-8 text-brand-aqua" strokeWidth={2.5} />
        </span>
        <h2 className="font-display mt-6 text-2xl font-bold uppercase tracking-tight text-brand-slate sm:text-3xl">
          Application Received
        </h2>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-brand-navy sm:text-base">
          Thanks for reaching out. Our team will review your qualifications and
          get back to you shortly.
        </p>
        <Button
          type="button"
          variant="secondary"
          className="mt-8 rounded-none px-8 font-bold uppercase tracking-[0.12em]"
          onClick={() => setStatus("idle")}
        >
          Submit Another
        </Button>
      </div>
    );
  }

  return (
    <div
      id="get-started-form"
      className={cn(
        "overflow-hidden rounded-2xl border border-slate-200/90 bg-brand-white p-6",
        "shadow-[0_2px_8px_rgba(11,19,43,0.04),0_12px_32px_rgba(11,19,43,0.07)]",
        "transition-shadow duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        "hover:shadow-[0_4px_12px_rgba(11,19,43,0.06),0_20px_48px_rgba(11,19,43,0.1)]",
        "sm:p-8 lg:p-10",
        className
      )}
    >
      <div className="mb-8 border-b border-slate-200 pb-6">
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand-aqua">
          Apply Now
        </p>
        <h2 className="font-display mt-2 text-2xl font-bold uppercase tracking-tight text-brand-slate sm:text-3xl">
          Get Started
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-brand-navy sm:text-base">
          Complete the form below and we&apos;ll confirm whether your operation
          is a fit for our dispatch program.
        </p>
      </div>

      <form name={GET_STARTED_FORM_NAME} onSubmit={handleSubmit} className="space-y-6">

        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            required
            placeholder="John Smith"
            value={formData.fullName}
            onChange={(event) => updateField("fullName", event.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@example.com"
            value={formData.email}
            onChange={(event) => updateField("email", event.target.value)}
          />
        </div>

        <div className="space-y-5 border-t border-slate-200 pt-6">
          <p className="font-display text-sm font-bold uppercase tracking-wide text-brand-slate sm:text-base">
            Qualification Questions
          </p>

          {qualificationFields.map((field) => (
            <div key={field.name} className="space-y-2">
              <Label id={`${field.name}-label`} htmlFor={`${field.name}-yes`}>
                {field.label}
              </Label>
              <YesNoSegmentedControl
                id={field.name}
                name={field.name}
                required
                value={formData[field.name]}
                onChange={(value) => updateField(field.name, value)}
              />
            </div>
          ))}
        </div>

        {status === "error" && errorMessage && (
          <p className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {errorMessage}
          </p>
        )}

        <Button
          type="submit"
          disabled={status === "submitting"}
          className="font-display h-14 w-full rounded-none text-sm font-bold uppercase tracking-[0.15em] shadow-[3px_3px_0_0_rgba(0,0,0,0.35)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:bg-brand-aqua-dark hover:shadow-none disabled:translate-x-0 disabled:translate-y-0 disabled:shadow-[3px_3px_0_0_rgba(0,0,0,0.35)] sm:h-16 sm:text-base"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              Get Started
              <ArrowRight className="h-5 w-5" />
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
