'use client';

import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Primary Gradient Blob - Large */}
      <motion.div
        className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-gradient-to-br from-primary/15 via-accent/10 to-primary/20 blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary Gradient Blob - Medium */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-tl from-accent/12 via-primary/8 to-accent/15 blur-2xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Tertiary Gradient Blob - Small */}
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full bg-gradient-to-r from-primary/8 via-accent/12 to-primary/10 blur-2xl"
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6,
        }}
      />

      {/* Bottom Right Accent */}
      <motion.div
        className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-gradient-to-bl from-accent/8 via-primary/6 to-accent/10 blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 9,
        }}
      />

      {/* Floating Geometric Elements */}
      
      {/* Floating Square */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-4 h-4 bg-accent/20 rounded-sm blur-sm"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 180, 360],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Circle */}
      <motion.div
        className="absolute top-2/3 right-1/3 w-6 h-6 bg-primary/15 rounded-full blur-sm"
        animate={{
          y: [0, 25, 0],
          x: [0, 15, 0],
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Floating Diamond */}
      <motion.div
        className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-accent/25 rotate-45 blur-sm"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          rotate: [45, 225, 45],
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Additional Small Floating Elements */}
      <motion.div
        className="absolute top-1/2 right-1/4 w-2 h-8 bg-primary/10 rounded-full blur-sm"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
          delay: 7,
        }}
      />

      <motion.div
        className="absolute bottom-1/2 left-1/5 w-8 h-2 bg-accent/10 rounded-full blur-sm"
        animate={{
          rotate: [0, -360],
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "linear",
          delay: 5,
        }}
      />

      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      {/* Animated Noise Texture */}
      <motion.div
        className="absolute inset-0 opacity-[0.015]"
        animate={{
          opacity: [0.01, 0.02, 0.01],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
