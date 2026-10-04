"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const plans = [
  {
    name: "Starter POS",
    description: "တစ်နိုင်တစ်ပိုင် အရောင်းဆိုင်များနှင့် ဆိုင်ခွဲ ၁ ခုအတွက်",
    price: { monthly: 35000, annual: 29000 },
    features: [
      "POS အရောင်းစနစ် ၁ ခု",
      "Offline-First Mobile App (အင်တာနက် မလိုပါ)",
      "ကုန်ပစ္စည်း စတော့ခ် စီမံခန့်ခွဲမှု",
      "နေ့စဉ် အရောင်း အစီရင်ခံစာ",
      "Barcode Scanner ထောက်ပံ့မှု",
      "ဖုန်း/Tablet ဖြင့် သုံးစွဲနိုင်မှု",
    ],
    cta: "စမ်းသုံးကြည့်ရန်",
    popular: false,
  },
  {
    name: "Business ERP",
    description: "တိုးတက်နေသော လုပ်ငန်းများနှင့် ဆိုင်ခွဲများအတွက်",
    price: { monthly: 85000, annual: 69000 },
    features: [
      "POS စနစ် (၃ ခုအထိ)",
      "Offline-First Mobile Sync စနစ်ပါဝင်ခြင်း",
      "ဆိုင်ခွဲများစွာ ချိတ်ဆက်မှု (Multi-branch)",
      "အဆင့်မြင့် အမြတ်အစွန်း အစီရင်ခံစာများ",
      "ဝန်ထမ်း လုပ်ပိုင်ခွင့် သတ်မှတ်ခြင်း",
      "ဘဏ္ဍာရေး စာရင်းဇယား စနစ်",
      "24/7 လူကိုယ်တိုင် ကူညီပေးမှု",
    ],
    cta: "အခမဲ့ စမ်းသုံးကြည့်ရန်",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "ကုမ္ပဏီကြီးများနှင့် ကွန်ရက်ကျယ်ပြန့်သော လုပ်ငန်းများအတွက်",
    price: { monthly: null, annual: null },
    features: [
      "Business ERP ပါ လုပ်ဆောင်ချက်များ အားလုံး",
      "စိတ်တိုင်းကျ ဆော့ဖ်ဝဲ ပြင်ဆင်ရေးဆွဲပေးခြင်း",
      "သီးသန့် Cloud Server အသုံးပြုခွင့်",
      "Custom API & Hardware Integration",
      "သီးသန့် Account Manager ထားရှိပေးခြင်း",
      "လုပ်ငန်းခွင်အထိ လူကိုယ်တိုင် စနစ်တပ်ဆင်ပေးခြင်း",
    ],
    cta: "ဆက်သွယ်မေးမြန်းရန်",
    popular: false,
  },
];

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section
      id="pricing"
      className="relative py-32 lg:py-40 border-t border-foreground/10"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
            စျေးနှုန်းများ
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-6">
            ရှင်းလင်းလွယ်ကူသော
            <br />
            <span className="text-stroke">စျေးနှုန်း အစီအစဉ်များ</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            သင့်လုပ်ငန်း ပမာဏအလိုက် သင့်တော်သော Package ကို စိတ်တိုင်းကျ
            ရွေးချယ်နိုင်ပါသည်။
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center gap-4 mb-16">
          <span
            className={`text-sm transition-colors ${
              !isAnnual ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            လစဉ်ပေး
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative w-14 h-7 bg-foreground/10 rounded-full p-1 transition-colors hover:bg-foreground/20"
          >
            <div
              className={`w-5 h-5 bg-foreground rounded-full transition-transform duration-300 ${
                isAnnual ? "translate-x-7" : "translate-x-0"
              }`}
            />
          </button>
          <span
            className={`text-sm transition-colors ${
              isAnnual ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            နှစ်စဉ်ပေး
          </span>
          {isAnnual && (
            <span className="ml-2 px-2 py-1 bg-foreground text-primary-foreground text-xs font-mono">
              ၂၀% သက်သာမည်
            </span>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-px bg-foreground/10">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`relative p-8 lg:p-12 bg-background ${
                plan.popular
                  ? "md:-my-4 md:py-12 lg:py-16 border-2 border-foreground"
                  : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-8 px-3 py-1 bg-foreground text-primary-foreground text-xs font-mono uppercase tracking-widest">
                  လူကြိုက်အများဆုံး
                </span>
              )}

              {/* Plan Header */}
              <div className="mb-8">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-3xl text-foreground mt-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8 pb-8 border-b border-foreground/10">
                {plan.price.monthly !== null ? (
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-3xl lg:text-4xl text-foreground">
                      {(isAnnual
                        ? plan.price.annual
                        : plan.price.monthly
                      ).toLocaleString()}{" "}
                      Ks
                    </span>
                    <span className="text-muted-foreground">/လ</span>
                  </div>
                ) : (
                  <span className="font-display text-3xl text-foreground">
                    Custom
                  </span>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-4 flex items-center justify-center gap-2 text-sm font-medium transition-all group ${
                  plan.popular
                    ? "bg-foreground text-primary-foreground hover:bg-foreground/90"
                    : "border border-foreground/20 text-foreground hover:border-foreground hover:bg-foreground/5"
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="mt-12 text-center text-sm text-muted-foreground">
          Package တိုင်းတွင် Auto Backup၊ SSL လုံခြုံရေးနှင့် Cloud Update များ
          အခမဲ့ ပါဝင်သည်။{" "}
          <a
            href="#"
            className="underline underline-offset-4 hover:text-foreground transition-colors"
          >
            အသေးစိတ် နှိုင်းယှဉ်ကြည့်ရန်
          </a>
        </p>
      </div>
    </section>
  );
}
