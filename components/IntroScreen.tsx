"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

export default function IntroScreen({
  onEnter,
  isVisible,
}: {
  onEnter: () => void;
  isVisible: boolean;
}) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      onEnter(); // show main content
    }, 600); // faster: reduce from 1200ms to 600ms
  };

  if (!isVisible) return null; // remove from DOM after transition

  return (
    <AnimatePresence>
      {!clicked && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-gradient-to-br from-purple-900 via-purple-950 to-purple-500 backdrop-blur-md flex flex-col items-center justify-center text-center px-4"
        >
          {/* Animated Circular Button */}
          <motion.button
            onClick={handleClick}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            exit={{ scale: 20, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="cursor-pointer rounded-full overflow-hidden border-4 border-white w-52 h-52 shadow-2xl mt-6 mb-6"
          >
            <img
              src="/introPic.jpeg"
              alt="Enter"
              className="w-full h-full object-cover rounded-full"
            />
          </motion.button>

          {/* Bouncing Animated Text */}
          <TextGenerateEffect
            className="mt-8 font-semibold text-xl md:text-2xl tracking-wide text-white animate-bounce"
            words="Hi, I'm Supriti Basak, a web developer and UI/UX designer."
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
