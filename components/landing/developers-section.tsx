"use client";

import { useState, useEffect, useRef } from "react";
import { Copy, Check } from "lucide-react";

const codeExamples = [
  {
    label: "MCP Config",
    code: `{
  "mcpServers": {
    "kanitt-erp": {
      "command": "npx",
      "args": ["-y", "@kanitt/mcp-server"],
      "env": {
        "KANITT_API_KEY": "kn_live_..."
      }
    }
  }
}`,
  },
  {
    label: "AI Agent Tools",
    code: `// AI Assistants can directly execute MCP Tools:
// 1. get_sales_report({ startDate: "2026-10-01" })
// 2. check_inventory({ sku: "PROD-101" })
// 3. create_pos_invoice({ items: [...] })

const result = await useMcpTool("kanitt-erp", "get_sales_report", {
  period: "today"
})`,
  },
  {
    label: "Offline Sync Tool",
    code: `// MCP Resource & Prompt Trigger for Offline Sync
const syncStatus = await readResource("kanitt://sync/status")

console.log("Pending offline orders:", syncStatus.pendingCount)`,
  },
];

const features = [
  { 
    title: "Model Context Protocol", 
    description: "AI Agent များမှ ERP & POS စနစ်ကို တိုက်ရိုက် စီမံခန့်ခွဲနိုင်မည့် Standard MCP Server."
  },
  { 
    title: "Real-time AI Tools", 
    description: "စတော့ခ်စစ်ခြင်း၊ အရောင်းအစီရင်ခံစာ ထုတ်ခြင်းနှင့် Invoice ရိုက်ခြင်းများကို AI မှ တဆင့် ဆောင်ရွက်နိုင်မှု။"
  },
  { 
    title: "Offline-Sync Resources", 
    description: "Local Database နှင့် Cloud Server အကြား Sync အခြေအနေကို AI မှ စောင့်ကြည့်နိုင်သော MCP Resources."
  },
  { 
    title: "Secure Auth & Audit", 
    description: "API Key ဖြင့် စနစ်ကျသော လုံခြုံရေးနှင့် လုပ်ဆောင်ချက် Log များ ထိန်းသိမ်းမှု။"
  },
];

const codeAnimationStyles = `
  .dev-code-line {
    opacity: 0;
    transform: translateX(-8px);
    animation: devLineReveal 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }
  
  @keyframes devLineReveal {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  .dev-code-char {
    opacity: 0;
    filter: blur(8px);
    animation: devCharReveal 0.3s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }
  
  @keyframes devCharReveal {
    to {
      opacity: 1;
      filter: blur(0);
    }
  }
`;

export function DevelopersSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExamples[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
    <section id="developers" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: codeAnimationStyles }} />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              AI & MCP Integration
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-8">
              AI-Native Integration
              <br />
              <span className="text-muted-foreground">via MCP Server.</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Claude, Antigravity IDE, Cursor စသည့် AI Agent များမှ သင့် Kanitt ERP & POS စနစ်ရှိ အရောင်း၊ စတော့ခ်နှင့် အစီရင်ခံစာများကို Model Context Protocol (MCP) ဖြင့် တိုက်ရိုက် မေးမြန်းစုံစမ်း စီမံခန့်ခွဲနိုင်ပါသည်။
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 50 + 200}ms` }}
                >
                  <h3 className="font-medium mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right: Code block */}
          <div
            className={`lg:sticky lg:top-32 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="border border-foreground/10">
              {/* Tabs */}
              <div className="flex items-center border-b border-foreground/10">
                {codeExamples.map((example, idx) => (
                  <button
                    key={example.label}
                    type="button"
                    onClick={() => setActiveTab(idx)}
                    className={`px-6 py-4 text-sm font-mono transition-colors relative ${
                      activeTab === idx
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {example.label}
                    {activeTab === idx && (
                      <span className="absolute bottom-0 left-0 right-0 h-px bg-foreground" />
                    )}
                  </button>
                ))}
                <div className="flex-1" />
                <button
                  type="button"
                  onClick={handleCopy}
                  className="px-4 py-4 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Copy code"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              
              {/* Code content */}
              <div className="p-8 font-mono text-sm bg-foreground/[0.01] min-h-[220px]">
                <pre className="text-foreground/80">
                  {codeExamples[activeTab].code.split('\n').map((line, lineIndex) => (
                    <div 
                      key={`${activeTab}-${lineIndex}`} 
                      className="leading-loose dev-code-line"
                      style={{ animationDelay: `${lineIndex * 80}ms` }}
                    >
                      <span className="inline-flex">
                        {line.split('').map((char, charIndex) => (
                          <span
                            key={`${activeTab}-${lineIndex}-${charIndex}`}
                            className="dev-code-char"
                            style={{
                              animationDelay: `${lineIndex * 80 + charIndex * 15}ms`,
                            }}
                          >
                            {char === ' ' ? '\u00A0' : char}
                          </span>
                        ))}
                      </span>
                    </div>
                  ))}
                </pre>
              </div>
            </div>
            
            {/* Links */}
            <div className="mt-6 flex items-center gap-6 text-sm">
              <a href="#" className="text-foreground hover:underline underline-offset-4">
                Read the docs
              </a>
              <span className="text-foreground/20">|</span>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
