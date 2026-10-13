"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Check,
  Minus,
  HelpCircle,
  Shield,
  Zap,
  Sparkles,
  Building2,
  Store,
} from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { FreeTrialModal } from "@/components/landing/free-trial-modal";
import { Button } from "@/components/ui/button";

interface FeatureRow {
  category: string;
  name: string;
  tooltip?: string;
  starter: boolean | string;
  business: boolean | string;
  enterprise: boolean | string;
}

const comparisonFeatures: FeatureRow[] = [
  // အဓိက အရောင်းနှင့် စနစ်အင်္ဂါရပ်များ
  {
    category: "အရောင်းနှင့် ကောင်တာ စနစ် (POS)",
    name: "POS ကောင်တာ အရေအတွက်",
    starter: "၁ ခု",
    business: "၃ ခုအထိ (ထပ်တိုးနိုင်)",
    enterprise: "အကန့်အသတ်မရှိ",
  },
  {
    category: "အရောင်းနှင့် ကောင်တာ စနစ် (POS)",
    name: "Offline-First စနစ် (အင်တာနက်မရှိဘဲ ရောင်းနိုင်ခြင်း)",
    tooltip:
      "အင်တာနက်ပြတ်တောက်နေချိန်တွင်လည်း အရောင်းမရပ်တန့်ဘဲ ပုံမှန်ရောင်းချနိုင်ပြီး လိုင်းရသည့်အခါ အလိုအလျောက် Sync လုပ်ဆောင်ပေးပါသည်",
    starter: true,
    business: true,
    enterprise: true,
  },
  {
    category: "အရောင်းနှင့် ကောင်တာ စနစ် (POS)",
    name: "မိုဘိုင်းဖုန်း/Tablet နှင့် Desktop ပံ့ပိုးမှု",
    starter: true,
    business: true,
    enterprise: true,
  },
  {
    category: "အရောင်းနှင့် ကောင်တာ စနစ် (POS)",
    name: "ဘားကုဒ် (Barcode) & QR Scanner ထောက်ပံ့မှု",
    starter: true,
    business: true,
    enterprise: true,
  },
  {
    category: "အရောင်းနှင့် ကောင်တာ စနစ် (POS)",
    name: "ပြေစာဘောက်ချာ စိတ်ကြိုက်ပြင်ဆင်ခြင်း (Thermal & A4)",
    starter: "Standard",
    business: "Custom Logo & Format",
    enterprise: "Fully Customizable",
  },

  // စတော့ခ်နှင့် ကုန်ပစ္စည်းစီမံခန့်ခွဲမှု
  {
    category: "စတော့ခ်နှင့် ကုန်ပစ္စည်း စီမံခန့်ခွဲမှု",
    name: "ကုန်ပစ္စည်း အရေအတွက်",
    starter: "၅,၀၀၀ အထိ",
    business: "၅၀,၀၀၀ အထိ",
    enterprise: "အကန့်အသတ်မရှိ",
  },
  {
    category: "စတော့ခ်နှင့် ကုန်ပစ္စည်း စီမံခန့်ခွဲမှု",
    name: "ဆိုင်ခွဲများ စီမံခန့်ခွဲမှု (Multi-branch)",
    tooltip:
      "ဆိုင်ခွဲအချင်းချင်း ကုန်ပစ္စည်းလွှဲပြောင်းခြင်းနှင့် စတော့ခ်လက်ကျန်များကို တစ်ပြိုင်တည်း စစ်ဆေးနိုင်ခြင်း",
    starter: "ဆိုင် ၁ ဆိုင်",
    business: "ဆိုင်ခွဲများစွာ",
    enterprise: "ဆိုင်ခွဲ + ဂိုဒေါင် အကန့်အသတ်မရှိ",
  },
  {
    category: "စတော့ခ်နှင့် ကုန်ပစ္စည်း စီမံခန့်ခွဲမှု",
    name: "စတော့ခ် ကုန်ခါနီး အလိုအလျောက် အသိပေးချက် (Low Stock Alert)",
    starter: true,
    business: true,
    enterprise: true,
  },
  {
    category: "စတော့ခ်နှင့် ကုန်ပစ္စည်း စီမံခန့်ခွဲမှု",
    name: "သတ်တမ်းလွန်ရက် (Expiry Date) နှင့် Batch နံပါတ် စီမံမှု",
    starter: false,
    business: true,
    enterprise: true,
  },
  {
    category: "စတော့ခ်နှင့် ကုန်ပစ္စည်း စီမံခန့်ခွဲမှု",
    name: "ကုန်ပစ္စည်း ဝယ်ယူမှု (Purchase Order) နှင့် Supplier စာရင်း",
    starter: false,
    business: true,
    enterprise: true,
  },

  // စာရင်းအင်းနှင့် အစီရင်ခံစာများ
  {
    category: "ဘဏ္ဍာရေးနှင့် အစီရင်ခံစာများ",
    name: "နေ့စဉ်/လစဉ် အရောင်း အစီရင်ခံစာ (Sales Reports)",
    starter: true,
    business: true,
    enterprise: true,
  },
  {
    category: "ဘဏ္ဍာရေးနှင့် အစီရင်ခံစာများ",
    name: "အမြတ်/အရှုံး (Profit & Loss) တွက်ချက်မှု",
    starter: "အခြေခံ",
    business: "အဆင့်မြင့် အသေးစိတ်",
    enterprise: "စိတ်ကြိုက် ဘဏ္ဍာရေး Dashboard",
  },
  {
    category: "ဘဏ္ဍာရေးနှင့် အစီရင်ခံစာများ",
    name: "အကြွေးစာရင်းနှင့် ပေးရန်/ရရန် စီမံခန့်ခွဲမှု (Receivables/Payables)",
    starter: false,
    business: true,
    enterprise: true,
  },
  {
    category: "ဘဏ္ဍာရေးနှင့် အစီရင်ခံစာများ",
    name: "Excel / PDF Export ပြုလုပ်နိုင်မှု",
    starter: true,
    business: true,
    enterprise: true,
  },

  // ဝန်ထမ်းနှင့် လုံခြုံရေး
  {
    category: "ဝန်ထမ်းနှင့် လုံခြုံရေး",
    name: "ဝန်ထမ်း အကောင့် အရေအတွက်",
    starter: "၂ ယောက်",
    business: "၁၀ ယောက်အထိ",
    enterprise: "အကန့်အသတ်မရှိ",
  },
  {
    category: "ဝန်ထမ်းနှင့် လုံခြုံရေး",
    name: "အခန်းကဏ္ဍအလိုက် လုပ်ပိုင်ခွင့် သတ်မှတ်ခြင်း (Role-based Permissions)",
    starter: false,
    business: true,
    enterprise: true,
  },
  {
    category: "ဝန်ထမ်းနှင့် လုံခြုံရေး",
    name: "အလိုအလျောက် Cloud Backup နှင့် SSL လုံခြုံရေး",
    starter: true,
    business: true,
    enterprise: true,
  },
  {
    category: "ဝန်ထမ်းနှင့် လုံခြုံရေး",
    name: "သီးသန့် Cloud Server (Dedicated Infrastructure)",
    starter: false,
    business: false,
    enterprise: true,
  },

  // အထောက်အပံ့နှင့် ဝန်ဆောင်မှု
  {
    category: "အထောက်အပံ့နှင့် ဝန်ဆောင်မှု",
    name: "ဖောက်သည် ဝန်ဆောင်မှု (Customer Support)",
    starter: "အွန်လိုင်း အကူအညီ (ရုံးချိန်အတွင်း)",
    business: "24/7 ဦးစားပေး အကူအညီ",
    enterprise: "သီးသန့် Account Manager + 24/7 Direct",
  },
  {
    category: "အထောက်အပံ့နှင့် ဝန်ဆောင်မှု",
    name: "လူကိုယ်တိုင် စနစ်တပ်ဆင်ပေးခြင်းနှင့် သင်တန်းပေးခြင်း",
    starter: "ဗီဒီယို လမ်းညွှန်",
    business: "Online Training",
    enterprise: "လုပ်ငန်းခွင်အထိ လူကိုယ်တိုင် လာရောက်တပ်ဆင်ခြင်း",
  },
  {
    category: "အထောက်အပံ့နှင့် ဝန်ဆောင်မှု",
    name: "စိတ်ကြိုက် ပြင်ဆင်ရေးဆွဲမှု (Custom API & Integration)",
    starter: false,
    business: false,
    enterprise: true,
  },
];

export default function PricingComparisonPage() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Group by category
  const categories = Array.from(
    new Set(comparisonFeatures.map((item) => item.category)),
  );

  const renderValue = (val: boolean | string) => {
    if (typeof val === "boolean") {
      return val ? (
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-500">
          <Check className="w-4 h-4" />
        </span>
      ) : (
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-muted/40 text-muted-foreground/60">
          <Minus className="w-4 h-4" />
        </span>
      );
    }
    return <span className="text-sm font-medium text-foreground">{val}</span>;
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />
      <FreeTrialModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />

      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Breadcrumb / Back */}
          <div className="mb-8">
            <Link
              href="/#pricing"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              စျေးနှုန်း အကျဉ်းချုပ်သို့ ပြန်သွားရန်
            </Link>
          </div>

          {/* Page Header */}
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-foreground/10 bg-foreground/5 text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              အသေးစိတ် နှိုင်းယှဉ်ချက်
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground mb-6">
              Package အလိုက် လုပ်ဆောင်ချက်များ အသေးစိတ် နှိုင်းယှဉ်ချက်
            </h1>
            <p className="text-base md:text-lg text-muted-foreground">
              သင့်လုပ်ငန်း အရွယ်အစားနှင့် လိုအပ်ချက်များအတွက် အသင့်တော်ဆုံး
              Package ကို အသေးစိတ် လေ့လာနှိုင်းယှဉ်ပြီး ရွေးချယ်နိုင်ပါသည်။
            </p>
          </div>

          {/* Billing Switcher */}
          <div className="flex items-center gap-4 mb-12 p-2 w-fit rounded-full bg-foreground/5 border border-foreground/10">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-1.5 text-xs md:text-sm rounded-full transition-all cursor-pointer ${
                !isAnnual
                  ? "bg-foreground text-background font-medium shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              လစဉ်ပေးသွင်းမည်
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-1.5 text-xs md:text-sm rounded-full transition-all cursor-pointer flex items-center gap-2 ${
                isAnnual
                  ? "bg-foreground text-background font-medium shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              နှစ်စဉ်ပေးသွင်းမည်
              <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-1.5 py-0.5 rounded-full font-mono">
                သက်သာ ၂၀%
              </span>
            </button>
          </div>

          {/* Comparison Cards / Sticky Headers for desktop & Table */}
          <div className="relative border border-foreground/10 rounded-2xl bg-card/40 backdrop-blur-sm overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-12 divide-x divide-foreground/10 border-b border-foreground/10 bg-muted/20">
              <div className="col-span-5 lg:col-span-4 p-6 flex flex-col justify-end">
                <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  လုပ်ဆောင်ချက်များ
                </span>
              </div>

              {/* Starter */}
              <div className="col-span-2 lg:col-span-2.5 p-4 lg:p-6 text-center flex flex-col justify-between">
                <div>
                  <div className="inline-flex p-2 rounded-xl bg-foreground/5 mb-2">
                    <Store className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <h3 className="font-display text-base lg:text-lg font-semibold text-foreground">
                    Starter POS
                  </h3>
                  <div className="mt-2 text-xs lg:text-sm font-semibold text-foreground">
                    {isAnnual ? "၂၉,၀၀၀ ကျပ်" : "၃၅,၀၀၀ ကျပ်"}
                    <span className="text-[11px] font-normal text-muted-foreground block">
                      /လ
                    </span>
                  </div>
                </div>
                <Button
                  onClick={() => setIsModalOpen(true)}
                  size="sm"
                  variant="outline"
                  className="mt-4 w-full text-xs font-medium border-foreground/20 hover:border-foreground"
                >
                  စမ်းသုံးရန်
                </Button>
              </div>

              {/* Business ERP */}
              <div className="col-span-3 lg:col-span-3 p-4 lg:p-6 text-center bg-foreground/[0.03] relative flex flex-col justify-between">
                <div className="absolute -top-px left-1/2 -translate-x-1/2 bg-foreground text-background text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-b-md font-semibold">
                  လူကြိုက်အများဆုံး
                </div>
                <div>
                  <div className="inline-flex p-2 rounded-xl bg-foreground/10 mb-2 mt-2">
                    <Zap className="w-4 h-4 text-foreground" />
                  </div>
                  <h3 className="font-display text-base lg:text-lg font-semibold text-foreground">
                    Business ERP
                  </h3>
                  <div className="mt-2 text-xs lg:text-sm font-semibold text-foreground">
                    {isAnnual ? "၆၉,၀၀၀ ကျပ်" : "၈၅,၀၀၀ ကျပ်"}
                    <span className="text-[11px] font-normal text-muted-foreground block">
                      /လ
                    </span>
                  </div>
                </div>
                <Button
                  onClick={() => setIsModalOpen(true)}
                  size="sm"
                  className="mt-4 w-full text-xs font-medium bg-foreground text-background hover:bg-foreground/90"
                >
                  အခမဲ့ စမ်းသုံးရန်
                </Button>
              </div>

              {/* Enterprise */}
              <div className="col-span-2 lg:col-span-2.5 p-4 lg:p-6 text-center flex flex-col justify-between">
                <div>
                  <div className="inline-flex p-2 rounded-xl bg-foreground/5 mb-2">
                    <Building2 className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <h3 className="font-display text-base lg:text-lg font-semibold text-foreground">
                    Enterprise
                  </h3>
                  <div className="mt-2 text-xs lg:text-sm font-semibold text-foreground">
                    စိတ်ကြိုက်
                    <span className="text-[11px] font-normal text-muted-foreground block">
                      ညှိနှိုင်းစျေး
                    </span>
                  </div>
                </div>
                <Button
                  onClick={() => setIsModalOpen(true)}
                  size="sm"
                  variant="outline"
                  className="mt-4 w-full text-xs font-medium border-foreground/20 hover:border-foreground"
                >
                  ဆက်သွယ်ရန်
                </Button>
              </div>
            </div>

            {/* Categorized Rows */}
            <div className="divide-y divide-foreground/10">
              {categories.map((category) => (
                <div key={category}>
                  {/* Category Title Header */}
                  <div className="bg-foreground/5 px-6 py-3 border-y border-foreground/10 text-xs font-mono uppercase tracking-wider text-foreground font-semibold flex items-center gap-2">
                    <span>{category}</span>
                  </div>

                  {/* Feature Rows */}
                  {comparisonFeatures
                    .filter((item) => item.category === category)
                    .map((item, idx) => (
                      <div
                        key={idx}
                        className="grid grid-cols-12 divide-x divide-foreground/10 text-xs lg:text-sm hover:bg-foreground/[0.02] transition-colors"
                      >
                        {/* Feature title */}
                        <div className="col-span-5 lg:col-span-4 p-4 lg:p-5 flex items-center gap-2">
                          <span className="text-foreground font-medium">
                            {item.name}
                          </span>
                          {item.tooltip && (
                            <span
                              title={item.tooltip}
                              className="text-muted-foreground hover:text-foreground cursor-help inline-flex"
                            >
                              <HelpCircle className="w-3.5 h-3.5" />
                            </span>
                          )}
                        </div>

                        {/* Starter Value */}
                        <div className="col-span-2 lg:col-span-2.5 p-4 lg:p-5 flex items-center justify-center text-center">
                          {renderValue(item.starter)}
                        </div>

                        {/* Business Value */}
                        <div className="col-span-3 lg:col-span-3 p-4 lg:p-5 flex items-center justify-center text-center bg-foreground/[0.015]">
                          {renderValue(item.business)}
                        </div>

                        {/* Enterprise Value */}
                        <div className="col-span-2 lg:col-span-2.5 p-4 lg:p-5 flex items-center justify-center text-center">
                          {renderValue(item.enterprise)}
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          {/* Trust Banner / Included in all plans */}
          <div className="mt-16 p-8 rounded-2xl border border-foreground/10 bg-foreground/[0.02] grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-foreground/5 shrink-0">
                <Shield className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <h4 className="font-medium text-foreground text-sm mb-1">
                  100% လုံခြုံစိတ်ချရသော Cloud Backup
                </h4>
                <p className="text-xs text-muted-foreground">
                  စနစ်အတွင်းရှိ အရောင်းနှင့် ဘဏ္ဍာရေး အချက်အလက်များကို နေ့စဉ်
                  အလိုအလျောက် Backup သိမ်းဆည်းပေးပါသည်။
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-foreground/5 shrink-0">
                <Zap className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <h4 className="font-medium text-foreground text-sm mb-1">
                  အမြဲတမ်း နောက်ဆုံးပေါ် စနစ် Update
                </h4>
                <p className="text-xs text-muted-foreground">
                  Feature အသစ်များနှင့် လုံခြုံရေး Update များကို
                  အပိုငွေပေးစရာမလိုဘဲ အခမဲ့ ရရှိနိုင်ပါသည်။
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-foreground/5 shrink-0">
                <Sparkles className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <h4 className="font-medium text-foreground text-sm mb-1">
                  ၁၄ ရက် အခမဲ့ စမ်းသပ်အသုံးပြုခွင့်
                </h4>
                <p className="text-xs text-muted-foreground">
                  မည်သည့် package မဆို ခရက်ဒစ်ကတ် (သို့)
                  ငွေကြိုပေးသွင်းရန်မလိုဘဲ အခမဲ့ စမ်းသပ်နိုင်ပါသည်။
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h3 className="font-display text-2xl md:text-3xl font-semibold mb-4 text-foreground">
              သင့်လုပ်ငန်းနှင့် ကိုက်ညီမည့် Package ကို ရွေးချယ်ပြီးပြီလား?
            </h3>
            <p className="text-sm text-muted-foreground max-w-lg mx-auto mb-6">
              ကျွန်ုပ်တို့၏ ကျွမ်းကျင်ပညာရှင်များနှင့် ဆွေးနွေးတိုင်ပင်ပြီး
              လုပ်ငန်းစတင်ရန် အခမဲ့ အကောင့်ဖွင့်လိုက်ပါ။
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                onClick={() => setIsModalOpen(true)}
                className="bg-foreground text-background hover:bg-foreground/90 px-8 py-5 text-sm"
              >
                အခမဲ့ စတင်စမ်းသုံးရန်
              </Button>
              <Link href="/#pricing">
                <Button
                  variant="outline"
                  className="border-foreground/20 px-6 py-5 text-sm"
                >
                  စျေးနှုန်းများ ပြန်ကြည့်ရန်
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
