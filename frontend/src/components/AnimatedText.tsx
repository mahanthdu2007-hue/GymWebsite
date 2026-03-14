'use client';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function AnimatedText({ text, className = "", delay = 0 }: AnimatedTextProps) {
  // Split the text into words to animate them sequentially
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      } as any,
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      } as any,
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, index) => {
        // Special highlighting for the word "Chance"
        if (word === "Chance" || word === "Chance!") {
            return (
                <motion.span
                    variants={child}
                    style={{ marginRight: "0.25em" }}
                    key={index}
                    className="text-yellow-500"
                >
                    {word}
                </motion.span>
            )
        }
        return (
            <motion.span
            variants={child}
            style={{ marginRight: "0.25em" }}
            key={index}
            >
            {word}
            </motion.span>
        )
      })}
    </motion.div>
  );
}
