"use client";

import type React from "react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const PARTNERSHIP_TYPES = [
  "CSR Partnership",
  "NGO Collaboration",
  "Corporate Sponsorship",
  "Government Initiative",
  "Community Partnership",
  "Other",
];

export default function PartnerForm() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    orgName: "",
    contactPerson: "",
    email: "",
    phone: "",
    partnershipType: "CSR Partnership",
    message: "",
  });

  function update<K extends keyof typeof form>(k: K, v: string) {
    setForm((p) => ({ ...p, [k]: v }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.orgName || !form.contactPerson || !form.email) {
      toast({
        title: "Missing details",
        description: "Organization, contact person and email are required.",
      });
      return;
    }
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 700));
      toast({
        title: "Thank you for your interest!",
        description:
          "We'll connect shortly to explore partnership opportunities.",
      });
      setForm({
        orgName: "",
        contactPerson: "",
        email: "",
        phone: "",
        partnershipType: "CSR Partnership",
        message: "",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      {/* Organization Information */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-800 border-l-4 border-blue-600 pl-3">
          Organization Details
        </h3>

        <div className="space-y-4">
          <Label htmlFor="orgName" className="text-gray-700 font-medium">
            Organization name *
          </Label>
          <Input
            id="orgName"
            value={form.orgName}
            onChange={(e) => update("orgName", e.target.value)}
            placeholder="Enter your organization's full name"
            required
            className="h-12 rounded-xl border-2 border-gray-300 px-4 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
          />
        </div>
      </div>

      {/* Contact Information */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-800 border-l-4 border-blue-600 pl-3">
          Contact Information
        </h3>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label
              htmlFor="contactPerson"
              className="text-gray-700 font-medium"
            >
              Contact person *
            </Label>
            <Input
              id="contactPerson"
              value={form.contactPerson}
              onChange={(e) => update("contactPerson", e.target.value)}
              placeholder="Full name of contact person"
              required
              className="h-12 rounded-xl border-2 border-gray-300 px-4 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
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
              placeholder="contact@organization.com"
              required
              className="h-12 rounded-xl border-2 border-gray-300 px-4 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-gray-700 font-medium">
              Phone number
            </Label>
            <Input
              id="phone"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              placeholder="+91 XXXXX XXXXX"
              className="h-12 rounded-xl border-2 border-gray-300 px-4 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
            />
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="partnershipType"
              className="text-gray-700 font-medium"
            >
              Partnership type *
            </Label>
            <select
              id="partnershipType"
              className="w-full h-12 rounded-xl border-2 border-gray-300 bg-white px-4 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
              value={form.partnershipType}
              onChange={(e) => update("partnershipType", e.target.value)}
            >
              {PARTNERSHIP_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Partnership Proposal */}
      <div className="space-y-4">
        <Label
          htmlFor="message"
          className="text-lg font-semibold text-gray-800"
        >
          Partnership Proposal / Message
        </Label>
        <p className="text-sm text-gray-600 mb-4">
          Tell us about your organization and how you'd like to partner with us
        </p>
        <Textarea
          id="message"
          rows={6}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Describe your organization's mission, proposed collaboration, shared goals, and how we can work together to support Ladakh communities..."
          className="rounded-xl border-2 border-gray-300 p-4 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all resize-none"
        />
      </div>

      {/* Benefits Message */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200">
        <div className="flex items-start gap-3">
          <div className="text-2xl">🤝</div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">
              Why Partner With Us?
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Reach remote communities in Ladakh with proven impact</li>
              <li>• Transparent reporting and measurable outcomes</li>
              <li>• 8+ years of experience in Himalayan region</li>
              <li>• Sustainable development focused on long-term change</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex items-center gap-3 pt-4">
        <Button
          type="submit"
          disabled={loading}
          className="min-w-40 h-14 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:transform-none"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Submitting...
            </span>
          ) : (
            "Send Proposal →"
          )}
        </Button>
      </div>

      {/* Note */}
      <div className="text-center pt-4">
        <p className="text-xs text-gray-500">
          Our partnership team will contact you within 24-48 hours to discuss
          collaboration opportunities
        </p>
      </div>
    </form>
  );
}
