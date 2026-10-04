"use client";

import { useEffect, useState, useRef } from "react";
import { Shield, Lock, Eye, FileCheck } from "lucide-react";

const securityFeatures = [
  {
    icon: Shield,
    title: "အလိုအလျောက် စတော့ခ်နှင့် အရောင်း Backup",
    description: "Cloud တွင် နေ့စဉ် Automatic Backup သိမ်းဆည်းပေးပြီး ဒေတာများ မပျောက်ပျက်စေရန် အပြည့်အဝ ကာကွယ်ပေးထားပါသည်။",
  },
  {
    icon: Lock,
    title: "256-bit AES Data Encryption",
    description: "အရောင်းနှင့် ဘဏ္ဍာရေး စာရင်းဇယား အချက်အလက်များအားလုံးကို အဆင့်မြင့် Encryption စနစ်ဖြင့် လုံခြုံစွာ သိမ်းဆည်းထားပါသည်။",
  },
  {
    icon: Eye,
    title: "ဝန်ထမ်း လုပ်ပိုင်ခွင့် အဆင့်ဆင့် သတ်မှတ်ခြင်း",
    description: "မန်နေဂျာ၊ စာရင်းကိုင်နှင့် Cashier ဝန်ထမ်းအလိုက် စနစ်အသုံးပြုနိုင်သည့် လုပ်ပိုင်ခွင့်များ (Role-based Access) သတ်မှတ်နိုင်ပါသည်။",
  },
  {
    icon: FileCheck,
    title: "Offline Storage Data Security",
    description: "ဖုန်းနှင့် Tablet များပေါ်တွင် သိမ်းဆည်းထားသော Local Offline Data များကိုလည်း ခွင့်ပြုချက်မရှိဘဲ ရယူ၍မရအောင် ကာကွယ်ပေးထားသည်။",
  },
];

const certifications = ["AES-256", "SSL/TLS 1.3", "Auto-Backup", "Role Access", "Cloud Sync"];

export function SecuritySection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="security" ref={sectionRef} className="relative py-24 lg:py-32 bg-foreground/[0.02] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              ဒေတာ လုံခြုံရေးနှင့် စိတ်ချရမှု
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-8">
              သင့်လုပ်ငန်း ဒေတာများကို
              <br />
              ၁၀၀% စိတ်ချရမှု ပေးထားသည်။
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              လုပ်ငန်း၏ အရောင်းအဝယ် စာရင်းဇယားများနှင့် ကုန်ပစ္စည်း စတော့ခ် အချက်အလက်များကို ခွင့်ပြုချက်မရှိဘဲ ဝင်ရောက်ကြည့်ရှုခြင်းမှ ကာကွယ်ပေးထားပါသည်။
            </p>

            {/* Certifications */}
            <div className="flex flex-wrap gap-3">
              {certifications.map((cert, index) => (
                <span
                  key={cert}
                  className={`px-4 py-2 border border-foreground/10 text-sm font-mono transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 50 + 200}ms` }}
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Features */}
          <div className="grid gap-6">
            {securityFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className={`p-6 border border-foreground/10 hover:border-foreground/20 transition-all duration-500 group ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 flex items-center justify-center border border-foreground/10 group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1 group-hover:translate-x-1 transition-transform duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
