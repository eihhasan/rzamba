"use client"
import { Mail, MapPin, Phone, Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export function TopBar() {
  return (
    <div className="w-full bg-secondary text-secondary-foreground text-sm">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-2">
        <div className="flex flex-wrap items-center gap-4">
          <span className="flex items-center gap-1">
            <Mail className="size-4" aria-hidden /> contact@rzamba.org
          </span>
          <span className="flex items-center gap-1">
            <Phone className="size-4" aria-hidden /> +91 12345 67890
          </span>
          <span className="hidden md:flex items-center gap-1">
            <MapPin className="size-4" aria-hidden /> Leh, Ladakh, India
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a aria-label="Facebook" href="#" className="hover:text-primary transition-colors">
            <Facebook className="size-4" />
          </a>
          <a aria-label="Twitter" href="#" className="hover:text-primary transition-colors">
            <Twitter className="size-4" />
          </a>
          <a aria-label="Instagram" href="#" className="hover:text-primary transition-colors">
            <Instagram className="size-4" />
          </a>
          <a aria-label="LinkedIn" href="#" className="hover:text-primary transition-colors">
            <Linkedin className="size-4" />
          </a>
        </div>
      </div>
    </div>
  )
}
