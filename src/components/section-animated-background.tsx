'use client';

import { motion } from 'framer-motion';

interface SectionAnimatedBackgroundProps {
  variant?: 'hero' | 'intro' | 'services' | 'testimonials' | 'why-choose';
}

export default function SectionAnimatedBackground({ variant = 'hero' }: SectionAnimatedBackgroundProps) {
  const getAnimationConfig = () => {
    switch (variant) {
      case 'hero':
        return {
          primary: { colors: 'from-primary/20 to-accent/15', size: 'w-96 h-96' },
          secondary: { colors: 'from-accent/15 to-primary/10', size: 'w-80 h-80' },
        };
      case 'services':
        return {
          primary: { colors: 'from-accent/15 to-primary/15', size: 'w-72 h-72' },
          secondary: { colors: 'from-primary/10 to-accent/12', size: 'w-64 h-64' },
        };
      case 'testimonials':
        return {
          primary: { colors: 'from-primary/12 to-accent/18', size: 'w-88 h-88' },
          secondary: { colors: 'from-accent/12 to-primary/8', size: 'w-72 h-72' },
        };
      default:
        return {
          primary: { colors: 'from-primary/10 to-accent/10', size: 'w-80 h-80' },
          secondary: { colors: 'from-accent/8 to-primary/8', size: 'w-64 h-64' },
        };
    }
  };

  const config = getAnimationConfig();

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <motion.div
        className={`absolute top-10 right-10 ${config.primary.size} rounded-full bg-gradient-to-br ${config.primary.colors} blur-3xl`}
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className={`absolute bottom-10 left-10 ${config.secondary.size} rounded-full bg-gradient-to-tl ${config.secondary.colors} blur-2xl`}
        animate={{
          x: [0, -40, 0],
          y: [0, 20, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />
    </div>
  );
}
