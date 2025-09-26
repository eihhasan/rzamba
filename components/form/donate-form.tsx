"use client";

import type React from "react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const QUICK_AMOUNTS = [500, 1000, 2500, 5000];

export default function DonateForm() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState<number | "">("");
  const [frequency, setFrequency] = useState<"one-time" | "monthly">(
    "one-time"
  );
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  function update<K extends keyof typeof form>(k: K, v: string) {
    setForm((p) => ({ ...p, [k]: v }));
  }

  function onQuick(a: number) {
    setAmount(a);
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !amount) {
      toast({
        title: "Missing details",
        description: "Please enter amount, name, and email.",
      });
      return;
    }
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 700));
      toast({
        title: "Donation ready",
        description: `₹${amount.toString()} (${frequency.replace(
          "-",
          " "
        )}) — continue to payment.`,
      });
      setForm({ name: "", email: "" });
      setAmount("");
      setFrequency("one-time");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      {/* Amount Selection */}
      <div className="space-y-4">
        <Label className="text-lg font-semibold text-gray-800">
          Donation Amount (INR)
        </Label>

        {/* Quick Amount Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {QUICK_AMOUNTS.map((a) => (
            <button
              key={a}
              type="button"
              onClick={() => onQuick(a)}
              className={`rounded-xl px-4 py-3 border-2 text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                amount === a
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white border-transparent shadow-lg"
                  : "bg-white border-gray-300 text-gray-700 hover:border-purple-400 hover:shadow-md"
              }`}
              aria-pressed={amount === a}
            >
              ₹{a.toLocaleString()}
            </button>
          ))}
        </div>

        {/* Custom Amount Input */}
        <div className="relative">
          <Input
            inputMode="numeric"
            placeholder="Enter custom amount"
            value={amount}
            onChange={(e) =>
              setAmount(e.target.value ? Number(e.target.value) : "")
            }
            className="h-14 rounded-xl border-2 border-gray-300 px-4 text-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">
            INR
          </div>
        </div>
      </div>

      {/* Frequency Selection */}
      <div className="space-y-4">
        <Label
          htmlFor="frequency"
          className="text-lg font-semibold text-gray-800"
        >
          Donation Frequency
        </Label>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setFrequency("one-time")}
            className={`rounded-xl px-4 py-3 border-2 text-sm font-medium transition-all duration-300 ${
              frequency === "one-time"
                ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white border-transparent shadow-lg"
                : "bg-white border-gray-300 text-gray-700 hover:border-purple-400"
            }`}
          >
            💝 One-time
          </button>
          <button
            type="button"
            onClick={() => setFrequency("monthly")}
            className={`rounded-xl px-4 py-3 border-2 text-sm font-medium transition-all duration-300 ${
              frequency === "monthly"
                ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white border-transparent shadow-lg"
                : "bg-white border-gray-300 text-gray-700 hover:border-purple-400"
            }`}
          >
            🔄 Monthly
          </button>
        </div>
      </div>

      {/* Personal Information */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-800">
          Your Information
        </h3>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-700 font-medium">
              Full name
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
              Email address
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

      {/* Impact Message */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6 border border-purple-100">
        <div className="flex items-start gap-3">
          <div className="text-2xl">✨</div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">
              Your donation makes a difference
            </h4>
            <p className="text-sm text-gray-600">
              ₹500 provides school supplies for 1 child. ₹2500 plants 50 trees
              in Ladakh. Every contribution helps sustain our community
              programs.
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
              Processing...
            </span>
          ) : (
            "Continue to Donate →"
          )}
        </Button>
      </div>

      {/* Security Note */}
      <div className="text-center pt-4">
        <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
          🔒 Secure & encrypted payment processing
        </p>
      </div>
    </form>
  );
}
