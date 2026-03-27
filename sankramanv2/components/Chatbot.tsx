"use client";

import { useState, useRef, useEffect, useCallback } from "react";

/* ─── Event knowledge base ─────────────────────────────────────────────────── */
type BotResponse = {
  text: string;
  links?: { label: string; url: string; download?: boolean }[];
};

const RULES: { keywords: string[]; response: BotResponse }[] = [
  {
    keywords: ["hi", "hello", "hey", "hola", "namaste", "greet"],
    response: {
      text: "Hey! Welcome to Prakalp 4.0 👋\nI'm PRAKAI — your event assistant.\n\nAsk me anything about registration, venue, rounds, prizes, or contacts!",
    },
  },
  {
    keywords: ["register", "sign up", "apply", "unstop", "enrollment", "participate"],
    response: {
      text: "Register for Prakalp 4.0 on Unstop — it's free!\n\nClick below to secure your spot before seats fill up.",
      links: [
        {
          label: "Register on Unstop →",
          url: "https://unstop.com/p/prakalp-40-fr-conceicao-rodrigues-college-of-engineering-frcrce-bandra-1660364?utm_medium=Share&utm_source=chrqwgfb39910&utm_campaign=Online_coding_challenge",
        },
      ],
    },
  },
  {
    keywords: ["date", "when", "schedule", "time", "april", "day"],
    response: {
      text: "Prakalp 4.0 is happening on:\n\n📅 18 April 2026 (Saturday)\n📍 FR. CRCE, Bandra, Mumbai",
    },
  },
  {
    keywords: ["venue", "location", "where", "address", "place", "bandra", "crce", "mumbai", "map"],
    response: {
      text: "The event is held at:\n\nFr. Conceicao Rodrigues College of Engineering\nFr. Agnel Ashram, Bandstand Promenade\nBandra West, Mumbai — 400050\n\nNearest station: Bandra",
      links: [{ label: "📍 Open in Google Maps", url: "https://maps.app.goo.gl/9awrEXbbMHC2w8xM7" }],
    },
  },
  {
    keywords: ["prize", "money", "award", "win", "cash", "reward", "lakh"],
    response: {
      text: "💰 Prakalp 4.0 has a prize pool of ₹1,00,000!\n\nTop teams across categories will be rewarded for their innovation and technical excellence.",
    },
  },
  {
    keywords: ["brochure", "pdf", "download", "document", "file"],
    response: {
      text: "Download our official brochures for full event details:",
      links: [
        { label: "↓ FR.CRCE Teams Brochure", url: "/brouchures/Prakalp_4.0_FRCRCE_Teams_Only_Brochure.pdf", download: true },
        { label: "↓ External Teams Brochure", url: "/brouchures/Prakalp_4.0_PR_Brochure_External.pdf", download: true },
      ],
    },
  },
  {
    keywords: ["contact", "reach", "call", "whatsapp", "phone", "number", "head"],
    response: {
      text: "Contact our event heads:\n\n• Aahana Peter (WIE PR)\n  +91 87796 14123\n\n• Pranav Koradiya (Project Cell Co-lead)\n  +91 97692 04570\n\n• Kunal Sarvaiya (IEEE PR)\n  +91 79001 88666",
      links: [
        { label: "WhatsApp Aahana", url: "https://wa.me/918779614123" },
        { label: "WhatsApp Pranav", url: "https://wa.me/919769204570" },
        { label: "WhatsApp Kunal", url: "https://wa.me/917900188666" },
      ],
    },
  },
  {
    keywords: ["round", "phase", "stage", "format", "process", "submission", "presentation", "ppt", "video"],
    response: {
      text: "Prakalp 4.0 has 3 phases:\n\n🔵 Round 1 — Online Submission\nSubmit a PPT (max 7 slides) + demo video (max 4 min). Top teams shortlisted.\n\n🔵 Round 2 — On-Campus Presentation\nPresent at FR. CRCE: 7 min pitch + 3 min Q&A.\n\n🏆 Final — Evaluation Phase\nFinalists judged by industry experts. Winners crowned!",
    },
  },
  {
    keywords: ["team", "member", "size", "group", "how many", "people"],
    response: {
      text: "Prakalp 4.0 hosts 120+ teams from 25+ colleges across India!\n\nFor team size and eligibility details, check the brochure.",
      links: [{ label: "↓ Download Brochure", url: "/brouchures/Prakalp_4.0_PR_Brochure_External.pdf", download: true }],
    },
  },
  {
    keywords: ["ieee", "wie", "project cell", "organizer", "organise", "who"],
    response: {
      text: "Prakalp 4.0 is co-organised by three powerhouse chapters at FR. CRCE:\n\n⚡ IEEE CRCE — World's largest tech professional org\n👩‍💻 WIE CRCE — IEEE Women in Engineering\n🔧 Project Cell CRCE — Applied engineering hub",
    },
  },
  {
    keywords: ["sankraman", "theme", "concept", "meaning"],
    response: {
      text: "\"Sankraman\" means Engineering the Transition — the journey from a raw idea to real-world impact.\n\nPrakalp 4.0 celebrates that transition, pushing students to build innovations that matter.",
    },
  },
  {
    keywords: ["about", "what is prakalp", "prakalp", "event", "tell me"],
    response: {
      text: "Prakalp 4.0 is a flagship National-Level Project Exhibition organised by IEEE, WIE & Project Cell of FR. CRCE.\n\nNow in its 4th edition, it platforms 120+ teams from 25+ colleges to showcase breakthrough hardware & software innovations to top industry experts.\n\n💰 Prize pool: ₹1,00,000\n📅 Date: 18 April 2026",
    },
  },
  {
    keywords: ["instagram", "social", "follow", "insta"],
    response: {
      text: "Follow us on Instagram:\n\n📸 @ieee_crce\n📸 @wie_crce\n📸 @project_cell.crce",
    },
  },
  {
    keywords: ["email", "mail", "gmail"],
    response: {
      text: "Reach us by email:\n\n✉ ieeece.24@gmail.com (IEEE)\n✉ wieieee.21@gmail.com (WIE)\n✉ projectcellcrce2024@gmail.com (Project Cell)",
    },
  },
  {
    keywords: ["thank", "thanks", "ty", "great", "awesome", "cool"],
    response: {
      text: "You're welcome! 🙌 Feel free to ask anything else. See you at Prakalp 4.0! 🏆",
    },
  },
  {
    keywords: ["bye", "goodbye", "later", "cya"],
    response: { text: "Goodbye! Good luck with your project. See you at Prakalp 4.0! 🌟" },
  },
];

function getBotResponse(input: string): BotResponse {
  const q = input.toLowerCase().trim();
  for (const rule of RULES) {
    if (rule.keywords.some((k) => q.includes(k))) return rule.response;
  }
  return {
    text: "I don't have an answer for that just yet!\n\nFor anything specific, reach out to our PR team directly:\n\n📞 Aahana Peter (WIE PR)\n+91 87796 14123",
    links: [{ label: "WhatsApp Aahana →", url: "https://wa.me/918779614123" }],
  };
}

/* ─── Suggested quick questions ────────────────────────────────────────────── */
const SUGGESTIONS = [
  "How to register?",
  "Event date & venue",
  "Prize pool",
  "Event rounds",
  "Contact heads",
  "Download brochure",
];

/* ─── Types ─────────────────────────────────────────────────────────────────── */
type Message = {
  role: "user" | "bot";
} & BotResponse;

/* ─── Component ─────────────────────────────────────────────────────────────── */
export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Welcome to Prakalp 4.0! ✨\nI'm PRAKAI — your event guide.\n\nAsk me anything about the event or tap a suggestion below!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [iconOpacity, setIconOpacity] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  /* Fade in icon as user scrolls past the hero (first ~60vh) */
  useEffect(() => {
    const handleScroll = () => {
      const start = window.innerHeight * 0.4;
      const end = window.innerHeight * 0.9;
      const clamped = Math.min(Math.max(window.scrollY - start, 0), end - start);
      setIconOpacity(clamped / (end - start));
    };
    handleScroll(); // set initial value
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Close chat if user scrolls back to top and icon disappears */
  useEffect(() => {
    if (iconOpacity === 0) setIsOpen(false);
  }, [iconOpacity]);

  /* scroll to bottom on new messages */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  /* focus input when opened */
  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 100);
  }, [isOpen]);

  const sendMessage = useCallback((text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, { role: "user", text: trimmed }]);
    setInput("");
    setIsTyping(true);

    const delay = 500 + Math.random() * 400;
    setTimeout(() => {
      const res = getBotResponse(trimmed);
      setMessages((prev) => [...prev, { role: "bot", ...res }]);
      setIsTyping(false);
    }, delay);
  }, []);

  return (
    <>
      {/* ── Chat Window ───────────────────────────────────────────────────── */}
      <div
        className={`fixed bottom-24 right-4 sm:right-6 z-[200] flex flex-col rounded-2xl overflow-hidden transition-all duration-300 ease-out origin-bottom-right ${
          isOpen
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-90 pointer-events-none"
        }`}
        style={{
          width: "min(92vw, 22rem)",
          maxHeight: "72vh",
          boxShadow: "0 0 0 1px rgba(255,102,0,0.25), 0 0 40px rgba(255,102,0,0.15), 0 24px 60px rgba(0,0,0,0.8)",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-black/95 border-b border-[#ff6600]/25 backdrop-blur-xl shrink-0">
          <div className="flex items-center gap-3">
            {/* Bot avatar */}
            <div className="relative w-8 h-8 rounded-full border border-[#ff6600]/60 bg-[#ff6600]/10 flex items-center justify-center shrink-0">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="8" width="18" height="13" rx="2" stroke="#ff6600" strokeWidth="2"/>
                <path d="M9 8V6a3 3 0 016 0v2" stroke="#ff6600" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="9" cy="14" r="1.5" fill="#ff6600"/>
                <circle cx="15" cy="14" r="1.5" fill="#ff6600"/>
              </svg>
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#22c55e] border border-black" />
            </div>
            <div>
              <p
                className="text-[#ffedd5] text-[0.7rem] tracking-[0.2em] uppercase"
                style={{ fontFamily: "'Dune Rise', sans-serif" }}
              >
                PRAKAI
              </p>
              <p className="text-[#ff6600]/80 text-[0.55rem] tracking-widest">Prakalp 4.0 · Event Assistant</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="text-[#ffedd5]/40 hover:text-[#ffedd5] transition-colors p-1 rounded"
            aria-label="Close chat"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-black/88 backdrop-blur-xl" style={{ minHeight: 0 }}>
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[88%] rounded-2xl px-3 py-2 text-[0.72rem] leading-relaxed whitespace-pre-wrap ${
                  msg.role === "user"
                    ? "bg-[#ff6600] text-black rounded-br-none font-medium"
                    : "bg-white/[0.06] border border-[#ff6600]/18 text-[#ffedd5]/90 rounded-bl-none"
                }`}
              >
                {msg.text}
                {msg.links && (
                  <div className="mt-2 flex flex-col gap-1.5">
                    {msg.links.map((link, j) => (
                      <a
                        key={j}
                        href={link.url}
                        target={link.download ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        download={link.download || undefined}
                        className="block text-center border border-[#ff6600]/50 rounded-lg px-3 py-1.5 text-[#ff6600] hover:bg-[#ff6600]/15 transition-colors text-[0.62rem] tracking-wider font-bold"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white/[0.06] border border-[#ff6600]/18 rounded-2xl rounded-bl-none px-4 py-3 flex gap-1.5 items-center">
                {[0, 150, 300].map((d) => (
                  <span
                    key={d}
                    className="w-1.5 h-1.5 bg-[#ff6600]/70 rounded-full animate-bounce"
                    style={{ animationDelay: `${d}ms` }}
                  />
                ))}
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggestions */}
        <div className="shrink-0 bg-black/90 px-3 pt-2 pb-1 flex gap-1.5 overflow-x-auto backdrop-blur-xl border-t border-[#ff6600]/10"
          style={{ scrollbarWidth: "none" }}>
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => sendMessage(s)}
              className="shrink-0 text-[0.58rem] border border-[#ff6600]/30 text-[#ff6600]/75 px-2.5 py-1 rounded-full hover:border-[#ff6600]/70 hover:text-[#ff6600] transition-colors whitespace-nowrap"
            >
              {s}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="shrink-0 bg-black/95 border-t border-[#ff6600]/20 px-3 py-2.5 flex gap-2 backdrop-blur-xl">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage(input)}
            placeholder="Ask about Prakalp 4.0..."
            className="flex-1 min-w-0 bg-white/[0.06] border border-[#ff6600]/20 rounded-xl px-3 py-2 text-[0.72rem] text-[#ffedd5] placeholder:text-[#ffedd5]/25 outline-none focus:border-[#ff6600]/50 transition-colors"
          />
          <button
            type="button"
            onClick={() => sendMessage(input)}
            disabled={!input.trim()}
            className="shrink-0 w-9 h-9 rounded-xl bg-[#ff6600] hover:bg-[#ffaa00] disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center"
            aria-label="Send"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* ── Floating Trigger Button ──────────────────────────────────────────── */}
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-label="Open event assistant"
        className="fixed bottom-6 right-4 sm:right-6 z-[200] w-14 h-14 rounded-full bg-black border-2 border-[#ff6600] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-[#ffaa00] neon-btn"
        style={{
          opacity: iconOpacity,
          pointerEvents: iconOpacity < 0.1 ? "none" : "auto",
          transform: `scale(${0.7 + iconOpacity * 0.3})`,
        }}
      >
        <span
          className={`absolute inset-0 rounded-full transition-all duration-300 ${
            isOpen ? "opacity-0 scale-75" : "opacity-100 scale-100"
          }`}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="absolute inset-0 m-auto">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="#ff6600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="9" cy="10" r="1.2" fill="#ff6600"/>
            <circle cx="12" cy="10" r="1.2" fill="#ff6600"/>
            <circle cx="15" cy="10" r="1.2" fill="#ff6600"/>
          </svg>
        </span>
        <span
          className={`absolute inset-0 rounded-full transition-all duration-300 ${
            isOpen ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="absolute inset-0 m-auto">
            <path d="M18 6L6 18M6 6l12 12" stroke="#ff6600" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </span>
      </button>
    </>
  );
}
