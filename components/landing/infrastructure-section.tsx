"use client";

import { useEffect, useState, useRef } from "react";

const locations = [
  { city: "Yangon", region: "Primary Cloud Node", latency: "80ms" },
  { city: "Mandalay", region: "Secondary Cloud Node", latency: "120ms" },
  { city: "Naypyidaw", region: "Backup Data Node", latency: "100ms" },
  { city: "Mawlamyine", region: "Backup Data Node", latency: "80ms" },
  {
    city: "Local Device (Offline)",
    region: "SQLite / IndexedDB",
    latency: "<1ms",
  },
  { city: "Germany", region: "Global Cloud Edge", latency: "485ms" },
];

export function InfrastructureSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeLocation, setActiveLocation] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLocation((prev) => (prev + 1) % locations.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-350 mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              စနစ်၏ အခြေခံ အဆောက်အအုံ (Infrastructure)
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-8">
              စိတ်ချရသော
              <br />
              Cloud & Offline Architecture.
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              အင်တာနက် မရှိချိန်တွင် ဖုန်းနှင့် Tablet များပေါ်ရှိ Local Storage
              စနစ်ဖြင့် လုပ်ဆောင်ပြီး၊ အင်တာနက် ရချိန်တွင် မြန်မာနိုင်ငံတွင်း
              ဒေတာစင်တာများနှင့် တိုက်ရိုက် Auto Sync ပြုလုပ်ပေးသည့် အဆင့်မြင့်
              စနစ်ဖြစ်ပါသည်။
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-4xl lg:text-5xl font-display mb-2">
                  99.99%
                </div>
                <div className="text-sm text-muted-foreground">
                  Cloud Uptime
                </div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-display mb-2">
                  &lt;1ms
                </div>
                <div className="text-sm text-muted-foreground">
                  Offline Response
                </div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-display mb-2">
                  256-bit
                </div>
                <div className="text-sm text-muted-foreground">
                  Data Encryption
                </div>
              </div>
            </div>
          </div>

          {/* Right: Location list */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="border border-foreground/10">
              {/* Header */}
              <div className="px-6 py-4 border-b border-foreground/10 flex items-center justify-between">
                <span className="text-sm font-mono text-muted-foreground">
                  Data & Network Nodes
                </span>
                <span className="flex items-center gap-2 text-xs font-mono text-green-600">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Active & Synced
                </span>
              </div>

              {/* Locations */}
              <div>
                {locations.map((location, index) => (
                  <div
                    key={location.city}
                    className={`px-6 py-5 border-b border-foreground/5 last:border-b-0 flex items-center justify-between transition-all duration-300 ${
                      activeLocation === index ? "bg-foreground/2" : ""
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                          activeLocation === index
                            ? "bg-foreground"
                            : "bg-foreground/20"
                        }`}
                      />
                      <div>
                        <div className="font-medium">{location.city}</div>
                        <div className="text-sm text-muted-foreground">
                          {location.region}
                        </div>
                      </div>
                    </div>
                    <span className="font-mono text-sm text-muted-foreground">
                      {location.latency}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
