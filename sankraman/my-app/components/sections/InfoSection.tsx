"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { animate, stagger } from "animejs";

export default function InfoSection() {
  const timelineDates = [
    { label: "REGISTRATION OPENS", value: "20 MARCH 2026", icon: "🌐" },
    { label: "SUBMISSION DEADLINE", value: "12 APRIL 2026", icon: "⏳" },
    { label: "SHORTLISTING", value: "WITHIN 2 DAYS", icon: "🎯" },
    { label: "FINAL EVENT", value: "FEBRUARY 2026", icon: "🏆" }
  ];

  const selectionSteps = [
    { round: "ROUND 1", mode: "ONLINE", desc: "PPT + demo video evaluated on innovation, clarity, and feasibility." },
    { round: "ROUND 2", mode: "OFFLINE", desc: "Top teams present working models at FR.CRCE." },
    { round: "FINAL ROUND", mode: "OFFLINE", desc: "Advanced judging and winner selection." }
  ];

  const judgingCriteria = [
    { title: "INNOVATION & ORIGINALITY", icon: "💡" },
    { title: "TECHNICAL DEPTH", icon: "⚙️" },
    { title: "FEASIBILITY & SCALABILITY", icon: "📈" },
    { title: "REAL-WORLD IMPACT", icon: "🌍" },
    { title: "PRESENTATION & CLARITY", icon: "🎤" }
  ];

  const timelineRef = useRef<HTMLDivElement>(null);
  const selectionRef = useRef<HTMLDivElement>(null);
  const criteriaRef = useRef<HTMLDivElement>(null);
  const hasAnimatedTimeline = useRef(false);
  const hasAnimatedSelection = useRef(false);
  const hasAnimatedCriteria = useRef(false);

  // Animate timeline cards
  useEffect(() => {
    const container = timelineRef.current;
    if (!container) return;

    const cards = Array.from(container.querySelectorAll<HTMLElement>(".timeline-card"));
    
    cards.forEach((card) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(50px) rotateX(15deg)";
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedTimeline.current) {
          hasAnimatedTimeline.current = true;
          observer.disconnect();

          animate(cards, {
            opacity: [0, 1],
            translateY: [50, 0],
            rotateX: [15, 0],
            delay: stagger(100),
            duration: 700,
            ease: "outExpo",
          });
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  // Animate selection cards
  useEffect(() => {
    const container = selectionRef.current;
    if (!container) return;

    const cards = Array.from(container.querySelectorAll<HTMLElement>(".selection-card"));
    
    cards.forEach((card, i) => {
      card.style.opacity = "0";
      card.style.transform = `translateX(${(i - 1) * 30}px) scale(0.9)`;
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedSelection.current) {
          hasAnimatedSelection.current = true;
          observer.disconnect();

          animate(cards, {
            opacity: [0, 1],
            translateX: 0,
            scale: [0.9, 1],
            delay: stagger(150),
            duration: 800,
            ease: "outBack",
          });
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  // Animate criteria cards
  useEffect(() => {
    const container = criteriaRef.current;
    if (!container) return;

    const cards = Array.from(container.querySelectorAll<HTMLElement>(".criteria-card"));
    
    cards.forEach((card) => {
      card.style.opacity = "0";
      card.style.transform = "scale(0.8)";
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedCriteria.current) {
          hasAnimatedCriteria.current = true;
          observer.disconnect();

          animate(cards, {
            opacity: [0, 1],
            scale: [0.8, 1],
            delay: stagger(80),
            duration: 600,
            ease: "outElastic(1, 0.6)",
          });
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  // Animation variants
  const cardHoverStyle = "hover:-translate-y-3 hover:scale-105 hover:shadow-[0_20px_40px_-15px_rgba(255,102,0,0.4)] transition-all duration-500 ease-out";

  return (
    <div id="info" className="relative min-h-screen py-24 overflow-hidden">

      {/* Dark Glassmorphism Background */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-xl" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-black/80" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 space-y-32">
        
        {/* --- TIMELINE --- */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <div className="text-[0.55rem] md:text-xs font-black tracking-[0.4em] text-[#ff6600] uppercase mb-4 mix-blend-screen opacity-90">
              IMPORTANT DATES
            </div>
            <h2 className="dune-heading text-[#ffedd5] drop-shadow-[0_0_20px_rgba(255,166,0,0.5)]" style={{ fontFamily: "'Dune Rise', sans-serif", fontSize: "clamp(1.5rem, 4vw, 2.8rem)", letterSpacing: "0.06em" }}>
              TIMELINE
            </h2>
          </div>
          
          <div ref={timelineRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timelineDates.map((date, idx) => (
              <div key={idx} className={`timeline-card relative p-8 rounded-xl bg-black/40 backdrop-blur-md border border-[#ff6600]/20 ${cardHoverStyle}`} style={{ perspective: "1000px" }}>
                <div className="text-4xl mb-4">{date.icon}</div>
                <div className="text-[#ffedd5]/80 tracking-wide text-xs mb-2 font-bold">{date.label}</div>
                <div className="text-[#ff6600] font-black tracking-widest text-lg">{date.value}</div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff6600]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* --- SELECTION PROCESS --- */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <div className="text-[0.55rem] md:text-xs font-black tracking-[0.4em] text-[#ff6600] uppercase mb-4 mix-blend-screen opacity-90">
              HOW IT WORKS
            </div>
            <h2 className="dune-heading text-[#ffedd5] drop-shadow-[0_0_20px_rgba(255,166,0,0.5)]" style={{ fontFamily: "'Dune Rise', sans-serif", fontSize: "clamp(1.3rem, 4vw, 2.5rem)", letterSpacing: "0.05em" }}>
              SELECTION PROCESS
            </h2>
          </div>

          <div ref={selectionRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {selectionSteps.map((step, idx) => (
              <div key={idx} className={`selection-card relative p-8 rounded-xl bg-black/40 backdrop-blur-md border border-[#ff6600]/20 ${cardHoverStyle} flex flex-col justify-between min-w-0 overflow-hidden`}>
                <div className="min-w-0">
                  <div className="flex justify-between items-start mb-6 flex-wrap gap-2">
                    <h3 className="dune-heading text-[#ffedd5]" style={{ fontFamily: "'Dune Rise', sans-serif", fontSize: "clamp(1rem, 2.5vw, 1.4rem)", letterSpacing: "0.04em" }}>
                      {step.round}
                    </h3>
                    <span className="text-[0.6rem] font-black tracking-[0.3em] text-[#ff6600] uppercase px-3 py-1 border border-[#ff6600]/30 rounded bg-[#ff6600]/10 shrink-0">
                      {step.mode}
                    </span>
                  </div>
                  <p className="text-[#ffedd5]/80 leading-relaxed tracking-wide text-sm md:text-base">
                    {step.desc}
                  </p>
                </div>
                {/* Visual Step Number Backdrop */}
                <div className="absolute -bottom-6 -right-2 text-9xl font-black text-[#ff6600]/5 select-none pointer-events-none" style={{ fontFamily: "'Dune Rise', sans-serif" }}>
                  {idx + 1}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* --- JUDGING CRITERIA --- */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <div className="text-[0.55rem] md:text-xs font-black tracking-[0.4em] text-[#ff6600] uppercase mb-4 mix-blend-screen opacity-90">
              EVALUATION
            </div>
            <h2 className="dune-heading text-[#ffedd5] drop-shadow-[0_0_20px_rgba(255,166,0,0.5)]" style={{ fontFamily: "'Dune Rise', sans-serif", fontSize: "clamp(1.3rem, 4vw, 2.5rem)", letterSpacing: "0.05em" }}>
              JUDGING CRITERIA
            </h2>
          </div>

          <div ref={criteriaRef} className="flex flex-wrap justify-center gap-6">
            {judgingCriteria.map((criteria, idx) => (
              <div key={idx} className={`criteria-card w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] relative p-6 rounded-xl bg-black/40 backdrop-blur-md border border-[#ff6600]/20 flex items-center ${cardHoverStyle}`}>
                <div className="text-3xl mr-4">{criteria.icon}</div>
                <div className="text-[#ffedd5]/90 font-bold tracking-wide text-sm md:text-base leading-snug">
                  {criteria.title}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none" />
    </div>
  );
}
