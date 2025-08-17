'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Zap } from 'lucide-react';

const features = [
  "POS Systems",
  "Management Platforms", 
  "Web & Desktop Applications"
];

const trustIndicators = [
  "6+ Years Experience",
  "50+ Projects Delivered",
  "24/7 Support"
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-16 pt-24 md:pb-24 md:pt-32 bg-gradient-to-b from-background to-secondary/20">
      {/* Subtle background pattern */}
      <div 
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23663399' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="container mx-auto px-4">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className="inline-flex items-center rounded-full bg-accent/10 border border-accent/20 px-4 py-2 text-sm font-medium text-accent">
              <Zap className="mr-2 h-4 w-4" />
              Trusted by 50+ Businesses
            </span>
          </motion.div>

          <motion.h1
            className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl text-foreground"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          >
            Empowering Businesses Through
            <br />
            <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent font-extrabold">
              Smart Software Solutions
            </span>
          </motion.h1>

          <motion.p
            className="mx-auto mb-8 max-w-3xl text-xl md:text-2xl text-muted-foreground font-light leading-relaxed"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            {features.map((feature, i) => (
              <span key={feature} className="inline-block">
                {i > 0 && <span className="mx-3 text-accent/70">•</span>}
                <span className="font-medium">{feature}</span>
              </span>
            ))}
          </motion.p>

          <motion.div
            className="flex flex-col items-center justify-center gap-4 sm:flex-row mb-12"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          >
            <Button 
              asChild 
              size="lg" 
              className="group shadow-lg hover:shadow-xl transition-all duration-200 px-8 py-6 text-lg bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
            >
              <Link href="/contact" className="flex items-center">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-2 border-accent/30 hover:border-accent hover:bg-accent/5 hover:text-accent transition-all duration-200 px-8 py-6 text-lg"
            >
              <Link href="/portfolio">
                View Our Work
              </Link>
            </Button>
          </motion.div>

          {/* Trust indicators with green accents */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
          >
            {trustIndicators.map((indicator, i) => (
              <div key={indicator} className="flex items-center">
                <CheckCircle className="mr-2 h-4 w-4 text-accent" />
                <span className="font-medium">{indicator}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Enhanced geometric decoration with green accents */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-1/4 right-1/4 -z-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-1/4 left-1/4 -z-10 h-48 w-48 rounded-full bg-accent/10 blur-2xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 0.5, ease: 'easeInOut' }}
      />
      
      {/* Additional subtle green glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-20 h-96 w-96 rounded-full bg-accent/5 blur-3xl"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 0.7 }}
        transition={{ duration: 3, ease: 'easeInOut' }}
      />
    </section>
  );
}
