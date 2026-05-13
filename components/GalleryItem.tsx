"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function GalleryItem({ src, className, label, onClick }: any) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div ref={container} className={`group relative w-full overflow-hidden ${className}`} onClick={onClick}>
      {/* Animasi Muncul (Reveal) */}
      <motion.div 
        initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
        whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-full relative"
      >
        <motion.div style={{ y }} className="absolute inset-0 h-[130%] top-[-15%] w-full">
          <Image 
            src={src} 
            alt="Wedding" 
            fill 
            className="object-cover transition-transform duration-1000 group-hover:scale-110 brightness-[0.85] group-hover:brightness-100" 
          />
        </motion.div>

        {/* Overlay Informasi saat Hover */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            className="text-white"
          >
            <span className="block h-px w-12 bg-white mb-4" />
            <p className="font-serif italic text-2xl">{label}</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}