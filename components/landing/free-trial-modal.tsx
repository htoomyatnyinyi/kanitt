"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Store, Phone, User, Building } from "lucide-react";

interface FreeTrialModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function FreeTrialModal({ isOpen, onOpenChange }: FreeTrialModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    storeName: "",
    businessType: "retail",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onOpenChange(false);
    setFormData({ name: "", phone: "", storeName: "", businessType: "retail" });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[480px] p-6 lg:p-8 rounded-2xl">
        {!isSubmitted ? (
          <>
            <DialogHeader className="mb-4 text-left">
              <DialogTitle className="text-2xl font-display">
                Kanitt ERP & POS အခမဲ့ စမ်းသုံးရန်
              </DialogTitle>
              <DialogDescription className="text-muted-foreground mt-1">
                အောက်ပါ အချက်အလက်များကို ဖြည့်စွက်ပြီး အကောင့်စတင် အသုံးပြုနိုင်ပါသည်။
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                  <User className="w-4 h-4 text-muted-foreground" />
                  အမည်
                </Label>
                <Input
                  id="name"
                  placeholder="ဦးမောင်မောင်"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-11 rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium flex items-center gap-2">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  ဖုန်းနံပါတ်
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="09123456789"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-11 rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="storeName" className="text-sm font-medium flex items-center gap-2">
                  <Store className="w-4 h-4 text-muted-foreground" />
                  ဆိုင် သို့မဟုတ် လုပ်ငန်းအမည်
                </Label>
                <Input
                  id="storeName"
                  placeholder="City Mart Express (Mandalay Branch)"
                  required
                  value={formData.storeName}
                  onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
                  className="h-11 rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="businessType" className="text-sm font-medium flex items-center gap-2">
                  <Building className="w-4 h-4 text-muted-foreground" />
                  လုပ်ငန်းအမျိုးအစား
                </Label>
                <select
                  id="businessType"
                  value={formData.businessType}
                  onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                  className="w-full h-11 px-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="retail">ကုန်စုံဆိုင် / စတိုးဆိုင် (Retail & Mart)</option>
                  <option value="restaurant">စားသောက်ဆိုင် / Cafe (Restaurant & Cafe)</option>
                  <option value="fashion">အထည်နှင့် လူသုံးကုန်ဆိုင် (Fashion & Cosmetics)</option>
                  <option value="pharmacy">ဆေးဆိုင် (Pharmacy)</option>
                  <option value="wholesale">လက္ကားနှင့် ဖြန့်ဖြူးရေး (Wholesale & Distribution)</option>
                </select>
              </div>

              <Button
                type="submit"
                className="w-full h-12 mt-6 rounded-xl bg-foreground text-background text-base font-medium hover:bg-foreground/90 transition-all"
              >
                စမ်းသုံးခွင့် တောင်းဆိုမည်
              </Button>

              <p className="text-xs text-center text-muted-foreground font-mono mt-2">
                ၁၄ ရက် အခမဲ့ စမ်းသုံးခွင့် ပါဝင်သည်။ Credit Card မလိုပါ။
              </p>
            </form>
          </>
        ) : (
          <div className="py-6 text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-950 text-green-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-display">တောင်းဆိုမှု အောင်မြင်ပါသည်။</h3>

            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto">
              မင်္ဂလာပါ <span className="font-semibold text-foreground">{formData.name}</span>။ သင့်လုပ်ငန်း{" "}
              <span className="font-semibold text-foreground">{formData.storeName}</span> အတွက် Kanitt ERP & POS အခမဲ့ စမ်းသုံးခွင့် အကောင့် ပြင်ဆင်ပြီးပါပြီ။ ကျွန်ုပ်တို့၏ Customer Support အဖွဲ့မှ ဖုန်းနံပါတ်{" "}
              <span className="font-mono font-semibold text-foreground">{formData.phone}</span> သို့ အမြန်ဆုံး ဆက်သွယ်ပေးပါမည်။
            </p>

            <Button
              onClick={handleReset}
              className="w-full h-11 rounded-xl bg-foreground text-background text-sm font-medium"
            >
              ခေတ္တပိတ်မည်
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
