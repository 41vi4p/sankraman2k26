"use client";

import { motion } from "framer-motion";

export default function PrizesSection() {
  const prizes = [
    { title: "WINNER", amount: "₹15,000", icon: "🥇", desc: "For the top team showcasing unparalleled innovation." },
    { title: "RUNNER-UP", amount: "₹10,000", icon: "🥈", desc: "For the team with outstanding technical execution." },
    { title: "PARTICIPANTS", amount: "CERTIFICATES", icon: "🎖", desc: "For all shortlisted teams who present at the finals." }
  ];

  return (
    <div id="prizes" className="relative min-h-screen flex items-center justify-center py-20">

      {/* Dark Glassmorphism Background */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-black/80" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-6xl mx-auto px-8 md:px-12"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-[0.55rem] md:text-xs font-black tracking-[0.4em] text-[#ff6600] uppercase mb-8 mix-blend-screen opacity-90">
            COMPETE. INNOVATE. WIN.
          </div>

          <h2
            className="text-[4vw] md:text-[3vw] lg:text-[3.5vw] tracking-widest text-[#ffedd5] drop-shadow-[0_0_30px_rgba(255,166,0,0.6)] mb-6"
            style={{ fontFamily: "'Dune Rise', sans-serif" }}
          >
            PRIZES & REWARDS
          </h2>

          <p className="text-lg md:text-xl text-[#ffedd5]/90 leading-relaxed tracking-wide max-w-2xl mx-auto drop-shadow-sm">
            PRAKALP rewards innovation and technical excellence across both hardware and software categories.
          </p>
        </div>

        {/* Prizes Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {prizes.map((prize, index) => (
            <div key={index} className="group relative">
              <div className="relative border border-[#ff6600]/30 bg-black/50 backdrop-blur-md p-10 rounded-xl hover:-translate-y-3 hover:scale-105 hover:shadow-[0_20px_40px_-15px_rgba(255,102,0,0.5)] transition-all duration-500 text-center">

                {/* Corner accents */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#ff6600] opacity-70" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#ff6600] opacity-70" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#ff6600] opacity-70" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#ff6600] opacity-70" />

                <div className="text-5xl mb-6">{prize.icon}</div>

                <div className="text-[0.65rem] md:text-xs font-black tracking-[0.3em] text-[#ff6600] uppercase mb-3 drop-shadow-sm">
                  {prize.title}
                </div>

                <h3
                  className="text-2xl md:text-3xl text-[#ffedd5] mb-4 tracking-wider group-hover:text-[#ffaa00] transition-colors drop-shadow-[0_0_20px_rgba(255,102,0,0.5)]"
                  style={{ fontFamily: "'Dune Rise', sans-serif" }}
                >
                  {prize.amount}
                </h3>

                <p className="text-[#ffedd5]/80 text-sm leading-relaxed tracking-wide">
                  {prize.desc}
                </p>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff6600]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-lg" />
              </div>
            </div>
          ))}
        </div>

      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50 pointer-events-none" />
    </div>
  );
}
