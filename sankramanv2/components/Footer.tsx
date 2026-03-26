"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      className="relative py-20 px-8 md:px-12 border-t border-[#ff6600]/20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Dark glassmorphism background matching the theme */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xl" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Brand and main info */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3
            className="text-2xl sm:text-3xl md:text-4xl tracking-wider md:tracking-widest text-[#ffedd5] mb-4 drop-shadow-[0_0_20px_rgba(255,166,0,0.6)]"
            style={{ fontFamily: "'Dune Rise', sans-serif" }}
          >
            SANKRAMAN
          </h3>
          <p className="text-[#ff6600] text-sm tracking-[0.3em] uppercase">
            Engineering the Transition
          </p>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <div className="space-y-8">
            {/* Top row: IEEE and WiE side by side */}
            <div className="grid grid-cols-2 gap-2 sm:gap-6">
              {/* IEEE Contact */}
              <div className="text-center">
                <div className="text-[0.7rem] font-black tracking-[0.2em] text-[#ff6600] uppercase mb-3">IEEE</div>
                
                {/* Email with icon */}
                <div className="flex items-center justify-center gap-2 mb-2">
                  <FaEnvelope size={12} className="text-[#ff6600]" />
                  <a href="mailto:ieeece.24@gmail.com" className="text-[0.6rem] sm:text-[0.7rem] text-[#ffedd5]/80 hover:text-[#ff6600] transition-colors">
                    ieeece.24@gmail.com
                  </a>
                </div>
                
                {/* Instagram with icon */}
                <div className="flex items-center justify-center gap-2">
                  <FaInstagram size={12} className="text-[#ff6600]" />
                  <a href="https://instagram.com/ieee_crce" target="_blank" rel="noopener noreferrer" className="text-[0.6rem] sm:text-[0.7rem] text-[#ffedd5]/80 hover:text-[#ff6600] transition-colors">
                    @ieee_crce
                  </a>
                </div>
              </div>

              {/* WIE Contact */}
              <div className="text-center">
                <div className="text-[0.7rem] font-black tracking-[0.2em] text-[#ff6600] uppercase mb-3">WIE</div>
                
                {/* Email with icon */}
                <div className="flex items-center justify-center gap-2 mb-2">
                  <FaEnvelope size={12} className="text-[#ff6600]" />
                  <a href="mailto:wieieee.21@gmail.com" className="text-[0.6rem] sm:text-[0.7rem] text-[#ffedd5]/80 hover:text-[#ff6600] transition-colors">
                    wieieee.21@gmail.com
                  </a>
                </div>
                
                {/* Instagram with icon */}
                <div className="flex items-center justify-center gap-2">
                  <FaInstagram size={12} className="text-[#ff6600]" />
                  <a href="https://instagram.com/wie_crce" target="_blank" rel="noopener noreferrer" className="text-[0.6rem] sm:text-[0.7rem] text-[#ffedd5]/80 hover:text-[#ff6600] transition-colors">
                    @wie_crce
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom: PROJECT CELL full width */}
            <div className="text-center pt-4">
              <div className="text-[0.7rem] font-black tracking-[0.2em] text-[#ff6600] uppercase mb-3">PROJECT CELL</div>
              
              {/* Email with icon */}
              <div className="flex items-center justify-center gap-2 mb-2">
                <FaEnvelope size={12} className="text-[#ff6600]" />
                <a href="mailto:projectcellcrce2024@gmail.com" className="text-[0.6rem] sm:text-[0.7rem] text-[#ffedd5]/80 hover:text-[#ff6600] transition-colors">
                  projectcellcrce2024@gmail.com
                </a>
              </div>
              
              {/* Instagram with icon */}
              <div className="flex items-center justify-center gap-2">
                <FaInstagram size={12} className="text-[#ff6600]" />
                <a href="https://instagram.com/project_cell.crce" target="_blank" rel="noopener noreferrer" className="text-[0.6rem] sm:text-[0.7rem] text-[#ffedd5]/80 hover:text-[#ff6600] transition-colors">
                  @project_cell.crce
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer text */}
        <motion.div
          className="text-center border-t border-[#ff6600]/10 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-xs text-[#ffedd5]/70 tracking-[0.1em]">Prakalp 4.0 | Sankraman</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}