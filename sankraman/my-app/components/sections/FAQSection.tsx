"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { animate, stagger } from "animejs";

export default function FAQSection() {
  const faqs = [
    { question: "Who can participate?", answer: "Engineering students across India." },
    { question: "Team size?", answer: "2–4 members per team." },
    { question: "Project type?", answer: "Hardware or software projects." },
    { question: "Prototype required?", answer: "Yes, a working prototype is required for shortlisted teams in the final rounds." },
    { question: "Certificates?", answer: "Yes, certificates will be provided for all participants." }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Anime.js entrance animation
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = Array.from(container.querySelectorAll<HTMLElement>(".faq-item"));
    
    // Set initial state
    items.forEach((item) => {
      item.style.opacity = "0";
      item.style.transform = "translateX(-30px)";
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          observer.disconnect();

          animate(items, {
            opacity: [0, 1],
            translateX: [-30, 0],
            delay: stagger(80, { start: 200 }),
            duration: 600,
            ease: "outExpo",
          });
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div id="faq" className="relative min-h-[80vh] flex items-center justify-center py-20">

      {/* Dark Glassmorphism Background */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-xl" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/70" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-4xl mx-auto px-8 md:px-12"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-[0.55rem] md:text-xs font-black tracking-[0.4em] text-[#ff6600] uppercase mb-8 mix-blend-screen opacity-90">
            GOT QUESTIONS?
          </div>

          <h2
            className="dune-heading text-[#ffedd5] drop-shadow-[0_0_30px_rgba(255,166,0,0.6)]"
            style={{ 
              fontFamily: "'Dune Rise', sans-serif",
              fontSize: "clamp(1.5rem, 4vw, 3rem)",
              letterSpacing: "0.06em"
            }}
          >
            FAQS
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div ref={containerRef} className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="faq-item border border-[#ff6600]/20 bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden transition-all duration-300 hover:border-[#ff6600]/50 hover:shadow-[0_0_20px_rgba(255,102,0,0.15)]"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none group"
              >
                <span className="text-[#ffedd5] font-bold tracking-wider text-lg group-hover:text-[#ffaa00] transition-colors">
                  {faq.question}
                </span>
                <span className={`text-[#ff6600] text-2xl transition-all duration-300 ${openIndex === index ? 'rotate-45 scale-110' : ''} group-hover:scale-110`}>
                  +
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-[#ffedd5]/80 leading-relaxed tracking-wide border-t border-[#ff6600]/10 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60 pointer-events-none" />
    </div>
  );
}
