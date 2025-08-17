'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { motion } from 'framer-motion';
import { Quote, Star, ArrowRight, Users, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const testimonials = [
  {
    name: 'Rajesh Perera',
    title: 'Operations Manager',
    company: 'Lanka Retail Chain',
    avatar: 'RP',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'professional man portrait',
    quote: 'AurionX Solutions transformed our retail operations with their cloud-based POS system. The efficiency gains are remarkable! Sales tracking across our 5 stores has never been easier.',
    rating: 5,
    project: 'Cloud POS System',
    results: '+40% efficiency',
    industry: 'Retail'
  },
  {
    name: 'Priya Wickramasinghe',
    title: 'General Manager',
    company: 'AutoCare Service Center',
    avatar: 'PW',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'professional woman portrait',
    quote: 'The Vehicle Service Management system is a game-changer. Our workflow has never been smoother, and customer satisfaction has increased significantly. Highly recommended!',
    rating: 5,
    project: 'Vehicle Management System',
    results: '+60% productivity',
    industry: 'Automotive'
  },
  {
    name: 'Sampath Fernando',
    title: 'IT Director',
    company: 'MicroFin Solutions',
    avatar: 'SF',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'businessman with glasses',
    quote: 'We needed a secure and custom microfinance system, and AurionX delivered beyond our expectations. Their support is exceptional and the system handles our complex requirements perfectly.',
    rating: 5,
    project: 'Microfinance Platform',
    results: '99.9% uptime',
    industry: 'Finance'
  },
  {
    name: 'Kumari Silva',
    title: 'Owner',
    company: 'Silva Electronics',
    avatar: 'KS',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'business owner portrait',
    quote: 'Their POS system has revolutionized our inventory management. Real-time stock updates and detailed analytics have helped us make better business decisions every day.',
    rating: 5,
    project: 'Retail POS Solution',
    results: '-30% stock waste',
    industry: 'Electronics'
  }
];

const trustMetrics = [
  { icon: Users, number: '50+', label: 'Happy Clients' },
  { icon: Star, number: '4.9/5', label: 'Average Rating' },
  { icon: CheckCircle, number: '100%', label: 'Project Success' }
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/20 to-background">
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
              Client Success Stories
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              What Our Clients Say
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Trusted by businesses across Sri Lanka. See how we've helped companies 
              <span className="text-accent font-medium"> transform their operations</span> and drive growth.
            </p>
          </motion.div>
        </div>

        {/* Trust Metrics */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {trustMetrics.map((metric, index) => (
            <div key={metric.label} className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-4 mx-auto">
                <metric.icon className="w-8 h-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">
                {metric.number}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Carousel 
            opts={{ 
              align: 'start', 
              loop: true,
              skipSnaps: false,
            }} 
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-2">
                    <Card className="h-full border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-xl group bg-gradient-to-br from-card to-secondary/20">
                      <CardContent className="p-8">
                        {/* Quote Icon */}
                        <div className="flex justify-between items-start mb-6">
                          <Quote className="w-8 h-8 text-accent/60" />
                          <Badge variant="outline" className="text-xs bg-accent/5 text-accent border-accent/20">
                            {testimonial.industry}
                          </Badge>
                        </div>

                        {/* Quote Text */}
                        <blockquote className="text-muted-foreground mb-6 leading-relaxed italic text-base">
                          "{testimonial.quote}"
                        </blockquote>

                        {/* Rating */}
                        <div className="flex items-center mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-accent text-accent mr-1" />
                          ))}
                          <span className="ml-2 text-sm text-muted-foreground font-medium">
                            {testimonial.rating}.0
                          </span>
                        </div>

                        {/* Project Info */}
                        <div className="bg-accent/5 rounded-lg p-4 mb-6 border border-accent/10">
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="text-sm font-medium text-foreground">
                                {testimonial.project}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                Project Type
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-bold text-accent">
                                {testimonial.results}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                Improvement
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Client Info */}
                        <div className="flex items-center">
                          <Avatar className="w-12 h-12 mr-4 border-2 border-accent/20">
                            <AvatarImage 
                              src={testimonial.image} 
                              alt={testimonial.name} 
                              data-ai-hint={testimonial.dataAiHint} 
                            />
                            <AvatarFallback className="bg-accent/10 text-accent font-semibold">
                              {testimonial.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-bold text-foreground">
                              {testimonial.name}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.title}
                            </p>
                            <p className="text-sm text-accent font-medium">
                              {testimonial.company}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hover:bg-accent/10 hover:border-accent/30" />
            <CarouselNext className="hover:bg-accent/10 hover:border-accent/30" />
          </Carousel>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-accent/10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let us help you achieve similar results. Schedule a free consultation to discuss your project requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-all duration-200">
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-accent/30 hover:border-accent hover:bg-accent/5">
                <Link href="/portfolio">
                  View All Case Studies
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
