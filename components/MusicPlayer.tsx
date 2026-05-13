"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-10 right-10 z-100">
      <audio ref={audioRef} loop>
        <source src="/audio/wedding-song-2.mp3" type="audio/mpeg" />
      </audio>

      <motion.button
        onClick={togglePlay}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-12 h-12 bg-[#f4f1ea] rounded-full flex items-center justify-center shadow-2xl overflow-hidden"
      >
        {/* Ikon Animasi Gelombang Suara */}
        <div className="flex gap-1 items-end h-4">
          {[1, 2, 3, 4].map((i) => (
            <motion.span
              key={i}
              animate={isPlaying ? { height: [4, 16, 4] } : { height: 4 }}
              transition={{ repeat: Infinity, duration: 0.5, delay: i * 0.1 }}
              className="w-1 bg-[#0f0f0f] rounded-full"
            />
          ))}
        </div>
      </motion.button>
      
      {/* Label Petunjuk Kecil */}
      {!isPlaying && (
        <motion.span 
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute right-16 top-3 text-[10px] uppercase tracking-widest text-[#f4f1ea] whitespace-nowrap"
        >
          Play Music
        </motion.span>
      )}
    </div>
  );
}