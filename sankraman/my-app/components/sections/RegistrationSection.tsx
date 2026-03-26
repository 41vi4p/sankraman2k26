"use client";

import { motion } from "framer-motion";

export default function RegistrationSection() {
  return (
    <div id="registration" className="relative min-h-[80vh] flex items-center justify-center py-20">

      {/* Dark Glassmorphism Background */}
      <div className="absolute inset-0 bg-black/45 backdrop-blur-xl" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/65 via-black/35 to-black/65" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-5xl mx-auto px-8 md:px-12 text-center"
      >
        {/* Section Header */}
        <div className="text-[0.55rem] md:text-xs font-black tracking-[0.4em] text-[#ff6600] uppercase mb-8 mix-blend-screen opacity-90">
          JOIN THE TRANSITION
        </div>

        <h2
          className="text-[4vw] md:text-[3vw] lg:text-[3.5vw] tracking-widest text-[#ffedd5] drop-shadow-[0_0_30px_rgba(255,166,0,0.6)] mb-8"
          style={{ fontFamily: "'Dune Rise', sans-serif" }}
        >
          REGISTER FOR PRAKALP 4.0
        </h2>

        <p className="text-xl md:text-2xl text-[#ffedd5]/90 leading-relaxed tracking-wide mb-12 drop-shadow-sm max-w-3xl mx-auto">
          Showcase your innovation on a national stage and compete with the best minds.
        </p>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-xl bg-black/30 backdrop-blur-sm border border-[#ff6600]/20 hover:-translate-y-2 hover:scale-105 hover:shadow-[0_15px_30px_-10px_rgba(255,102,0,0.4)] transition-all duration-500">
            <div className="text-[0.6rem] md:text-xs font-black tracking-[0.3em] text-[#ff6600] uppercase mb-3">
              ELIGIBILITY
            </div>
            <div className="text-[#ffedd5]/90 tracking-wide text-sm drop-shadow-sm">
              Open to all engineering students across India
            </div>
          </div>
          <div className="p-6 rounded-xl bg-black/30 backdrop-blur-sm border border-[#ff6600]/20 hover:-translate-y-2 hover:scale-105 hover:shadow-[0_15px_30px_-10px_rgba(255,102,0,0.4)] transition-all duration-500">
            <div className="text-[0.6rem] md:text-xs font-black tracking-[0.3em] text-[#ff6600] uppercase mb-3">
              TEAM DETAILS
            </div>
            <div className="text-[#ffedd5]/90 tracking-wide text-sm drop-shadow-sm">
              2 to 4 members per team
            </div>
          </div>
          <div className="p-6 rounded-xl bg-black/30 backdrop-blur-sm border border-[#ff6600]/20 hover:-translate-y-2 hover:scale-105 hover:shadow-[0_15px_30px_-10px_rgba(255,102,0,0.4)] transition-all duration-500">
            <div className="text-[0.6rem] md:text-xs font-black tracking-[0.3em] text-[#ff6600] uppercase mb-3">
              REGISTRATION FEE
            </div>
            <div className="text-[#ffedd5]/90 tracking-wide text-sm drop-shadow-sm">
              ₹600 per team
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div>
          <button className="group relative border-2 border-[#ff6600] bg-black/30 backdrop-blur-sm px-12 py-4 rounded-lg overflow-hidden transition-all duration-500 hover:border-[#ffaa00] hover:bg-black/40">
            <span
              className="relative z-10 text-xl font-black tracking-[0.3em] text-[#ff6600] uppercase group-hover:text-[#1a0a00] transition-colors duration-500 drop-shadow-sm"
              style={{ fontFamily: "'Dune Rise', sans-serif" }}
            >
              REGISTER NOW
            </span>

            {/* Sliding background */}
            <div className="absolute inset-0 bg-[#ff6600] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
          </button>
        </div>

      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60 pointer-events-none" />
    </div>
  );
}
