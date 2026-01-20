"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/Button";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/", {
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
        <h3 className="font-heading text-[length:var(--text-h3)] text-text-primary">Thank you!</h3>
        <p className="mt-2 text-text-primary/70">
          Your message has been sent. I&apos;ll get back to you soon.
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
      className="space-y-6"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>

      {formState === "error" && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
          Something went wrong. Please try again.
        </div>
      )}

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-text-primary"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 block w-full rounded-lg border border-border bg-white px-4 py-3 text-text-primary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-text-primary"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 block w-full rounded-lg border border-border bg-white px-4 py-3 text-text-primary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-text-primary"
        >
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          required
          className="mt-1 block w-full rounded-lg border border-border bg-white px-4 py-3 text-text-primary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
        >
          <option value="">Select a topic</option>
          <option value="consulting">Consulting Inquiry</option>
          <option value="speaking">Speaking Request</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-text-primary"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1 block w-full rounded-lg border border-border bg-white px-4 py-3 text-text-primary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          placeholder="Tell me about your project..."
        />
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={formState === "submitting"}
      >
        {formState === "submitting" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
