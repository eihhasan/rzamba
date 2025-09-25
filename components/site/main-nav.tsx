"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#mission", label: "Mission" },
  { href: "#about", label: "About" },
  { href: "#values", label: "Values" },
  { href: "#initiatives", label: "Initiatives" },
  { href: "#gallery", label: "Gallery" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

export function MainNav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors backdrop-blur-md ${
        scrolled ? "bg-[#ff9f1c]" : "bg-accent/85"
      } text-accent-foreground`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-3">
        <Link
          href="#home"
          className="font-semibold text-lg tracking-tight text-balance"
        >
          Rzamba Foundation
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-accent-foreground/85 hover:text-accent-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button
            asChild
            size="sm"
            className="bg-primary text-primary-foreground hover:opacity-95 glow-primary"
          >
            <a href="#donate" aria-label="Donate to Rzamba Foundation">
              Donate
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
