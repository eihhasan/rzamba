"use client";

import type React from "react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const AREAS = [
  "Education",
  "Healthcare",
  "Environment",
  "Disaster relief",
  "Logistics & Ops",
];

export default function VolunteerForm() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    availability: "Weekends",
    location: "",
    message: "",
    interests: new Set<string>(),
  });

  function toggleInterest(v: string) {
    setForm((p) => {
      const s = new Set(p.interests);
      s.has(v) ? s.delete(v) : s.add(v);
      return { ...p, interests: s };
    });
  }

  function update<K extends keyof Omit<typeof form, "interests">>(
    k: K,
    v: string
  ) {
    setForm((p) => ({ ...p, [k]: v }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast({
        title: "Missing details",
        description: "Please add your name and email.",
      });
      return;
    }
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 700));
      toast({
        title: "Thank you for volunteering",
        description: "We'll reach out with next steps and opportunities.",
      });
      setForm({
        name: "",
        email: "",
        phone: "",
        availability: "Weekends",
        location: "",
        message: "",
        interests: new Set<string>(),
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      {/* Personal Information */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-800 border-l-4 border-purple-600 pl-3">
          Personal Information
        </h3>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-700 font-medium">
              Full name *
            </Label>
            <Input
              id="name"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder="Enter your full name"
              required
              className="h-12 rounded-xl border-2 border-gray-300 px-4 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700 font-medium">
              Email address *
            </Label>
            <Input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              placeholder="you@example.com"
              required
              className="h-12 rounded-xl border-2 border-gray-300 px-4 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
            />
          </div>
        </div>
      </div>

      {/* Contact & Availability */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-800 border-l-4 border-purple-600 pl-3">
          Contact & Availability
        </h3>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-gray-700 font-medium">
              Phone number
            </Label>
            <Input
              id="phone"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              placeholder="+91 XXXXX XXXXX"
              className="h-12 rounded-xl border-2 border-gray-300 px-4 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="availability" className="text-gray-700 font-medium">
              Availability *
            </Label>
            <select
              id="availability"
              className="w-full h-12 rounded-xl border-2 border-gray-300 bg-white px-4 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
              value={form.availability}
              onChange={(e) => update("availability", e.target.value)}
            >
              <option>Weekdays</option>
              <option>Weekends</option>
              <option>Flexible</option>
              <option>Full-time</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="location" className="text-gray-700 font-medium">
              Location
            </Label>
            <Input
              id="location"
              value={form.location}
              onChange={(e) => update("location", e.target.value)}
              placeholder="Your city or region"
              className="h-12 rounded-xl border-2 border-gray-300 px-4 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
            />
          </div>
        </div>
      </div>

      {/* Areas of Interest */}
      <div className="space-y-4">
        <Label className="text-lg font-semibold text-gray-800">
          Areas of Interest
        </Label>
        <p className="text-sm text-gray-600 mb-4">
          Select the areas you're passionate about (multiple selections allowed)
        </p>
        <div className="flex flex-wrap gap-3">
          {AREAS.map((a) => {
            const active = form.interests.has(a);
            return (
              <button
                key={a}
                type="button"
                onClick={() => toggleInterest(a)}
                className={`rounded-full px-4 py-2 border-2 text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  active
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white border-transparent shadow-lg"
                    : "bg-white border-gray-300 text-gray-700 hover:border-purple-400 hover:shadow-md"
                }`}
                aria-pressed={active}
              >
                {a}
              </button>
            );
          })}
        </div>
      </div>

      {/* Skills & Message */}
      <div className="space-y-4">
        <Label
          htmlFor="message"
          className="text-lg font-semibold text-gray-800"
        >
          Tell us about your skills & experience
        </Label>
        <Textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Share your skills, previous volunteer experience, or why you want to volunteer with us..."
          className="rounded-xl border-2 border-gray-300 p-4 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all resize-none"
        />
      </div>

      {/* Impact Message */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 border border-green-200">
        <div className="flex items-start gap-3">
          <div className="text-2xl">🤝</div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">
              Join Our Volunteer Community
            </h4>
            <p className="text-sm text-gray-600">
              Your time and skills can make a real difference in Ladakh. Whether
              it's teaching children, environmental conservation, or community
              development - every hour counts!
            </p>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex items-center gap-3 pt-4">
        <Button
          type="submit"
          disabled={loading}
          className="min-w-40 h-14 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-lg rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:transform-none"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Submitting...
            </span>
          ) : (
            "Submit Application →"
          )}
        </Button>
      </div>

      {/* Note */}
      <div className="text-center pt-4">
        <p className="text-xs text-gray-500">
          We'll contact you within 2-3 business days to discuss volunteer
          opportunities
        </p>
      </div>
    </form>
  );
}
