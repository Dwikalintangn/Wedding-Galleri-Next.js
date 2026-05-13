"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function Lightbox({ selectedImg, setSelectedImg }: any) {
  return (
    <AnimatePresence>
      {selectedImg && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-999 flex items-center justify-center bg-black/90 p-4 cursor-zoom-out"
          onClick={() => setSelectedImg(null)}
        >
          <motion.img 
            initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }}
            src={selectedImg} className="max-h-full max-w-full rounded-lg object-contain"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}