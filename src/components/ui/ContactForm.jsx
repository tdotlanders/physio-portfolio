"use client";

import { useState } from "react";
import Button from "./Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus("submitting");

    // Simulate form submission
    // In production, replace with actual API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setStatus("success");
    setFormData({ name: "", email: "", phone: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Name Field */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-[var(--neutral-700)] mb-2"
        >
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.name
              ? "border-red-500 focus:ring-red-500"
              : "border-[var(--neutral-200)] focus:ring-[var(--primary)]"
          } bg-white focus:outline-none focus:ring-2 transition-all`}
          placeholder="Your name"
          disabled={status === "submitting"}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-[var(--neutral-700)] mb-2"
        >
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.email
              ? "border-red-500 focus:ring-red-500"
              : "border-[var(--neutral-200)] focus:ring-[var(--primary)]"
          } bg-white focus:outline-none focus:ring-2 transition-all`}
          placeholder="your@email.com"
          disabled={status === "submitting"}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
        )}
      </div>

      {/* Phone Field (Optional) */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-[var(--neutral-700)] mb-2"
        >
          Phone <span className="text-[var(--neutral-400)]">(optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-[var(--neutral-200)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-all"
          placeholder="+351 XXX XXX XXX"
          disabled={status === "submitting"}
        />
      </div>

      {/* Message Field */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-[var(--neutral-700)] mb-2"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.message
              ? "border-red-500 focus:ring-red-500"
              : "border-[var(--neutral-200)] focus:ring-[var(--primary)]"
          } bg-white focus:outline-none focus:ring-2 transition-all resize-none`}
          placeholder="How can I help you?"
          disabled={status === "submitting"}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button type="submit" fullWidth disabled={status === "submitting"}>
        {status === "submitting" ? (
          <span className="flex items-center justify-center gap-2">
            <svg
              className="animate-spin w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Sending...
          </span>
        ) : (
          "Send Message"
        )}
      </Button>

      {/* Success Message */}
      {status === "success" && (
        <div className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-700 text-center animate-fade-in">
          <p className="font-medium">Message sent successfully!</p>
          <p className="text-sm mt-1">
            I'll get back to you as soon as possible.
          </p>
        </div>
      )}
    </form>
  );
}
