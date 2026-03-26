"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrambleText from "@/components/ui/ScrambleText";

const timelineEvents = [
  {
    time: "ROUND 1",
    title: "ONLINE SUBMISSION",
    desc: "Submit a project PPT (max 7 slides) and a demo video (max 4 minutes). Top teams will be shortlisted for the next phase.",
  },
  {
    time: "ROUND 2",
    title: "ON-CAMPUS PRESENTATION",
    desc: "Present your project with a working model at FR.CRCE. 7 min presentation + 3 min Q&A.",
  },
  {
    time: "FINAL",
    title: "EVALUATION PHASE",
    desc: "Finalists present before expert judges for advanced evaluation. Winners selected based on overall performance.",
  },
];

export default function JourneySection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div
      id="journey"
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
    >
      {/* Dark Glassmorphism Background */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-lg" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/70" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 w-full"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-xs font-black tracking-[0.4em] text-[#ff6600] uppercase mb-8 mix-blend-screen opacity-90">
            EVENT PHASES
          </div>

          <ScrambleText
            text="THE PRAKALP JOURNEY"
            tag="h2"
            className="dune-heading text-[#ffedd5] drop-shadow-[0_0_30px_rgba(255,166,0,0.6)]"
            style={{
              fontFamily: "'Dune Rise', sans-serif",
              fontSize: "clamp(1.4rem, 5vw, 3rem)",
              letterSpacing: "0.07em",
            }}
            threshold={0.4}
          />
        </div>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {/* Central line background */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-[#ff6600]/20 -translate-x-1/2 rounded-full" />

          {/* Active animated progress line */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#ff4400] via-[#ff6600] to-[#ffaa00] -translate-x-1/2 origin-top rounded-full z-0"
            aria-hidden
          />

          {/* Timeline Events */}
          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Card */}
                <div
                  className={`w-full pl-14 md:w-1/2 ${
                    index % 2 === 0
                      ? "md:pr-12 md:pl-0 md:text-right"
                      : "md:pl-12"
                  }`}
                >
                  <div className="group p-6 rounded-xl bg-black/30 backdrop-blur-sm border border-[#ff6600]/20 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_15px_30px_-10px_rgba(255,102,0,0.4)] transition-all duration-500 min-w-0 overflow-hidden">
                    {/* Round label */}
                    <div
                      className="font-black tracking-[0.3em] text-[#ff6600] uppercase mb-2"
                      style={{ fontSize: "clamp(0.5rem, 1.3vw, 0.7rem)" }}
                    >
                      {event.time}
                    </div>

                    {/* Event title — clamped so long titles don't break out */}
                    <h3
                      className="dune-heading text-[#ffedd5] mb-2 drop-shadow-sm"
                      style={{
                        fontFamily: "'Dune Rise', sans-serif",
                        fontSize: "clamp(1rem, 2.8vw, 1.6rem)",
                        letterSpacing: "0.05em",
                        overflowWrap: "break-word",
                        wordBreak: "break-word",
                      }}
                    >
                      {event.title}
                    </h3>

                    <p className="text-[#ffedd5]/90 tracking-wide drop-shadow-sm text-sm md:text-base leading-relaxed">
                      {event.desc}
                    </p>

                    {/* Hover glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ff6600]/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl" />
                  </div>
                </div>

                {/* Central dot with CSS pulse ring */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                  {/* Outer pulse ring */}
                  <span
                    className="absolute inset-0 rounded-full bg-[#ff6600]/40 timeline-dot"
                    style={{ margin: "-4px" }}
                  />
                  {/* Inner solid dot */}
                  <span className="relative block w-4 h-4 bg-[#ff6600] rounded-full border-2 border-black drop-shadow-[0_0_12px_rgba(255,102,0,0.9)]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/60 pointer-events-none" />
    </div>
  );
}
