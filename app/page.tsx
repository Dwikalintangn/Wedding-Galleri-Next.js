"use client";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import GalleryItem from "../components/GalleryItem";
import Lightbox from "../components/Lightbox";
import HorizontalScroll from "@/components/HorizontalScroll";

export default function Home() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Efek zoom dan fade out khusus untuk Hero
  const opacity = useTransform(heroScroll, [0, 1], [1, 0]);
  const scale = useTransform(heroScroll, [0, 1], [1, 1.5]);
  const textY = useTransform(heroScroll, [0, 1], [0, 200]);

  return (
    <main className="bg-[#0f0f0f] text-[#f4f1ea]">
      {/* SECTION 1: HERO - Sekarang kembali menggunakan Ref */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <motion.div style={{ scale, opacity }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src="/images/5.webp"
            className="w-full h-full object-cover"
            alt="Hero"
          />
        </motion.div>

        <motion.div
          style={{ y: textY, opacity }}
          className="relative z-20 text-center"
        >
          <span className="uppercase tracking-[0.5em] text-sm mb-4 block opacity-70">
            The Wedding of
          </span>
          <h1 className="text-[10vw] md:text-[8vw] font-serif leading-none italic">
            Wiwin & Niken
          </h1>
        </motion.div>
      </section>

      {/* SECTION 2: THE ARTISTIC MASONRY */}
      <section className="relative z-30 px-6 py-40 max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-y-24 md:gap-y-40 gap-x-6 md:gap-x-12">
          {/* Item 1: Besar di Kiri */}
          <div className="col-span-12 md:col-span-7">
            <GalleryItem
              src="/images/1.webp"
              label="Pure Elegance"
              className="h-[60vh] md:h-[85vh]"
              onClick={() => setSelectedImg("/images/1.webp")}
            />
          </div>

          {/* Item 2: Kecil di Kanan (Floating) */}
          <div className="col-span-12 md:col-span-4 md:col-start-9 md:mt-32">
            <GalleryItem
              src="/images/2.webp"
              label="Quiet Moments"
              className="h-[40vh] md:h-[55vh]"
              onClick={() => setSelectedImg("/images/2.webp")}
            />
          </div>

          {/* Item 3: Sedang di Kanan (Naik sedikit) */}
          <div className="col-span-12 md:col-span-5 md:col-start-8 md:-mt-20">
            <GalleryItem
              src="/images/3.webp"
              label="The Vow"
              className="h-[50vh] md:h-[70vh]"
              onClick={() => setSelectedImg("/images/3.webp")}
            />
          </div>

          {/* Item 4: Sedang di Kiri */}
          <div className="col-span-12 md:col-span-6 md:mt-10">
            <GalleryItem
              src="/images/4.webp"
              label="Eternal Love"
              className="h-[50vh] md:h-[65vh]"
              onClick={() => setSelectedImg("/images/4.webp")}
            />
          </div>

          {/* Quote Tengah: Buddhis Wisdom */}
          <div className="col-span-12 py-32 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-4xl mx-auto px-4"
            >
              <span className="text-xs uppercase tracking-[0.4em] opacity-50 mb-6 block">
                Saddhamma Blessing
              </span>
              <p className="text-3xl md:text-5xl font-serif italic leading-relaxed text-[#f4f1ea]">
                "Saddha, Sila, Caga, Panna"
              </p>
              <p className="mt-8 text-lg md:text-xl opacity-70 font-light italic leading-loose">
                "Memiliki keyakinan, kemoralan, kemurahan hati, dan
                kebijaksanaan yang sejalan adalah kunci bagi dua jiwa untuk
                berjalan berdampingan dalam harmoni abadi."
              </p>
              <div className="mt-10 w-12 h-px bg-[#f4f1ea] mx-auto opacity-30" />
            </motion.div>
          </div>

          {/* Item 5: Portrait di Kiri (Agak ke tengah) */}
          <div className="col-span-12 md:col-span-5 md:col-start-2">
            <GalleryItem
              src="/images/2.webp"
              label="Joyful Hearts"
              className="h-[60vh] md:h-[80vh]"
              onClick={() => setSelectedImg("/images/2.webp")}
            />
          </div>

          {/* Item 6: Landscape Lebar di Kanan */}
          <div className="col-span-12 md:col-span-6 md:mt-40">
            <GalleryItem
              src="/images/5.webp"
              label="Together Forever"
              className="h-[40vh] md:h-[55vh]"
              onClick={() => setSelectedImg("/images/5.webp")}
            />
          </div>
        </div>
      </section>

      {/* SECTION 3: HORIZONTAL SCROLL - Tetap mengunci layar */}
      <div className="bg-[#0f0f0f]">
        <div className="px-10 pt-32 pb-10 text-center">
          <h2 className="text-6xl font-serif italic">Our Chapters</h2>
        </div>
        <HorizontalScroll
          onClick={(src: string) => setSelectedImg(src)}
          row1={[
            "/images/1.webp",
            "/images/2.webp",
            "/images/3.webp",
            "/images/4.webp",
            "/images/5.webp",
          ]}
          row2={[
            "/images/4.webp",
            "/images/5.webp",
            "/images/1.webp",
            "/images/2.webp",
            "/images/3.webp",
          ]}
        />
      </div>

      {/* FOOTER */}
      <footer className="h-screen flex flex-col items-center justify-center text-center px-4 bg-[#0f0f0f]">
        <h3 className="text-[12vw] md:text-8xl font-serif italic leading-tight text-[#f4f1ea]">
          Wiwin & Niken
        </h3>

        <div className="mt-8 flex flex-col items-center gap-2">
          <div className="w-12 h-px bg-[#f4f1ea] opacity-30 mb-4" />
          <p className="tracking-[0.5em] uppercase text-xs md:text-sm opacity-60">
            Save the Date
          </p>
          <p className="tracking-[0.2em] text-lg md:text-xl font-light">
            27 — 07 — 2026
          </p>
        </div>
      </footer>

      <Lightbox selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
    </main>
  );
}
