'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  Target, 
  Users, 
  Shield, 
  Zap, 
  Award, 
  Clock,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

const advantages = [
  {
    icon: Target,
    title: 'Custom Development',
    description: 'Solutions perfectly tailored to your unique business requirements with no unnecessary features.',
    highlight: 'Bespoke Solutions',
    color: 'accent'
  },
  {
    icon: Users,
    title: 'Dedicated Local Support',
    description: 'Accessible, friendly, and expert support when you need it - right here in Sri Lanka.',
    highlight: '24/7 Available',
    color: 'primary'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security protocols ensuring your data and operations are always protected.',
    highlight: 'ISO Compliant',
    color: 'accent'
  },
  {
    icon: Zap,
    title: 'Rapid Deployment',
    description: 'Fast implementation with proven methodologies that get you up and running quickly.',
    highlight: '6-Week Average',
    color: 'primary'
  },
  {
    icon: Award,
    title: 'Proven Excellence',
    description: 'Track record of 50+ successful projects with 99% client satisfaction rate.',
    highlight: '50+ Projects',
    color: 'accent'
  },
  {
    icon: Clock,
    title: 'Long-term Partnership',
    description: 'Ongoing support and maintenance to ensure your systems evolve with your business.',
    highlight: 'Lifetime Support',
    color: 'primary'
  }
];

const achievements = [
  { number: '6+', label: 'Years Experience' },
  { number: '50+', label: 'Projects Delivered' },
  { number: '99%', label: 'Client Satisfaction' },
  { number: '24/7', label: 'Support Available' }
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4 px-4 py-2 bg-accent/10 text-accent border-accent/20">
              Why Choose AurionX
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Why Partner with 
              <span className="text-primary block md:inline md:ml-3">AurionX Solutions?</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We are committed to your success. Our approach is built on a foundation of 
              <span className="text-accent font-medium"> expertise, reliability, and partnership</span>.
            </p>
          </motion.div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Column - Image */}
          <motion.div 
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl" />
              
              {/* Main image */}
              <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 border border-accent/10">
                <Image
                  src="https://placehold.co/600x400.png"
                  alt="AurionX team collaborating on software development projects"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl w-full h-auto"
                  data-ai-hint="professional software development team collaboration"
                />
                
                {/* Floating achievement card */}
                <div className="absolute -bottom-6 -right-6 bg-card rounded-xl shadow-xl border border-accent/20 p-4 backdrop-blur-sm">
                  <div className="flex items-center space-x-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <div>
                      <p className="font-bold text-sm text-foreground">4.9/5 Rating</p>
                      <p className="text-xs text-muted-foreground">50+ Reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                The AurionX Advantage
              </h3>
              
              {/* Top advantages */}
              {advantages.slice(0, 3).map((advantage, index) => (
                <motion.div
                  key={advantage.title}
                  className="flex items-start group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <div className={`flex-shrink-0 h-12 w-12 rounded-xl bg-${advantage.color}/10 text-${advantage.color} flex items-center justify-center group-hover:bg-${advantage.color}/20 transition-colors duration-300`}>
                    <advantage.icon className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="text-lg font-bold text-foreground">
                        {advantage.title}
                      </h4>
                      <Badge variant="outline" className="text-xs bg-accent/5 text-accent border-accent/20">
                        {advantage.highlight}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </motion.div>
              ))}
              
              {/* CTA */}
              <motion.div
                className="pt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-all duration-200">
                  <Link href="/contact" className="flex items-center">
                    Start Your Project Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Additional Advantages Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {advantages.slice(3).map((advantage, index) => (
            <Card key={advantage.title} className="group border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-card to-secondary/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-${advantage.color}/10 flex items-center justify-center group-hover:bg-${advantage.color}/20 transition-colors duration-300`}>
                    <advantage.icon className={`w-5 h-5 text-${advantage.color}`} />
                  </div>
                  <Badge variant="outline" className="text-xs bg-accent/5 text-accent border-accent/20">
                    {advantage.highlight}
                  </Badge>
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">
                  {advantage.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {advantage.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {achievements.map((achievement, index) => (
            <div key={achievement.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {achievement.number}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {achievement.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-accent/10 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <CheckCircle className="w-6 h-6 text-accent mr-2" />
              <span className="text-accent font-medium">Ready to Experience the Difference?</span>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              Join 50+ businesses that trust AurionX for their software needs
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-all duration-200">
                <Link href="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-accent/30 hover:border-accent hover:bg-accent/5">
                <Link href="/portfolio">
                  View Success Stories
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
