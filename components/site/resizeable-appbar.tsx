"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "../ui/resizeable-navbar";
import { useEffect, useState } from "react";

export function ResizeableNavbar() {
  const navItems = [
    {
      name: "Home",
      link: "#features",
    },
    {
      name: "About us",
      link: "#pricing",
    },
    {
      name: "Our work",
      link: "#contact",
    },
    {
      name: "Get involved",
      link: "#contact",
    },
    {
      name: "Blogs & Media",
      link: "#contact",
    },
    {
      name: "Contact us",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`sticky top-0 z-60`}>
      <Navbar scrolled={scrolled}>
        {/* Desktop Navigation */}
        <NavBody
          className={`transition-colors backdrop-blur-md ${
            scrolled ? "white rounded-full" : ""
          } text-accent-foreground`}
        >
          <NavbarLogo />
          <NavItems items={navItems} />
          <div
            className={`flex items-center gap-4 transition-opacity duration-300 ${
              scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <NavbarButton variant="primary">Make Donation</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Make Donation
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Navbar */}
    </div>
  );
}
