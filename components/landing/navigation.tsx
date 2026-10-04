"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "ပင်မစာမျက်နှာ", href: "#hero", id: "hero" },
  { name: "လုပ်ဆောင်ချက်များ", href: "#features", id: "features" },
  { name: "အသုံးပြုပုံ", href: "#how-it-works", id: "how-it-works" },
  { name: "စနစ်စွမ်းဆောင်ရည်", href: "#studio", id: "studio" },
  { name: "ချိတ်ဆက်နိုင်မှုများ", href: "#integrations", id: "integrations" },
  { name: "လုံခြုံရေး", href: "#security", id: "security" },
  { name: "Developers", href: "#developers", id: "developers" },
  { name: "စျေးနှုန်းများ", href: "#pricing", id: "pricing" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll Spy for active section
      const sectionElements = navLinks.map((link) =>
        document.getElementById(link.id)
      );

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed z-50 transition-all duration-500 ${
          isScrolled ? "top-4 left-4 right-4" : "top-0 left-0 right-0"
        }`}
      >
        <nav
          className={`mx-auto transition-all duration-500 ${
            isScrolled || isMobileMenuOpen
              ? "bg-background/80 backdrop-blur-xl border border-foreground/10 rounded-2xl shadow-lg max-w-300"
              : "bg-transparent max-w-350"
          }`}
        >
          <div
            className={`flex items-center justify-between transition-all duration-500 px-6 lg:px-8 ${
              isScrolled ? "h-14" : "h-20"
            }`}
          >
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <span
                className={`font-display tracking-tight transition-all duration-500 ${isScrolled ? "text-xl" : "text-2xl"}`}
              >
                kanitt
              </span>
              <span
                className={`text-muted-foreground font-mono transition-all duration-500 ${isScrolled ? "text-[10px] mt-0.5" : "text-xs mt-1"}`}
              >
                TM
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 lg:gap-12">
              {navLinks.slice(1, 5).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm transition-colors duration-300 relative group ${
                    activeSection === link.id
                      ? "text-foreground font-medium"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-foreground transition-all duration-300 ${
                      activeSection === link.id ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              ))}
              <a
                href="#pricing"
                className={`text-sm transition-colors duration-300 relative group ${
                  activeSection === "pricing"
                    ? "text-foreground font-medium"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                စျေးနှုန်းများ
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-foreground transition-all duration-300 ${
                    activeSection === "pricing" ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="#"
                className={`text-foreground/70 hover:text-foreground transition-all duration-500 ${isScrolled ? "text-xs" : "text-sm"}`}
              >
                အကောင့်ဝင်ရန်
              </a>
              <Button
                size="sm"
                className={`bg-foreground hover:bg-foreground/90 text-background rounded-full transition-all duration-500 ${isScrolled ? "px-4 h-8 text-xs" : "px-6"}`}
              >
                စမ်းသုံးကြည့်ရန်
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu - Full Screen Overlay */}
        <div
          className={`md:hidden fixed inset-0 bg-background z-40 transition-all duration-500 ${
            isMobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          style={{ top: 0 }}
        >
          <div className="flex flex-col h-full px-8 pt-28 pb-8">
            {/* Navigation Links */}
            <div className="flex-1 flex flex-col justify-center gap-6 overflow-y-auto">
              {navLinks.map((link, i) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-3xl font-display transition-all duration-500 ${
                    activeSection === link.id
                      ? "text-foreground font-semibold"
                      : "text-foreground/60 hover:text-foreground"
                  } ${
                    isMobileMenuOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{
                    transitionDelay: isMobileMenuOpen ? `${i * 50}ms` : "0ms",
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Bottom CTAs */}
            <div
              className={`flex gap-4 pt-6 border-t border-foreground/10 transition-all duration-500 ${
                isMobileMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isMobileMenuOpen ? "300ms" : "0ms" }}
            >
              <Button
                variant="outline"
                className="flex-1 rounded-full h-14 text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                အကောင့်ဝင်ရန်
              </Button>
              <Button
                className="flex-1 bg-foreground text-background rounded-full h-14 text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                စမ်းသုံးကြည့်ရန်
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Floating Vertical Dot Navigation Panel */}
      <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-4 p-3 rounded-full bg-background/60 backdrop-blur-md border border-foreground/10 shadow-lg">
        {navLinks.map((link) => {
          const isActive = activeSection === link.id;
          return (
            <a
              key={link.id}
              href={link.href}
              aria-label={link.name}
              className="group relative flex items-center justify-center p-1"
            >
              {/* Tooltip on hover */}
              <span className="absolute right-8 px-3 py-1 bg-foreground text-background text-xs font-mono rounded-md whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 shadow-md translate-x-2 group-hover:translate-x-0">
                {link.name}
              </span>

              {/* Dot indicator */}
              <span
                className={`block rounded-full transition-all duration-300 ${
                  isActive
                    ? "w-3 h-3 bg-foreground ring-4 ring-foreground/20"
                    : "w-2 h-2 bg-foreground/30 hover:bg-foreground/70 hover:scale-125"
                }`}
              />
            </a>
          );
        })}
      </div>
    </>
  );
}
