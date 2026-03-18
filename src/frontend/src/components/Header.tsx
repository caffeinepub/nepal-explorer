import { Button } from "@/components/ui/button";
import { Menu, Mountain, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Explore", href: "#places" },
  { label: "Accommodations", href: "#hotels" },
  { label: "Guides", href: "#guides" },
  { label: "Tips", href: "#tips" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-card" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-nepal-orange flex items-center justify-center">
              <Mountain className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg text-nepal-dark tracking-tight">
              Nepal<span className="text-nepal-orange">Yatra</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            data-ocid="main.nav"
          >
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="px-4 py-2 text-sm font-medium text-nepal-muted hover:text-nepal-orange transition-colors rounded-md"
                data-ocid={`nav.${link.label.toLowerCase()}.link`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              onClick={() => handleNav("#emergency")}
              variant="outline"
              size="sm"
              className="border-nepal-orange text-nepal-orange hover:bg-nepal-orange-pale"
              data-ocid="nav.emergency.button"
            >
              Emergency
            </Button>
            <Button
              onClick={() => handleNav("#places")}
              size="sm"
              className="bg-nepal-orange hover:bg-nepal-orange-light text-white"
              data-ocid="nav.explore.primary_button"
            >
              Start Exploring
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-nepal-dark"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            data-ocid="nav.hamburger.toggle"
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="block w-full text-left px-3 py-2.5 text-sm font-medium text-nepal-dark hover:text-nepal-orange hover:bg-nepal-orange-pale rounded-md transition-colors"
              data-ocid={`mobile.${link.label.toLowerCase()}.link`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 flex gap-2">
            <Button
              onClick={() => handleNav("#emergency")}
              variant="outline"
              size="sm"
              className="flex-1 border-nepal-orange text-nepal-orange"
            >
              Emergency
            </Button>
            <Button
              onClick={() => handleNav("#places")}
              size="sm"
              className="flex-1 bg-nepal-orange text-white"
            >
              Explore
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
