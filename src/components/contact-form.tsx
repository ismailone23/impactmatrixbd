"use client";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { domains } from "@/lib/domains";

// mirrors the limits enforced in /api/contact
const schema = z.object({
  name: z.string().trim().min(1, "Enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(200),
  domain: z.string(),
  message: z.string().trim().min(10, "Write at least 10 characters").max(4000),
});
type Values = z.infer<typeof schema>;
const NONE = "none"; // Select needs a non-empty value for "Not sure yet"

export function ContactForm() {
  const [state, setState] = useState<"idle" | "sent" | "error">("idle");
  const { register, control, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", domain: NONE, message: "" },
  });

  async function submit(v: Values) {
    setState("idle");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...v, domain: v.domain === NONE ? "" : v.domain }) });
      if (!res.ok) throw new Error();
      reset();
      setState("sent");
    } catch {
      setState("error");
    }
  }

  if (state === "sent")
    return (
      <div role="status" className="flex min-h-[360px] w-full flex-col items-start justify-center gap-4">
        <span className="flex size-12 items-center justify-center rounded-full bg-ink text-white"><Check size={24} strokeWidth={1.5} /></span>
        <p className="text-4xl font-semibold text-ink">Message sent</p>
        <p className="max-w-sm text-xl leading-8 text-ink/70">Thank you. We will reply by email.</p>
        <Button variant="ghost" className="h-11 px-4 text-base text-ink hover:bg-ink/5" onClick={() => setState("idle")}>Send another</Button>
      </div>
    );

  // filled fields: a quiet tone step against the page, no borders; the ring appears on focus
  const fieldCls = "h-12 rounded-xl border border-ink/10 bg-white px-4 text-base text-ink shadow-none transition-shadow placeholder:text-ink/35 focus-visible:border-ink/40 focus-visible:ring-2 focus-visible:ring-ink/20 dark:bg-white";
  const label = "text-xs font-medium uppercase tracking-widest text-ink/60";
  return (
    <form onSubmit={handleSubmit(submit)} noValidate className="w-full">
      <FieldGroup className="gap-5">
        <div className="grid gap-6 sm:grid-cols-2">
          <Field data-invalid={!!errors.name}>
            <FieldLabel htmlFor="name" className={label}>Name</FieldLabel>
            <Input id="name" autoComplete="name" aria-invalid={!!errors.name} className={fieldCls} {...register("name")} />
            <FieldError errors={[errors.name]} />
          </Field>
          <Field data-invalid={!!errors.email}>
            <FieldLabel htmlFor="email" className={label}>Email</FieldLabel>
            <Input id="email" type="email" autoComplete="email" aria-invalid={!!errors.email} className={fieldCls} {...register("email")} />
            <FieldError errors={[errors.email]} />
          </Field>
        </div>
        <Field>
          <FieldLabel htmlFor="domain" className={label}>Domain</FieldLabel>
          <Controller name="domain" control={control} render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange} items={[{ value: NONE, label: "Not sure yet" }, ...domains.map((d) => ({ value: d.name, label: d.name }))]}>
              <SelectTrigger id="domain" className={`${fieldCls} w-full data-[size=default]:h-12`}><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value={NONE}>Not sure yet</SelectItem>
                {domains.map((d) => <SelectItem key={d.slug} value={d.name}>{d.name}</SelectItem>)}
              </SelectContent>
            </Select>
          )} />
        </Field>
        <Field data-invalid={!!errors.message}>
          <FieldLabel htmlFor="message" className={label}>Message</FieldLabel>
          <Textarea id="message" rows={6} aria-invalid={!!errors.message} className={`${fieldCls} h-auto min-h-32 resize-none py-4`} {...register("message")} />
          <FieldError errors={[errors.message]} />
        </Field>
        {state === "error" && <p role="alert" className="text-base text-destructive">Something went wrong. Please try again or email info@gryffindorlab.com.</p>}
        <Button type="submit" size="lg" disabled={isSubmitting} className="mt-2 h-12 w-full rounded-full bg-ink px-8 text-base text-white hover:bg-ink/90">{isSubmitting ? "Sending" : "Submit"}<ArrowRight className="ml-2 size-4" /></Button>
      </FieldGroup>
    </form>
  );
}
