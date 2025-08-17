'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
  ArrowRight, 
  ExternalLink, 
  Calendar, 
  Users, 
  TrendingUp,
  Filter,
  Award,
  CheckCircle,
  Star,
  Clock,
  Target
} from 'lucide-react';

const projects = [
  {
    title: 'Vehicle Service Management System',
    industry: 'Auto Care',
    description: 'Complete system to manage vehicle services, customer records, inventory, billing, and advanced sales analytics — all in one user-friendly web platform.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'vehicle service management dashboard interface',
    tags: ['Management System', 'Web App', 'Real-time Analytics', 'Custom Development'],
    featured: true,
    duration: '6 Weeks',
    result: '+60% Efficiency',
    client: 'AutoCare Service Center',
    testimonial: 'The Vehicle Service Management system is a game-changer. Our workflow has never been smoother.',
    features: ['Vehicle Registration', 'Bill Preparation', 'Progress Tracking', 'Sales Analytics', 'CCTV Access'],
    rating: 5,
    projectValue: '$15,000',
    technologies: ['React', '.NET Core', 'SQL Server', 'Azure']
  },
  {
    title: 'Cloud POS for Retail Chains',
    industry: 'Retail',
    description: 'A comprehensive cloud-based Point-of-Sale system enabling multi-store management, real-time analytics, and inventory tracking across multiple locations.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'modern retail POS software interface',
    tags: ['POS', 'Cloud', 'Multi-store', 'Analytics'],
    duration: '8 Weeks',
    result: '+40% Sales Growth',
    client: 'Lanka Retail Chain',
    features: ['Multi-store Management', 'Real-time Analytics', 'Inventory Sync', 'Sales Reports'],
    rating: 5,
    projectValue: '$12,000',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS']
  },
  {
    title: 'Microfinance Core Banking',
    industry: 'Finance',
    description: 'A secure and scalable system for microfinance institutions to manage loans, savings, and customer data with advanced security protocols.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'financial banking dashboard interface',
    tags: ['Core Banking', 'Security', 'Compliance', 'Financial Services'],
    duration: '12 Weeks',
    result: '99.9% Uptime',
    client: 'MicroFin Solutions',
    features: ['Loan Management', 'Customer Portal', 'Compliance Reports', 'Security Audits'],
    rating: 5,
    projectValue: '$25,000',
    technologies: ['Java', 'Spring Boot', 'Oracle', 'AWS']
  },
  {
    title: 'Fixed Asset Management Platform',
    industry: 'Corporate',
    description: 'A comprehensive web application for tracking and managing company assets across multiple locations, with QR code integration and depreciation tracking.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'asset tracking mobile application interface',
    tags: ['Asset Management', 'QR Codes', 'Mobile', 'Enterprise'],
    duration: '5 Weeks',
    result: '-30% Asset Loss',
    client: 'Corporate Solutions Ltd',
    features: ['QR Code Tracking', 'Multi-location', 'Depreciation', 'Mobile Access'],
    rating: 5,
    projectValue: '$8,000',
    technologies: ['React', 'Node.js', 'MongoDB', 'React Native']
  },
  {
    title: 'E-commerce Integration Platform',
    industry: 'E-commerce',
    description: 'Integrated a legacy inventory system with modern e-commerce platforms, enabling seamless product synchronization and order management.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'ecommerce integration network diagram',
    tags: ['API Integration', 'E-commerce', 'Legacy Systems', 'Automation'],
    duration: '4 Weeks',
    result: '+85% Order Accuracy',
    client: 'Online Retail Pro',
    features: ['Legacy Integration', 'Real-time Sync', 'Order Management', 'Inventory Updates'],
    rating: 4,
    projectValue: '$6,000',
    technologies: ['Python', 'Django', 'REST APIs', 'Redis']
  },
  {
    title: 'Restaurant Mobile POS Suite',
    industry: 'Hospitality',
    description: 'A user-friendly mobile POS application for restaurants, allowing staff to take orders and process payments directly from tables with kitchen integration.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'restaurant tablet POS system interface',
    tags: ['Mobile POS', 'Restaurant', 'Flutter', 'Payment Processing'],
    duration: '7 Weeks',
    result: '+50% Order Speed',
    client: 'Fine Dining Group',
    features: ['Tableside Ordering', 'Payment Processing', 'Kitchen Integration', 'Analytics'],
    rating: 5,
    projectValue: '$10,000',
    technologies: ['Flutter', 'Firebase', 'Stripe API', 'Node.js']
  },
];

const industries = ['All', 'Auto Care', 'Retail', 'Finance', 'Corporate', 'E-commerce', 'Hospitality'];

const portfolioStats = [
  { number: '50+', label: 'Projects Completed', icon: Award },
  { number: '20+', label: 'Happy Clients', icon: Users },
  { number: '99%', label: 'Success Rate', icon: TrendingUp },
  { number: '6', label: 'Average Weeks', icon: Calendar },
];

export default function PortfolioPage() {
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  
  const filteredProjects = selectedIndustry === 'All' 
    ? projects 
    : projects.filter(project => project.industry === selectedIndustry);

  const featuredProject = projects.find(p => p.featured);

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
          className="absolute top-20 right-20 w-24 h-24 bg-accent/20 rounded-2xl blur-xl"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-16 h-16 bg-primary-foreground/10 rounded-full blur-lg"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="secondary" className="mb-6 bg-accent/20 text-accent-foreground border-accent/30">
              🏆 Our Portfolio
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Work Speaks
              <span className="block text-accent">For Itself</span>
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
              A showcase of successful projects that demonstrate our expertise in delivering 
              <span className="text-accent font-semibold"> innovative software solutions</span> across various industries.
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

      {/* Portfolio Stats */}
      <section className="py-16 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {portfolioStats.map((stat, index) => (
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

      {/* Featured Project */}
      {featuredProject && (
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent border-accent/20">
                🌟 Featured Project
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Our Flagship Solution
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Dive deep into our most successful project that showcases our technical expertise and client impact.
              </p>
            </motion.div>

            <motion.div
              className="grid lg:grid-cols-2 gap-12 items-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Project Image */}
              <div className="relative order-2 lg:order-1">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl" />
                <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 border border-accent/10">
                  <Image
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    width={600}
                    height={400}
                    className="rounded-xl shadow-2xl w-full h-auto"
                    data-ai-hint={featuredProject.dataAiHint}
                  />
                  
                  {/* Floating Stats */}
                  <div className="absolute -bottom-6 -right-6 bg-card rounded-xl shadow-xl border border-accent/20 p-4 backdrop-blur-sm">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent mb-1">
                        {featuredProject.result}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Client Improvement
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -top-4 -left-4 bg-card rounded-xl shadow-xl border border-accent/20 p-3 backdrop-blur-sm">
                    <div className="flex items-center space-x-1">
                      {[...Array(featuredProject.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="order-1 lg:order-2">
                <Badge variant="outline" className="mb-4 bg-accent/5 text-accent border-accent/20">
                  {featuredProject.industry} • {featuredProject.duration}
                </Badge>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                  {featuredProject.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {featuredProject.description}
                </p>

                {/* Project Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <Card className="p-4 bg-gradient-to-r from-primary/5 to-accent/5 border-accent/10">
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">Timeline</span>
                    </div>
                    <div className="font-bold text-primary">{featuredProject.duration}</div>
                  </Card>
                  <Card className="p-4 bg-gradient-to-r from-primary/5 to-accent/5 border-accent/10">
                    <div className="flex items-center space-x-2 mb-2">
                      <Target className="w-4 h-4 text-accent" />
                      <span className="text-sm text-muted-foreground">Impact</span>
                    </div>
                    <div className="font-bold text-accent">{featuredProject.result}</div>
                  </Card>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-accent/10 text-accent">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {featuredProject.features?.slice(0, 4).map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Client Testimonial */}
                {featuredProject.testimonial && (
                  <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-6 border border-accent/10 mb-6">
                    <blockquote className="text-muted-foreground italic mb-3">
                      "{featuredProject.testimonial}"
                    </blockquote>
                    <cite className="text-sm font-medium text-accent">
                      — {featuredProject.client}
                    </cite>
                  </div>
                )}

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild className="shadow-lg hover:shadow-xl transition-all duration-200">
                    <Link href="/contact">
                      Get Similar Solution
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="border-accent/30 hover:border-accent hover:bg-accent/5">
                    <Link href="/services">
                      Explore Services
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Industry Filter */}
      <section className="py-8 bg-secondary/20">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {industries.map((industry) => (
              <Button
                key={industry}
                variant={selectedIndustry === industry ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedIndustry(industry)}
                className={`transition-all duration-200 ${
                  selectedIndustry === industry 
                    ? 'bg-accent hover:bg-accent/90' 
                    : 'border-accent/30 hover:border-accent hover:bg-accent/5'
                }`}
              >
                <Filter className="w-3 h-3 mr-1" />
                {industry}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIndustry}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {filteredProjects.filter(p => !p.featured).map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="flex flex-col h-full overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-accent/30 bg-gradient-to-br from-card to-secondary/20 group">
                    <CardHeader className="p-0">
                      <div className="relative aspect-[3/2] overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          data-ai-hint={project.dataAiHint}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Project Value Badge */}
                        {project.projectValue && (
                          <div className="absolute top-4 right-4 bg-accent/90 text-accent-foreground rounded-full px-3 py-1 text-xs font-medium">
                            {project.projectValue}
                          </div>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="outline" className="bg-accent/5 text-accent border-accent/20">
                          {project.industry}
                        </Badge>
                        {project.duration && (
                          <span className="text-xs text-muted-foreground flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {project.duration}
                          </span>
                        )}
                      </div>
                      <CardTitle className="mb-3 text-foreground group-hover:text-accent transition-colors duration-200">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="mb-4 leading-relaxed">
                        {project.description}
                      </CardDescription>
                      
                      {/* Rating */}
                      {project.rating && (
                        <div className="flex items-center space-x-1 mb-3">
                          {[...Array(project.rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                          ))}
                          <span className="text-xs text-muted-foreground ml-2">
                            {project.rating}.0
                          </span>
                        </div>
                      )}

                      {/* Result */}
                      {project.result && (
                        <div className="mb-4 p-3 bg-accent/5 rounded-lg border border-accent/10">
                          <div className="text-sm font-medium text-accent">
                            {project.result}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Client Achievement
                          </div>
                        </div>
                      )}
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <div className="w-full">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <Button variant="ghost" className="w-full justify-between group-hover:bg-accent/10 group-hover:text-accent transition-all duration-200">
                          View Case Study
                          <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
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
                <CheckCircle className="w-6 h-6 text-accent mr-2" />
                <span className="text-accent font-medium">Inspired by Our Work?</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Let's Turn Your Vision Into Reality
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Ready to join our portfolio of successful projects? We're excited to tackle your next challenge 
                and deliver results that exceed expectations, just like we did for our other clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-all duration-200">
                  <Link href="/contact">
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-accent/30 hover:border-accent hover:bg-accent/5">
                  <Link href="/services">
                    Explore Our Services
                  </Link>
                </Button>
              </div>

              {/* Trust Elements */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>Free Project Consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>No Obligation Quote</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span>Proven Track Record</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
