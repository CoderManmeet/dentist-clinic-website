"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { treatmentOptions, timeSlots } from "@/lib/constants";

const appointmentSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  phone: z.string().min(10, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email address"),
  date: z.string().min(1, "Please select a preferred date"),
  time: z.string().min(1, "Please select a preferred time"),
  treatment: z.string().min(1, "Please select a treatment"),
  message: z.string().optional(),
});

type AppointmentFormData = z.infer<typeof appointmentSchema>;

export function AppointmentForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
  });

  const onSubmit = async (data: AppointmentFormData) => {
    setStatus("submitting");
    // TODO: wire to your actual booking API / email endpoint
    await new Promise((resolve) => setTimeout(resolve, 1200));
    console.log("Appointment request:", data);
    setStatus("success");
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="bg-surface border border-border rounded-card p-10 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.15, type: "spring", stiffness: 200, damping: 15 }}
          className="size-16 rounded-full bg-brand-success/10 flex items-center justify-center mx-auto"
        >
          <CheckCircle2 className="size-8 text-brand-success" />
        </motion.div>
        <h3 className="font-heading text-xl font-semibold text-foreground mt-5">
          Request received
        </h3>
        <p className="text-text-muted mt-2">
          We'll call you shortly to confirm your appointment slot.
        </p>
      </motion.div>
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

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="date">Preferred Date</Label>
          <Input id="date" type="date" className="rounded-input mt-1.5" {...register("date")} />
          {errors.date && <p className="text-destructive text-xs mt-1">{errors.date.message}</p>}
        </div>
        <div>
          <Label>Preferred Time</Label>
          <Select onValueChange={(v) => setValue("time", v)}>
            <SelectTrigger className="rounded-input mt-1.5 w-full">
              <SelectValue placeholder="Select a time" />
            </SelectTrigger>
            <SelectContent>
              {timeSlots.map((slot) => (
                <SelectItem key={slot} value={slot}>{slot}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.time && <p className="text-destructive text-xs mt-1">{errors.time.message}</p>}
        </div>
      </div>

      <div>
        <Label>Treatment</Label>
        <Select onValueChange={(v) => setValue("treatment", v)}>
          <SelectTrigger className="rounded-input mt-1.5 w-full">
            <SelectValue placeholder="What do you need help with?" />
          </SelectTrigger>
          <SelectContent>
            {treatmentOptions.map((t) => (
              <SelectItem key={t} value={t}>{t}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.treatment && <p className="text-destructive text-xs mt-1">{errors.treatment.message}</p>}
      </div>

      <div>
        <Label htmlFor="message">Message (optional)</Label>
        <Textarea id="message" className="rounded-input mt-1.5" rows={3} {...register("message")} />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={status === "submitting"}
        className="w-full rounded-button bg-primary hover:bg-primary/90 h-14 text-base gap-2"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="size-5 animate-spin" /> Submitting...
          </>
        ) : (
          "Request Appointment"
        )}
      </Button>
    </form>
  );
}