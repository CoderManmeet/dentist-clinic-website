"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(10, "Enter a valid phone number"),
  message: z.string().min(5, "Tell us a bit about your query"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/send-notification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "contact",
          name: data.name,
          phone: data.phone,
          email: data.email,
          message: data.message,
        }),
      });
      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-surface border border-border rounded-card p-10 text-center"
      >
        <CheckCircle2 className="size-10 text-brand-success mx-auto" />
        <h3 className="font-heading text-xl font-semibold text-foreground mt-4">Message sent</h3>
        <p className="text-text-muted mt-2">We'll get back to you within a few hours.</p>
      </motion.div>
    );
  }

  if (status === "error") {
    return (
      <div className="bg-surface border border-destructive/30 rounded-card p-10 text-center">
        <h3 className="font-heading text-xl font-semibold text-foreground">Something went wrong</h3>
        <p className="text-text-muted mt-2">Please try again or call us directly.</p>
        <Button onClick={() => setStatus("idle")} variant="outline" className="mt-4 rounded-button">
          Try Again
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-surface border border-border rounded-card p-6 md:p-8 space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" className="rounded-input mt-1.5" {...register("name")} />
          {errors.name && <p className="text-destructive text-xs mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" type="tel" className="rounded-input mt-1.5" {...register("phone")} />
          {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone.message}</p>}
        </div>
      </div>
      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" type="email" className="rounded-input mt-1.5" {...register("email")} />
        {errors.email && <p className="text-destructive text-xs mt-1">{errors.email.message}</p>}
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" className="rounded-input mt-1.5" rows={4} {...register("message")} />
        {errors.message && <p className="text-destructive text-xs mt-1">{errors.message.message}</p>}
      </div>
      <Button
        type="submit"
        size="lg"
        disabled={status === "submitting"}
        className="w-full rounded-button bg-primary hover:bg-primary/90 h-14 text-base gap-2"
      >
        {status === "submitting" ? <><Loader2 className="size-5 animate-spin" /> Sending...</> : "Send Message"}
      </Button>
    </form>
  );
}