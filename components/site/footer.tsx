import Link from "next/link";
import { Heart, Mail, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Organization Info */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">
            Rzamba Foundation
          </h3>
          <div className="flex items-start gap-3 text-gray-600">
            <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
            <p className="text-sm leading-relaxed">Leh, Ladakh, India</p>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <Mail className="w-5 h-5 flex-shrink-0" />
            <a
              href="mailto:contact@rzamba.org"
              className="text-sm hover:text-orange-600 transition-colors"
            >
              contact@rzamba.org
            </a>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mt-4">
            Empowering Himalayan communities through sustainable development and
            education.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-900">Quick Links</h4>
          <ul className="space-y-3">
            {[
              ["Home", "#home"],
              ["Mission", "#mission"],
              ["About", "#about"],
              ["Initiatives", "#initiatives"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-gray-600 hover:text-orange-600 transition-colors duration-200 text-sm flex items-center gap-2 group"
                >
                  <div className="w-1 h-1 bg-orange-500 rounded-full group-hover:bg-orange-500 transition-colors" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Get Involved */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-900">Get Involved</h4>
          <ul className="space-y-3">
            {[
              ["Volunteer", "#join"],
              ["Partner with us", "#join"],
              ["Internship", "#join"],
              ["Careers", "#join"],
            ].map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-gray-600 hover:text-orange-600 transition-colors duration-200 text-sm flex items-center gap-2 group"
                >
                  <div className="w-1 h-1 bg-orange-500 rounded-full group-hover:bg-orange-400 transition-colors" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Donate Section */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-900">
            Make a Difference
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed">
            Your support helps us continue our vital work in remote Himalayan
            communities.
          </p>
          <a
            href="#donate"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl font-medium"
          >
            <Heart className="w-4 h-4" />
            Donate Now
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Rzamba Foundation. All rights reserved.
          </span>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Heart className="w-4 h-4 text-red-500" />
            <span>Made with care for Himalayan communities</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
