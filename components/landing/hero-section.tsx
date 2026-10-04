"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedSphere } from "./animated-sphere";
import { FreeTrialModal } from "./free-trial-modal";

const words = ["အရောင်း", "စတော့", "စာရင်း", "အစီရင်ခံစာ", "စီးပွားရေး"];

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <FreeTrialModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />

      {/* Animated sphere background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-150 h-150 lg:w-200 lg:h-200 opacity-40 pointer-events-none">
        <AnimatedSphere />
      </div>

      {/* Subtle grid lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-foreground/10"
            style={{
              top: `${12.5 * (i + 1)}%`,
              left: 0,
              right: 0,
            }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-foreground/10"
            style={{
              left: `${8.33 * (i + 1)}%`,
              top: 0,
              bottom: 0,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-350 mx-auto px-6 lg:px-12 py-32 lg:py-40">
        {/* Eyebrow */}
        <div
          className={`mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground">
            <span className="w-8 h-px bg-foreground/30" />
            ခေတ်မီစီးပွားရေးလုပ်ငန်းများအတွက် အဆင့်မြင့် ERP & POS စနစ်
          </span>
        </div>

        {/* Main headline */}
        <div className="mb-12">
          <h1
            className={`text-7xl font-display leading-[1.1] tracking-tight transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="block p-2">သင့်လုပ်ငန်းကို</span>
            <span className="block p-2">
              အလွယ်တကူ{" "}
              <span className="relative inline-block">
                <span key={wordIndex} className="inline-flex p-2">
                  {words[wordIndex].split("").map((char, i) => (
                    <span
                      key={`${wordIndex}-${i}`}
                      className="inline-block animate-char-in"
                      style={{
                        animationDelay: `${i * 50}ms`,
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-foreground/10" />
              </span>{" "}
              စီမံခန့်ခွဲပါ
            </span>
          </h1>
        </div>

        {/* Description */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-end">
          <p
            className={`text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-xl transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            ကနစ် (kanitt) ERP & POS သည် အရောင်းဆိုင်များ၊ စတိုးဆိုင်များနှင့်
            လုပ်ငန်းကြီးများအတွက် အရောင်းစာရင်း၊ စတော့ခ် ထိန်းချုပ်မှုနှင့်
            ဘဏ္ဍာရေး အစီရင်ခံစာများကို တစ်နေရာတည်းတွင် စနစ်တကျ
            စီမံခန့်ခွဲနိုင်သော Cloud-based System ဖြစ်သည်။
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row items-start gap-4 transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <Button
              size="lg"
              onClick={() => setIsModalOpen(true)}
              className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group cursor-pointer"
            >
              အခမဲ့ စမ်းသုံးကြည့်ရန်
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setIsModalOpen(true)}
              className="h-14 px-8 text-base rounded-full border-foreground/20 hover:bg-foreground/5 cursor-pointer"
            >
              Demo ကြည့်ရန်
            </Button>
          </div>
        </div>
      </div>

      {/* Stats marquee - full width outside container */}
      <div
        className={`absolute bottom-24 left-0 right-0 transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex gap-16 marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16">
              {[
                {
                  value: "4.9/5",
                  label: "သုံးစွဲသူ သုံးသပ်ချက်",
                  company: "KANITT ERP",
                },
                {
                  value: "500+",
                  label: "စီးပွားရေး လုပ်ငန်းများ",
                  company: "KANITT POS",
                },
                {
                  value: "100%",
                  label: "ယုံကြည်စိတ်ချရမှု",
                  company: "KANITT CLOUD",
                },
                {
                  value: "3X",
                  label: "အရောင်းနှုန်း တိုးတက်မှု",
                  company: "ANALYTICS",
                },
              ].map((stat) => (
                <div
                  key={`${stat.company}-${i}`}
                  className="flex items-baseline gap-4"
                >
                  <span className="text-4xl lg:text-5xl font-display">
                    {stat.value}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {stat.label}
                    <span className="block font-mono text-xs mt-1">
                      {stat.company}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
    </section>
  );
}
