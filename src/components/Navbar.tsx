import { useState } from "react";
import logo from "@/assets/mini-logo.svg";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-sm">
      <div className="container flex items-center h-14 md:h-16 px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2 focus-visible-ring rounded-lg shrink-0">
          <img src={logo} alt="Progressive Accessibility Foundation logo" className="h-8 sm:h-9 w-auto rounded p-0.5" />
          <span className="font-semibold text-primary-foreground hidden sm:block" style={{ fontFamily: "'Work Sans', sans-serif", fontSize: "20.8px" }}>
            Progressive Access
          </span>
        </a>

        <div className="hidden md:flex flex-1 items-center justify-center gap-6 lg:gap-8" role="list">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              role="listitem"
              className="text-primary-foreground/90 hover:text-primary-foreground font-medium transition-colors focus-visible-ring rounded px-2 py-1 text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden ml-auto text-primary-foreground p-2 focus-visible-ring rounded-lg"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <div id="mobile-nav" role="navigation" aria-label="Mobile navigation" className="md:hidden bg-primary border-t border-primary-foreground/20 px-6 pb-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-primary-foreground/90 hover:text-primary-foreground font-medium transition-colors py-2 px-2 focus-visible-ring rounded-lg"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
