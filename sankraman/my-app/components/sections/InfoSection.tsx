"use client";

import { motion } from "framer-motion";

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
            <h2 className="text-3xl md:text-4xl tracking-widest text-[#ffedd5] drop-shadow-[0_0_20px_rgba(255,166,0,0.5)]" style={{ fontFamily: "'Dune Rise', sans-serif" }}>
              TIMELINE
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timelineDates.map((date, idx) => (
              <div key={idx} className={`relative p-8 rounded-xl bg-black/40 backdrop-blur-md border border-[#ff6600]/20 ${cardHoverStyle}`}>
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
            <h2 className="text-3xl md:text-4xl tracking-widest text-[#ffedd5] drop-shadow-[0_0_20px_rgba(255,166,0,0.5)]" style={{ fontFamily: "'Dune Rise', sans-serif" }}>
              SELECTION PROCESS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {selectionSteps.map((step, idx) => (
              <div key={idx} className={`relative p-8 rounded-xl bg-black/40 backdrop-blur-md border border-[#ff6600]/20 ${cardHoverStyle} flex flex-col justify-between`}>
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-black text-[#ffedd5] tracking-widest" style={{ fontFamily: "'Dune Rise', sans-serif" }}>
                      {step.round}
                    </h3>
                    <span className="text-[0.6rem] font-black tracking-[0.3em] text-[#ff6600] uppercase px-3 py-1 border border-[#ff6600]/30 rounded bg-[#ff6600]/10">
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
            <h2 className="text-3xl md:text-4xl tracking-widest text-[#ffedd5] drop-shadow-[0_0_20px_rgba(255,166,0,0.5)]" style={{ fontFamily: "'Dune Rise', sans-serif" }}>
              JUDGING CRITERIA
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {judgingCriteria.map((criteria, idx) => (
              <div key={idx} className={`w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] relative p-6 rounded-xl bg-black/40 backdrop-blur-md border border-[#ff6600]/20 flex items-center ${cardHoverStyle}`}>
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
