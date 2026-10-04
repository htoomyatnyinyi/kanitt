"use client";

import { ArrowUpRight } from "lucide-react";
import { AnimatedWave } from "./animated-wave";

const footerLinks = {
  လုပ်ဆောင်ချက်များ: [
    { name: "POS အရောင်းစနစ်", href: "#features" },
    { name: "စတော့ခ် ထိန်းချုပ်မှု", href: "#features" },
    { name: "အစီရင်ခံစာများ", href: "#features" },
    { name: "စျေးနှုန်းများ", href: "#pricing" },
  ],
  စနစ်အသုံးပြုပုံ: [
    { name: "စတင် အသုံးပြုနည်း", href: "#how-it-works" },
    { name: "စနစ် စွမ်းဆောင်ရည်", href: "#studio" },
    { name: "အမေးများသော မေးခွန်းများ", href: "#" },
  ],
  ကုမ္ပဏီ: [
    { name: "ကျွန်ုပ်တို့အကြောင်း", href: "#" },
    { name: "သတင်းနှင့် ဆောင်းပါးများ", href: "#" },
    { name: "အလုပ်အကိုင် ခေါ်ယူမှု", href: "#", badge: "Hiring" },
    { name: "ဆက်သွယ်ရန်", href: "#" },
  ],
  မူဝါဒများ: [
    { name: "ကိုယ်ရေးအချက်အလက် မူဝါဒ", href: "#" },
    { name: "ဝန်ဆောင်မှု စည်းကမ်းများ", href: "#" },
    { name: "လုံခြုံရေးဆိုင်ရာ အချက်အလက်", href: "#" },
  ],
};

const socialLinks = [
  { name: "Facebook", href: "#" },
  { name: "Telegram", href: "#" },
  { name: "LinkedIn", href: "#" },
];

export function FooterSection() {
  return (
    <footer className="relative border-t border-foreground/10">
      {/* Animated wave background */}
      <div className="absolute inset-0 h-64 opacity-20 pointer-events-none overflow-hidden">
        <AnimatedWave />
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="col-span-2">
              <a href="#" className="inline-flex items-center gap-2 mb-6">
                <span className="text-2xl font-display">kanitt ERP</span>
                <span className="text-xs text-muted-foreground font-mono">TM</span>
              </a>

              <p className="text-muted-foreground leading-relaxed mb-8 max-w-xs">
                ခေတ်မီစီးပွားရေးလုပ်ငန်းများနှင့် အရောင်းဆိုင်များအတွက် အထူးပြု ရေးဆွဲထားသော ERP & POS Cloud System.
              </p>

              {/* Social Links */}
              <div className="flex gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-medium mb-6">{title}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
                      >
                        {link.name}
                        {"badge" in link && link.badge && (
                          <span className="text-xs px-2 py-0.5 bg-foreground text-background rounded-full">
                            {link.badge}
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Kanitt Digital Solutions. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              စနစ်အားလုံး ပုံမှန်လည်ပတ်နေပါသည်
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
