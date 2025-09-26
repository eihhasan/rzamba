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
  const [isGetInvolvedOpen, setIsGetInvolvedOpen] = useState(false);
  const [isOurWorkOpen, setIsOurWorkOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    {
      name: "Home",
      link: "/#",
    },
    {
      name: "About us",
      link: "/about-us",
    },
    {
      name: "Our work",
      link: "#contact",
      hoverDropdown: [
        { name: "Holistic Child Wellbeing", link: "/hcwi" },
        { name: "Impact", link: "/impact" },
      ],
    },
    {
      name: "Get involved",
      link: "#",
      dropdown: [
        { name: "Volunteer", link: "/volunteer" },
        { name: "Partner with us", link: "/partner-with-us" },
        { name: "Donate", link: "/donate" },
      ],
    },
    {
      name: "Blogs & Media",
      link: "#contact",
    },
    {
      name: "Contact us",
      link: "/contact",
    },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdowns when scrolling
  useEffect(() => {
    if (scrolled) {
      setIsGetInvolvedOpen(false);
      setIsOurWorkOpen(false);
    }
  }, [scrolled]);

  return (
    <div className={`sticky top-0 z-60`}>
      <Navbar scrolled={scrolled}>
        {/* Desktop Navigation */}
        <NavBody
          className={`transition-colors backdrop-blur-md ${
            scrolled ? "bg-white rounded-full shadow-lg" : ""
          } text-accent-foreground`}
        >
          <NavbarLogo />

          {/* Custom NavItems with Dropdown */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                {item.dropdown ? (
                  // Hover dropdown item (Get involved)
                  <div
                    className="relative"
                    onMouseEnter={() => setIsGetInvolvedOpen(true)}
                    onMouseLeave={() => setIsGetInvolvedOpen(false)}
                  >
                    <a
                      href={item.link}
                      className="flex items-center gap-1 px-3 py-2 text-sm font-medium hover:text-purple-600 transition-colors duration-200 whitespace-nowrap"
                    >
                      {item.name}
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isGetInvolvedOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </a>

                    {/* Hover Dropdown Menu */}
                    {isGetInvolvedOpen && (
                      <div className="absolute top-full left-0 mb-5 w-48 bg-white rounded-lg shadow-xl py-2 z-50 ">
                        {item.dropdown.map((dropdownItem, dropdownIndex) => (
                          <a
                            key={dropdownIndex}
                            href={dropdownItem.link}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200 whitespace-nowrap"
                          >
                            {dropdownItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : item.hoverDropdown ? (
                  // Hover dropdown item (Our work)
                  <div
                    className="relative"
                    onMouseEnter={() => setIsOurWorkOpen(true)}
                    onMouseLeave={() => setIsOurWorkOpen(false)}
                  >
                    <a
                      href={item.link}
                      className="flex items-center gap-1 px-3 py-2 text-sm font-medium hover:text-purple-600 transition-colors duration-200 whitespace-nowrap"
                    >
                      {item.name}
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isOurWorkOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </a>

                    {/* Hover Dropdown Menu */}
                    {isOurWorkOpen && (
                      <div className="absolute top-full left-0 mb-5 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                        {item.hoverDropdown.map(
                          (dropdownItem, dropdownIndex) => (
                            <a
                              key={dropdownIndex}
                              href={dropdownItem.link}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200 whitespace-nowrap"
                            >
                              {dropdownItem.name}
                            </a>
                          )
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  // Regular nav item
                  <a
                    href={item.link}
                    className="px-3 py-2 text-sm font-medium hover:text-purple-600 transition-colors duration-200 whitespace-nowrap"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </nav>

          <div
            className={`flex items-center gap-4 transition-opacity duration-300 ${
              scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <NavbarButton variant="primary">Make Donation</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation Menu */}
        <MobileNav isOpen={isMobileMenuOpen}>
          <MobileNavHeader onClose={() => setIsMobileMenuOpen(false)} />
          <MobileNavMenu>
            {navItems.map((item, index) => (
              <div key={index}>
                {item.dropdown ? (
                  // Get involved dropdown for mobile (click)
                  <div className="border-b border-gray-200">
                    <button
                      onClick={() => {
                        setIsGetInvolvedOpen(!isGetInvolvedOpen);
                      }}
                      className="flex items-center justify-between w-full px-4 py-3 text-left font-medium hover:text-purple-600 whitespace-nowrap"
                    >
                      {item.name}
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isGetInvolvedOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {isGetInvolvedOpen && (
                      <div className="bg-gray-50 pl-6">
                        {item.dropdown.map((dropdownItem, dropdownIndex) => (
                          <a
                            key={dropdownIndex}
                            href={dropdownItem.link}
                            className="block px-4 py-2 text-sm hover:text-purple-600 transition-colors duration-200 whitespace-nowrap"
                            onClick={() => {
                              setIsGetInvolvedOpen(false);
                              setIsMobileMenuOpen(false);
                            }}
                          >
                            {dropdownItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : item.hoverDropdown ? (
                  // Our work dropdown for mobile (click)
                  <div className="border-b border-gray-200">
                    <button
                      onClick={() => {
                        setIsOurWorkOpen(!isOurWorkOpen);
                      }}
                      className="flex items-center justify-between w-full px-4 py-3 text-left font-medium hover:text-purple-600 whitespace-nowrap"
                    >
                      {item.name}
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isOurWorkOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {isOurWorkOpen && (
                      <div className="bg-gray-50 pl-6">
                        {item.hoverDropdown.map(
                          (dropdownItem, dropdownIndex) => (
                            <a
                              key={dropdownIndex}
                              href={dropdownItem.link}
                              className="block px-4 py-2 text-sm hover:text-purple-600 transition-colors duration-200 whitespace-nowrap"
                              onClick={() => {
                                setIsOurWorkOpen(false);
                                setIsMobileMenuOpen(false);
                              }}
                            >
                              {dropdownItem.name}
                            </a>
                          )
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.link}
                    className="block px-4 py-3 border-b border-gray-200 font-medium hover:text-purple-600 transition-colors duration-200 whitespace-nowrap"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Overlay to close dropdown when clicking outside */}
      {isGetInvolvedOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsGetInvolvedOpen(false)}
        />
      )}
    </div>
  );
}
