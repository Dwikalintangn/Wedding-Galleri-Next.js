"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

interface HorizontalScrollProps {
  row1: string[];
  row2: string[];
  onClick: (src: string) => void;
}

export default function HorizontalScroll({ row1, row2, onClick }: HorizontalScrollProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"] 
  });

  
  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-200%", "0%"]);

  return (
    <section ref={targetRef} className="relative h-[800vh] bg-[#0f0f0f]">
      <div className="sticky top-0 h-screen flex flex-col justify-center gap-12 overflow-hidden">
        
        {/* BARIS 1 */}
        <motion.div style={{ x: x1 }} className="flex gap-10 px-20">
          {row1.map((src, i) => (
            <div 
              key={i} 
              className="relative h-[35vh] w-[80vw] md:w-[50vw] shrink-0 cursor-zoom-in"
              onClick={() => onClick(src)}
            >
              <img src={src} className="h-full w-full object-cover shadow-2xl" alt="Wedding" />
            </div>
          ))}
        </motion.div>

        {/* BARIS 2 */}
        <motion.div style={{ x: x2 }} className="flex gap-10 px-20">
          {row2.map((src, i) => (
            <div 
              key={i} 
              className="relative h-[35vh] w-[80vw] md:w-[50vw] shrink-0 cursor-zoom-in"
              onClick={() => onClick(src)}
            >
              <img src={src} className="h-full w-full object-cover shadow-2xl" alt="Wedding" />
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}