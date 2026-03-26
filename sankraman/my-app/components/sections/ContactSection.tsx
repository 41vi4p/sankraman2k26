"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { animate, stagger } from "animejs";

export default function ContactSection() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const hasAnimatedCards = useRef(false);
  const hasAnimatedButtons = useRef(false);

  // Animate CTA buttons
  useEffect(() => {
    const container = buttonsRef.current;
    if (!container) return;

    const buttons = Array.from(container.querySelectorAll<HTMLElement>(".cta-btn"));
    
    buttons.forEach((btn) => {
      btn.style.opacity = "0";
      btn.style.transform = "translateY(20px) scale(0.95)";
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedButtons.current) {
          hasAnimatedButtons.current = true;
          observer.disconnect();

          animate(buttons, {
            opacity: [0, 1],
            translateY: [20, 0],
            scale: [0.95, 1],
            delay: stagger(150),
            duration: 700,
            ease: "outBack",
          });
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  // Animate info cards
  useEffect(() => {
    const container = cardsRef.current;
    if (!container) return;

    const cards = Array.from(container.querySelectorAll<HTMLElement>(".info-card"));
    
    cards.forEach((card, i) => {
      card.style.opacity = "0";
      card.style.transform = `translateX(${i % 2 === 0 ? -40 : 40}px)`;
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedCards.current) {
          hasAnimatedCards.current = true;
          observer.disconnect();

          animate(cards, {
            opacity: [0, 1],
            translateX: [
              (_, i) => (i % 2 === 0 ? -40 : 40),
              0
            ],
            delay: stagger(200),
            duration: 800,
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
    <div id="contact" className="relative min-h-screen flex items-center justify-center py-20">

      {/* Dark Glassmorphism Background */}
      <div className="absolute inset-0 bg-black/55 backdrop-blur-2xl" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/45 to-black/75" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-4xl mx-auto px-8 md:px-12 text-center"
      >
        {/* Section Header */}
        <div className="mb-16">
          <div className="text-[0.55rem] md:text-xs font-black tracking-[0.4em] text-[#ff6600] uppercase mb-8 mix-blend-screen opacity-90">
            FINAL CALL
          </div>

          <h2
            className="dune-heading text-[#ffedd5] mb-8 drop-shadow-[0_0_30px_rgba(255,166,0,0.6)]"
            style={{ 
              fontFamily: "'Dune Rise', sans-serif",
              fontSize: "clamp(1.4rem, 4vw, 2.8rem)",
              letterSpacing: "0.06em"
            }}
          >
            JOIN THE TRANSITION
          </h2>

          <p className="text-xl md:text-2xl text-[#ffedd5]/90 leading-relaxed tracking-wide mb-12 drop-shadow-sm">
            Step into Sankraman — where ideas turn into impactful innovations.
          </p>
        </div>

        {/* CTA Buttons */}
        <div ref={buttonsRef} className="mb-16 flex flex-col sm:flex-row justify-center items-center gap-6">
          <button className="cta-btn group relative border-2 border-[#ff6600] bg-black/30 backdrop-blur-sm px-12 py-4 rounded-lg overflow-hidden transition-all duration-500 hover:border-[#ffaa00] hover:bg-black/40 neon-btn">
            <span
              className="relative z-10 font-black tracking-[0.2em] text-[#ff6600] uppercase group-hover:text-[#1a0a00] transition-colors duration-500 drop-shadow-sm"
              style={{ 
                fontFamily: "'Dune Rise', sans-serif",
                fontSize: "clamp(0.85rem, 2vw, 1.1rem)"
              }}
            >
              REGISTER NOW
            </span>
            <div className="absolute inset-0 bg-[#ff6600] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
          </button>

          <button className="cta-btn group relative border border-[#ffedd5]/30 bg-white/5 backdrop-blur-sm px-12 py-4 rounded-lg overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-[#ffedd5]/60">
            <span
              className="relative z-10 font-black tracking-[0.2em] text-[#ffedd5] uppercase transition-colors duration-500 drop-shadow-sm"
              style={{ 
                fontFamily: "'Dune Rise', sans-serif",
                fontSize: "clamp(0.85rem, 2vw, 1.1rem)"
              }}
            >
              CONTACT US
            </span>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
        </div>

        {/* Venue Info */}
        <div ref={cardsRef} className="grid md:grid-cols-2 gap-8 text-left">
          <div className="info-card p-8 rounded-xl bg-black/30 backdrop-blur-sm border border-[#ff6600]/20 hover:-translate-y-2 hover:shadow-[0_15px_30px_-10px_rgba(255,102,0,0.4)] transition-all duration-500">
            <div className="text-[0.6rem] md:text-xs font-black tracking-[0.3em] text-[#ff6600] uppercase mb-4">
              EVENT VENUE
            </div>
            <h3 className="text-2xl text-[#ffedd5] font-bold mb-3 tracking-wider">
              Fr. Conceicao Rodrigues College of Engineering
            </h3>
            <div className="text-[#ffedd5]/90 tracking-wide drop-shadow-sm mb-6 text-lg">
              Bandra West, Mumbai
            </div>
            <div className="space-y-3">
              <div className="flex items-center text-[#ffedd5]/80">
                <span className="text-2xl mr-3">🚆</span> Nearest Station: Bandra
              </div>
              <div className="flex items-center text-[#ffedd5]/80">
                <span className="text-2xl mr-3">✈</span> Nearest Airport: Mumbai International Airport
              </div>
            </div>
          </div>
          <div className="info-card p-8 rounded-xl bg-black/30 backdrop-blur-sm border border-[#ff6600]/20 hover:-translate-y-2 hover:shadow-[0_15px_30px_-10px_rgba(255,102,0,0.4)] transition-all duration-500 flex flex-col justify-center">
            <div className="text-[0.6rem] md:text-xs font-black tracking-[0.3em] text-[#ff6600] uppercase mb-4">
              CONTACT & QUICK LINKS
            </div>
            <div className="space-y-4">
              <div className="text-[#ffedd5]/90 tracking-wide drop-shadow-sm text-lg flex items-center">
                <span className="text-xl mr-3 text-[#ff6600]">📧</span> info@sankraman.org
              </div>
              <div className="text-[#ffedd5]/90 tracking-wide drop-shadow-sm text-lg flex items-center">
                <span className="text-xl mr-3 text-[#ff6600]">📱</span> +91 98765 43210
              </div>
            </div>
          </div>
        </div>

      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60 pointer-events-none" />
    </div>
  );
}