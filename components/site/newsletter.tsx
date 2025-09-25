"use client";
import { useState } from "react";
import { SectionReveal } from "./section-reveal";
import { Mail, Send, CheckCircle } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <SectionReveal className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-lime-500/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in-up">
          {/* Icon */}
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
            <Mail className="w-10 h-10 text-white" />
          </div>

          {/* Content */}
          <h2 className="text-5xl font-bold text-white mb-6">
            Stay <span className="text-gray-100">Connected</span>
          </h2>
          <p className="text-xl text-gray-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Subscribe to our newsletter and be the first to hear about our
            latest projects, impact stories, and opportunities to get involved
            in creating positive change.
          </p>

          {/* Newsletter Form */}
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-6 py-4 rounded-full text-gray-100 placeholder-gray-400 bg-transparent border border-white/30 focus:outline-none focus:ring-2 focus:ring-white text-lg"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 bottom-2 border border-white text-white px-8 rounded-full font-bold hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2"
                >
                  Subscribe
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          ) : (
            <div className="max-w-md mx-auto bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 flex items-center justify-center gap-3 text-white animate-fade-in">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span className="font-medium">Thank you for subscribing!</span>
            </div>
          )}

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto">
                <span className="text-white font-bold">📊</span>
              </div>
              <h3 className="text-xl font-bold text-white">Monthly Reports</h3>
              <p className="text-gray-100">
                Get detailed impact reports and success stories
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto">
                <span className="text-white font-bold">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Exclusive Updates
              </h3>
              <p className="text-gray-100">
                Be first to know about new initiatives and programs
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto">
                <span className="text-white font-bold">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Volunteer Opportunities
              </h3>
              <p className="text-gray-100">
                Get early access to volunteer and partnership opportunities
              </p>
            </div>
          </div>

          {/* Social proof */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-gray-100 mb-4">
              Join over <span className="text-white font-bold">25,000</span>{" "}
              subscribers worldwide
            </p>
            <div className="flex justify-center items-center gap-4 text-sm text-gray-100">
              <span>✓ No spam, ever</span>
              <span>•</span>
              <span>✓ Unsubscribe anytime</span>
              <span>•</span>
              <span>✓ Privacy protected</span>
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
