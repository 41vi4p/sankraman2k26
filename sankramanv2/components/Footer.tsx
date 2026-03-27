"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaInstagram } from "react-icons/fa";
import Image from "next/image";

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
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-wider md:tracking-widest text-[#ffedd5] mb-4 drop-shadow-[0_0_20px_rgba(255,166,0,0.6)]"
            style={{ fontFamily: "'Dune Rise', sans-serif" }}
          >
            SANKRAMAN
          </h3>
          <p className="text-[#ff6600] text-sm lg:text-base xl:text-lg tracking-[0.3em] uppercase">
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
                <div className="flex justify-center mb-3">
                  <Image
                    src="/logos/ieee.png"
                    alt="IEEE"
                    width={80}
                    height={60}
                    className="h-12 sm:h-16 lg:h-20 xl:h-24 w-auto"
                  />
                </div>
                
                {/* Instagram with icon */}
                <a href="https://instagram.com/ieee_crce" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center justify-center gap-2 mb-2">
                  <FaInstagram size={18} className="text-[#ff6600]" />
                  <span className="text-[0.6rem] sm:text-[0.7rem] lg:text-sm xl:text-base text-[#ffedd5]/80 hover:text-[#ff6600] transition-colors">
                    @ieee_crce
                  </span>
                </a>
                
                {/* Email with icon */}
                <div className="flex items-center justify-center gap-2">
                  <FaEnvelope size={12} className="text-[#ff6600]" />
                  <a href="mailto:ieeece.24@gmail.com" className="text-[0.6rem] sm:text-[0.7rem] lg:text-sm xl:text-base text-[#ffedd5]/80 hover:text-[#ff6600] transition-colors">
                    ieeece.24@gmail.com
                  </a>
                </div>
              </div>

              {/* WIE Contact */}
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <Image
                    src="/logos/wie.png"
                    alt="WIE"
                    width={80}
                    height={60}
                    className="h-12 sm:h-16 lg:h-20 xl:h-24 w-auto"
                  />
                </div>
                
                {/* Instagram with icon */}
                <a href="https://instagram.com/wie_crce" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center justify-center gap-2 mb-2">
                  <FaInstagram size={18} className="text-[#ff6600]" />
                  <span className="text-[0.6rem] sm:text-[0.7rem] lg:text-sm xl:text-base text-[#ffedd5]/80 hover:text-[#ff6600] transition-colors">
                    @wie_crce
                  </span>
                </a>
                
                {/* Email with icon */}
                <div className="flex items-center justify-center gap-2">
                  <FaEnvelope size={12} className="text-[#ff6600]" />
                  <a href="mailto:wieieee.21@gmail.com" className="text-[0.6rem] sm:text-[0.7rem] lg:text-sm xl:text-base text-[#ffedd5]/80 hover:text-[#ff6600] transition-colors">
                    wieieee.21@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom: PROJECT CELL full width */}
            <div className="text-center pt-4">
              <div className="flex justify-center mb-3">
                <Image
                  src="/logos/project_cell.png"
                  alt="Project Cell"
                  width={120}
                  height={60}
                  className="h-12 sm:h-16 lg:h-20 xl:h-24 w-auto"
                />
              </div>
              
              {/* Instagram with icon */}
              <a href="https://instagram.com/project_cell.crce" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center justify-center gap-2 mb-2">
                <FaInstagram size={18} className="text-[#ff6600]" />
                <span className="text-[0.6rem] sm:text-[0.7rem] lg:text-sm xl:text-base text-[#ffedd5]/80 hover:text-[#ff6600] transition-colors">
                  @project_cell.crce
                </span>
              </a>
              
              {/* Email with icon */}
              <div className="flex items-center justify-center gap-2">
                <FaEnvelope size={12} className="text-[#ff6600]" />
                <a href="mailto:projectcellcrce2024@gmail.com" className="text-[0.6rem] sm:text-[0.7rem] lg:text-sm xl:text-base text-[#ffedd5]/80 hover:text-[#ff6600] transition-colors">
                  projectcellcrce2024@gmail.com
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
          <p className="text-xs lg:text-sm xl:text-base text-[#ffedd5]/70 tracking-[0.1em]">Prakalp 4.0 | Sankraman</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}