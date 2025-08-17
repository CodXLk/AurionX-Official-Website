'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, ArrowRight, Star, Users, Clock, Shield } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

const servicesData = {
  "POS Systems": {
    description: "Modern, reliable Point-of-Sale systems designed to streamline your sales process, manage inventory, and enhance customer experience with real-time analytics.",
    image: "https://placehold.co/500x350.png",
    dataAiHint: "modern POS cash register interface",
    highlight: "Most Popular",
    pricing: "Starting from $2,500",
    timeline: "4-6 Weeks",
    clients: "15+ Retail Businesses",
    features: [
      "Offline/Standalone POS: Robust functionality even without an internet connection.",
      "Cloud-based POS: Access your sales data from anywhere, anytime.",
      "Mobile POS solutions: Turn any smartphone or tablet into a powerful POS device.",
      "Real-time inventory tracking and low stock alerts.",
      "Comprehensive sales reports and analytics dashboard."
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    benefits: [
      "40% faster checkout process",
      "99.9% uptime guarantee",
      "24/7 technical support"
    ]
  },
  "Management Support Systems": {
    description: "Powerful, custom-built management systems to optimize your business operations and provide critical insights for strategic decision-making across all departments.",
    image: "https://placehold.co/500x350.png",
    dataAiHint: "business dashboard analytics interface",
    highlight: "Featured Solution",
    pricing: "Custom Pricing",
    timeline: "6-12 Weeks",
    clients: "10+ Enterprises",
    features: [
      "Vehicle Service Management: Complete workshop operations from booking to billing.",
      "Microfinance System: Secure and efficient management of micro-lending operations.",
      "Fixed Asset Management: Track and manage company assets with QR integration.",
      "HR Management: Employee records, payroll, and performance tracking.",
      "Advanced reporting and business intelligence tools."
    ],
    technologies: [".NET", "Java", "MySQL", "Azure"],
    benefits: [
      "60% improvement in workflow efficiency",
      "Customizable to any industry",
      "Scalable architecture"
    ]
  },
  "Custom Software Development": {
    description: "Bespoke software solutions built from the ground up to meet your unique business challenges, goals, and specific industry requirements.",
    image: "https://placehold.co/500x350.png",
    dataAiHint: "software development code screen",
    highlight: "Enterprise Ready",
    pricing: "Project-based",
    timeline: "8-16 Weeks",
    clients: "20+ Custom Projects",
    features: [
      "Web and desktop applications: Cross-platform solutions for maximum reach.",
      "API integration: Seamlessly connect your systems and third-party services.",
      "Legacy system upgrades: Modernize outdated software for better performance.",
      "Mobile application development for iOS and Android platforms.",
      "Microservices architecture for scalable enterprise solutions."
    ],
    technologies: ["React", "Flutter", "Java", "Python"],
    benefits: [
      "100% tailored to your needs",
      "Future-proof architecture",
      "Comprehensive documentation"
    ]
  },
  "Hosting & Maintenance": {
    description: "Reliable hosting and proactive maintenance services to ensure your applications are always secure, fast, available, and performing at peak efficiency.",
    image: "https://placehold.co/500x350.png",
    dataAiHint: "modern server room data center",
    highlight: "24/7 Support",
    pricing: "Starting from $200/month",
    timeline: "Immediate Setup",
    clients: "50+ Hosted Applications",
    features: [
      "Cloud hosting packages: Scalable AWS and Azure hosting solutions.",
      "System monitoring: Proactive 24/7 monitoring to prevent issues.",
      "Performance optimization: Regular audits and speed improvements.",
      "Security audits: Regular security assessments and updates.",
      "Automated backups and disaster recovery solutions."
    ],
    technologies: ["AWS", "Azure", "Docker", "Kubernetes"],
    benefits: [
      "99.9% uptime SLA",
      "SSL certificates included",
      "Daily automated backups"
    ]
  }
};

const serviceStats = [
  { icon: Users, number: '50+', label: 'Active Clients' },
  { icon: Star, number: '4.9/5', label: 'Client Rating' },
  { icon: Clock, number: '24/7', label: 'Support Available' },
  { icon: Shield, number: '99.9%', label: 'Uptime SLA' },
];

export default function ServicesPage() {
  const [activeService, setActiveService] = useState("item-0");

  return (
    <>
      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-logo-purple via-primary/95 to-logo-purple text-primary-foreground py-20 md:py-32">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 right-20 w-20 h-20 bg-accent/20 rounded-2xl blur-xl"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="secondary" className="mb-6 bg-accent/20 text-accent-foreground border-accent/30">
              Our Services & Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Comprehensive Software
              <span className="block text-accent">Solutions for Growth</span>
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
              Tailored software solutions designed to drive business growth and efficiency. 
              From POS systems to custom development, we deliver{' '}
              <span className="text-accent font-semibold">results that matter</span>.
            </p>
          </motion.div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-12 md:h-20 text-background">
            <path 
              fill="currentColor" 
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            />
          </svg>
        </div>
      </section>

      {/* Service Stats */}
      <section className="py-16 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {serviceStats.map((stat, index) => (
              <motion.div 
                key={stat.label} 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-4 mx-auto">
                  <stat.icon className="w-8 h-8 text-accent" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Accordion Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent border-accent/20">
                Detailed Services
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Everything You Need to Succeed
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Explore our comprehensive range of services designed to transform your business operations.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Accordion 
              type="single" 
              collapsible 
              defaultValue="item-0" 
              value={activeService}
              onValueChange={setActiveService}
              className="w-full max-w-6xl mx-auto"
            >
              {Object.entries(servicesData).map(([title, service], index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border/50 rounded-xl mb-4 overflow-hidden bg-gradient-to-br from-card to-secondary/20"
                >
                  <AccordionTrigger className="px-8 py-6 text-left hover:no-underline group">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                          <CheckCircle2 className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-300" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground">{title}</h3>
                          <div className="flex items-center space-x-4 mt-1">
                            <Badge variant="outline" className="bg-accent/5 text-accent border-accent/20 text-xs">
                              {service.highlight}
                            </Badge>
                            <span className="text-sm text-muted-foreground">
                              {service.timeline}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="grid lg:grid-cols-2 gap-8 pt-4">
                        {/* Left Content */}
                        <div>
                          <p className="text-muted-foreground mb-6 leading-relaxed">
                            {service.description}
                          </p>

                          {/* Service Details */}
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                            <Card className="p-4 bg-gradient-to-r from-primary/5 to-accent/5 border-accent/10">
                              <div className="text-sm text-muted-foreground">Starting Price</div>
                              <div className="font-bold text-primary">{service.pricing}</div>
                            </Card>
                            <Card className="p-4 bg-gradient-to-r from-primary/5 to-accent/5 border-accent/10">
                              <div className="text-sm text-muted-foreground">Timeline</div>
                              <div className="font-bold text-accent">{service.timeline}</div>
                            </Card>
                            <Card className="p-4 bg-gradient-to-r from-primary/5 to-accent/5 border-accent/10">
                              <div className="text-sm text-muted-foreground">Happy Clients</div>
                              <div className="font-bold text-primary">{service.clients}</div>
                            </Card>
                          </div>

                          {/* Features List */}
                          <div className="mb-6">
                            <h4 className="font-semibold text-foreground mb-4">Key Features & Capabilities</h4>
                            <ul className="space-y-3">
                              {service.features.map((feature, i) => (
                                <motion.li 
                                  key={i} 
                                  className="flex items-start"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.4, delay: i * 0.1 }}
                                >
                                  <CheckCircle2 className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                                  <span className="text-muted-foreground leading-relaxed">{feature}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          {/* Technologies */}
                          <div className="mb-6">
                            <h4 className="font-semibold text-foreground mb-3">Technologies We Use</h4>
                            <div className="flex flex-wrap gap-2">
                              {service.technologies.map((tech) => (
                                <Badge key={tech} variant="secondary" className="bg-accent/10 text-accent">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {/* Benefits */}
                          <div>
                            <h4 className="font-semibold text-foreground mb-3">Client Benefits</h4>
                            <div className="space-y-2">
                              {service.benefits.map((benefit) => (
                                <div key={benefit} className="flex items-center space-x-2">
                                  <Star className="w-4 h-4 text-accent" />
                                  <span className="text-sm text-muted-foreground">{benefit}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Right Image */}
                        <div className="flex items-center justify-center">
                          <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl" />
                            <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-4 border border-accent/10">
                              <Image
                                src={service.image}
                                alt={title}
                                width={500}
                                height={350}
                                className="rounded-xl shadow-lg object-cover w-full h-auto"
                                data-ai-hint={service.dataAiHint}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Service CTA */}
                      <div className="mt-8 pt-6 border-t border-border/50">
                        <div className="flex flex-col sm:flex-row gap-4">
                          <Button asChild className="shadow-lg hover:shadow-xl transition-all duration-200">
                            <Link href="/contact">
                              Get Quote for {title}
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                          <Button variant="outline" asChild className="border-accent/30 hover:border-accent hover:bg-accent/5">
                            <Link href="/portfolio">
                              View Examples
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5 border-t border-accent/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-accent mr-2" />
                <span className="text-accent font-medium">Have a Specific Requirement?</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Let's Build Your Perfect Solution
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                We excel at building custom solutions that perfectly match your unique business needs. 
                Ready to discuss your project and get a detailed proposal?
              </p>
              
              {/* Multiple CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-all duration-200">
                  <Link href="/contact">
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-accent/30 hover:border-accent hover:bg-accent/5">
                  <Link href="/portfolio">
                    View Our Work
                  </Link>
                </Button>
              </div>

              {/* Trust Elements */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>No Obligation Quote</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
