"use client";
import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { domains } from "@/lib/domains";

export function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setState("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(new FormData(form))) });
      if (!res.ok) throw new Error();
      form.reset();
      setState("sent");
    } catch {
      setState("error");
    }
  }

  if (state === "sent")
    return (
      <div role="status" className="flex min-h-[420px] flex-col items-start justify-center gap-4 rounded-card bg-mist p-8 sm:p-10">
        <span className="flex size-12 items-center justify-center rounded-full bg-ink text-white"><Check size={24} strokeWidth={1.5} /></span>
        <p className="text-4xl font-semibold">Message sent</p>
        <p className="max-w-sm text-xl leading-8 text-ink/80">Thank you. We will reply by email.</p>
        <Button variant="ghost" className="h-11 px-4 text-base" onClick={() => setState("idle")}>Send another</Button>
      </div>
    );

  // filled fields: a quiet tone step against the page, no borders; the ring appears on focus
  const field = "h-14 rounded-card border-0 bg-mist px-4 text-lg shadow-none transition-shadow focus-visible:ring-2 focus-visible:ring-ink";
  const label = "text-lg font-medium";
  return (
    <form onSubmit={submit} className="w-full space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2"><Label htmlFor="name" className={label}>Name</Label><Input id="name" name="name" required maxLength={100} autoComplete="name" className={field} /></div>
        <div className="space-y-2"><Label htmlFor="email" className={label}>Email</Label><Input id="email" name="email" type="email" required maxLength={200} autoComplete="email" className={field} /></div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="domain" className={label}>Domain</Label>
        <select id="domain" name="domain" defaultValue="" className={`${field} w-full`}>
          <option value="">Not sure yet</option>
          {domains.map((d) => <option key={d.slug} value={d.name}>{d.name}</option>)}
        </select>
      </div>
      <div className="space-y-2"><Label htmlFor="message" className={label}>Message</Label><Textarea id="message" name="message" required minLength={10} maxLength={4000} rows={6} className={`${field} h-auto min-h-56 resize-none py-4`} /></div>
      {state === "error" && <p role="alert" className="text-base text-destructive">Something went wrong. Please try again or email info@gryffindorlab.com.</p>}
      <Button type="submit" size="lg" disabled={state === "sending"} className="mt-2 h-14 px-10 text-lg">{state === "sending" ? "Sending" : "Send message"}</Button>
    </form>
  );
}
