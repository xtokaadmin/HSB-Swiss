import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Startseite", path: "/" },
    { name: "Über uns", path: "/about" },
    { name: "Dienstleistungen", path: "/services" },
    { name: "FAQ", path: "/faq" },
    { name: "Kontakt", path: "/contact" },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src="/images/hsb-Photoroom.png"
              alt="HSB Swiss Logo"
              className="h-8 w-auto sm:h-10 md:h-12 lg:h-14 object-contain transition-all duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-gray-600 hover:text-red-600 px-3 py-2 text-sm font-medium transition-all duration-200 relative group",
                  location.pathname === item.path &&
                    "text-red-600 font-semibold",
                )}
              >
                {item.name}
                <span className={cn(
                  "absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-200 group-hover:w-full",
                  location.pathname === item.path && "w-full"
                )} />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              asChild 
              className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2.5 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <Link to="/contact">Jetzt starten</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="hover:bg-gray-50"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <svg
                  className="h-6 w-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block px-3 py-2.5 text-base font-medium transition-all duration-200 rounded-md",
                    location.pathname === item.path
                      ? "text-red-600 bg-red-50 font-semibold"
                      : "text-gray-600 hover:text-red-600 hover:bg-gray-50",
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-3">
                <Button
                  asChild
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2.5 shadow-sm hover:shadow-md transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link to="/contact">Jetzt starten</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
