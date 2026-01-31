"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { CONTACT_FORM } from "@/lib/content";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });

      if (response.ok) {
        setFormState("success");
        form.reset();
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  if (formState === "success") {
    return (
      <div className="rounded-lg border border-accent/20 bg-accent/5 p-8 text-center">
        <h3 className="font-heading text-[length:var(--text-h3)] text-text-primary">
          {CONTACT_FORM.messages.success.title}
        </h3>
        <p className="mt-2 text-text-primary/70">
          {CONTACT_FORM.messages.success.body}
        </p>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-4 sm:space-y-5 md:space-y-6"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>

      {formState === "error" && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
          {CONTACT_FORM.messages.error}
        </div>
      )}

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-text-primary"
        >
          {CONTACT_FORM.fields.name.label}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 block w-full rounded-lg border border-border bg-white px-4 py-3 text-text-primary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          placeholder={CONTACT_FORM.fields.name.placeholder}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-text-primary"
        >
          {CONTACT_FORM.fields.email.label}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 block w-full rounded-lg border border-border bg-white px-4 py-3 text-text-primary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          placeholder={CONTACT_FORM.fields.email.placeholder}
        />
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-text-primary"
        >
          {CONTACT_FORM.fields.subject.label}
        </label>
        <select
          id="subject"
          name="subject"
          required
          className="mt-1 block w-full rounded-lg border border-border bg-white px-4 py-3 text-text-primary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
        >
          <option value="">{CONTACT_FORM.fields.subject.placeholder}</option>
          {CONTACT_FORM.subjects.map((subject) => (
            <option key={subject.value} value={subject.value}>
              {subject.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-text-primary"
        >
          {CONTACT_FORM.fields.message.label}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1 block w-full rounded-lg border border-border bg-white px-4 py-3 text-text-primary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          placeholder={CONTACT_FORM.fields.message.placeholder}
        />
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={formState === "submitting"}
      >
        {formState === "submitting" ? CONTACT_FORM.messages.submitting : CONTACT_FORM.messages.submit}
      </Button>
    </form>
  );
}
