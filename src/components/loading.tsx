'use client';

import { motion } from 'framer-motion';
import Logo from '@/components/logo';
import { useEffect, useState } from 'react';

interface LoadingProps {
  onLoadingComplete: () => void;
}

export function Loading({ onLoadingComplete }: LoadingProps) {
  const [activeSquares, setActiveSquares] = useState<number[]>([]);

  useEffect(() => {
    // Animate grid squares
    const interval = setInterval(() => {
      const randomSquares = Array.from({ length: 3 }, () => 
        Math.floor(Math.random() * 25)
      );
      setActiveSquares(randomSquares);
    }, 300);

    const timer = setTimeout(() => {
      clearInterval(interval);
      onLoadingComplete();
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-background">
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative">
          {/* Background Grid */}
          <div className="absolute -inset-32 grid grid-cols-5 gap-2 opacity-10">
            {[...Array(25)].map((_, i) => (
              <motion.div
                key={i}
                className="w-8 h-8 border border-primary/20"
                animate={{
                  backgroundColor: activeSquares.includes(i) 
                    ? 'rgb(139 92 246 / 0.3)' 
                    : 'transparent'
                }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>

          {/* Main Content */}
          <div className="relative z-10 text-center space-y-8">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Logo height={100} />
            </motion.div>

            {/* Company Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-3xl font-bold text-foreground">
                AurionX Solutions
              </h1>
              <p className="text-muted-foreground mt-2">
                Innovation in Progress
              </p>
            </motion.div>

            {/* Loading Squares */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center space-x-2"
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-4 h-4 bg-accent"
                  animate={{
                    rotate: [0, 90, 180, 270, 360],
                    scale: [1, 0.8, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "linear",
                  }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
