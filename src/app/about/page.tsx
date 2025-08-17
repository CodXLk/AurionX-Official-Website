'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Target, 
  ShieldCheck, 
  Users, 
  Zap, 
  Award,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Calendar,
  MapPin,
  Code,
  Heart
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const teamMembers = [
  { 
    name: 'Kasun Perera', 
    role: 'Founder & CEO', 
    image: 'https://placehold.co/150x150.png', 
    dataAiHint: 'professional sri lankan man portrait', 
    initials: 'KP',
    description: 'Visionary leader with 8+ years in enterprise software development',
    linkedin: '#'
  },
  { 
    name: 'Sanduni Silva', 
    role: 'Lead Developer', 
    image: 'https://placehold.co/150x150.png', 
    dataAiHint: 'professional sri lankan woman developer', 
    initials: 'SS',
    description: 'Full-stack expert specializing in scalable web applications',
    linkedin: '#'
  },
  { 
    name: 'Ruwan Fernando', 
    role: 'Project Manager', 
    image: 'https://placehold.co/150x150.png', 
    dataAiHint: 'professional sri lankan person with glasses', 
    initials: 'RF',
    description: 'Agile methodology expert ensuring on-time, quality delivery',
    linkedin: '#'
  },
];

const whyChooseUsItems = [
  {
    icon: Target,
    title: "Custom Development",
    description: "Bespoke solutions tailored to your unique business requirements with no unnecessary features.",
    highlight: "Tailored Solutions",
    color: "accent"
  },
  {
    icon: Users,
    title: "Local Support",
    description: "Dedicated Sri Lankan team providing fast, friendly, and expert support in your time zone.",
    highlight: "24/7 Available",
    color: "primary"
  },
  {
    icon: ShieldCheck,
    title: "Secure Hosting",
    description: "Enterprise-grade security with robust hosting services ensuring 99.9% uptime guarantee.",
    highlight: "ISO Compliant",
    color: "accent"
  },
  {
    icon: Zap,
    title: "Rapid Delivery",
    description: "Proven methodologies and agile processes that deliver results faster than industry standards.",
    highlight: "6-Week Average",
    color: "primary"
  }
];

const companyStats = [
  { number: '6+', label: 'Years Experience', icon: Calendar },
  { number: '50+', label: 'Projects Delivered', icon: Award },
  { number: '20+', label: 'Happy Clients', icon: Users },
  { number: '99%', label: 'Client Satisfaction', icon: TrendingUp },
];

const coreValues = [
  { icon: Code, title: 'Innovation', description: 'Cutting-edge solutions using latest technologies' },
  { icon: ShieldCheck, title: 'Integrity', description: 'Honest, transparent communication in all dealings' },
  { icon: Heart, title: 'Customer-Centricity', description: 'Your success is our primary measure of achievement' },
  { icon: Award, title: 'Excellence', description: 'Uncompromising quality in every line of code' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
     {/* Enhanced Hero Section */}
<section className="relative overflow-hidden bg-gradient-to-br from-logo-purple via-primary/95 to-logo-purple text-primary-foreground py-20 md:py-32">
  {/* Animated Background Pattern */}
  <div 
    className="absolute inset-0 opacity-10"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm-8-10h-2v4h2v-4zm0 6h-2v4h2v-4zm6-6h-2v4h2v-4zm0 6h-2v4h2v-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    }}
  />

  {/* Floating Geometric Elements */}
  <motion.div
    className="absolute top-20 left-10 w-24 h-24 bg-accent/20 rounded-2xl blur-xl"
    animate={{ 
      y: [0, -20, 0],
      rotate: [0, 5, 0] 
    }}
    transition={{ 
      duration: 6, 
      repeat: Infinity, 
      ease: "easeInOut" 
    }}
  />
  <motion.div
    className="absolute top-32 right-20 w-16 h-16 bg-primary-foreground/10 rounded-full blur-lg"
    animate={{ 
      y: [0, 15, 0],
      x: [0, 10, 0] 
    }}
    transition={{ 
      duration: 8, 
      repeat: Infinity, 
      ease: "easeInOut",
      delay: 1 
    }}
  />
  <motion.div
    className="absolute bottom-20 left-1/4 w-20 h-20 bg-accent/15 rounded-3xl blur-xl"
    animate={{ 
      scale: [1, 1.2, 1],
      rotate: [0, 180, 360] 
    }}
    transition={{ 
      duration: 12, 
      repeat: Infinity, 
      ease: "linear" 
    }}
  />

  <div className="container mx-auto px-4 relative z-10">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Left Content */}
      <motion.div
        className="text-center lg:text-left"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Badge variant="secondary" className="mb-6 bg-accent/20 text-accent-foreground border-accent/30 backdrop-blur-sm">
            🚀 Our Story
          </Badge>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          About{' '}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-accent via-accent/80 to-accent bg-clip-text text-transparent">
              AurionX
            </span>
            <motion.div
              className="absolute -bottom-2 left-0 h-1 bg-accent/60 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1, delay: 1 }}
            />
          </span>
          <br />
          Solutions
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed opacity-90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Discover our mission, values, and the passionate team driving{' '}
          <motion.span 
            className="text-accent font-semibold relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            innovation in software development
          </motion.span>{' '}
          across Sri Lanka and beyond.
        </motion.p>

        {/* Key Highlights */}
        <motion.div
          className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {['6+ Years', '50+ Projects', 'Sri Lankan Roots'].map((item, index) => (
            <motion.div
              key={item}
              className="flex items-center space-x-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <CheckCircle className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">{item}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <Button 
            asChild 
            size="lg" 
            className="bg-accent hover:bg-logo-green text-accent-foreground shadow-xl hover:shadow-2xl transition-all duration-200"
          >
            <Link href="/contact" className="flex items-center">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button 
            asChild 
            size="lg" 
            variant="outline" 
            className="border-2 hover:border-primary-foreground/30 border-accent bg-accent/10 hover:bg-logo-purple hover:text-primary-foreground text-accent backdrop-blur-sm transition-all duration-200"
          >
            <Link href="/portfolio">
              See Our Impact
            </Link>
          </Button>
        </motion.div>
      </motion.div>

      {/* Right Visual Content */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {/* Main Visual Container */}
        <div className="relative">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary-foreground/20 rounded-3xl blur-2xl scale-110" />
          
          {/* Content Grid */}
          <div className="relative bg-primary-foreground/5 backdrop-blur-sm rounded-3xl p-8 border border-primary-foreground/10">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { number: '50+', label: 'Projects', icon: Award },
                { number: '6+', label: 'Years', icon: Calendar },
                { number: '99%', label: 'Success', icon: TrendingUp },
                { number: '24/7', label: 'Support', icon: ShieldCheck }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 text-center border border-primary-foreground/10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                >
                  <div className="flex justify-center mb-2">
                    <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                      <stat.icon className="w-4 h-4 text-accent" />
                    </div>
                  </div>
                  <div className="text-xl font-bold text-primary-foreground">
                    {stat.number}
                  </div>
                  <div className="text-xs text-primary-foreground/70">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Sri Lanka Badge */}
            <motion.div
              className="flex items-center justify-center space-x-2 bg-accent/20 backdrop-blur-sm rounded-full px-6 py-3 border border-accent/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <MapPin className="w-4 h-4 text-accent" />
              <span className="font-semibold text-accent-foreground">
                Proudly Sri Lankan
              </span>
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 2 }}
              >
                🇱🇰
              </motion.span>
            </motion.div>
          </div>

          {/* Floating Elements */}
          <motion.div
            className="absolute -top-4 -right-4 w-12 h-12 bg-accent/30 rounded-full blur-lg"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3] 
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          <motion.div
            className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary-foreground/20 rounded-2xl blur-xl"
            animate={{ 
              rotate: [0, 180, 360],
              scale: [1, 0.8, 1] 
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
        </div>
      </motion.div>
    </div>
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


      {/* Company Stats */}
      <section className="py-16 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {companyStats.map((stat, index) => (
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
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div 
              className="relative order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl" />
                <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 border border-accent/10">
                  <Image
                    src="https://placehold.co/600x450.png"
                    alt="AurionX Solutions team collaborating in modern Sri Lankan office"
                    width={600}
                    height={450}
                    className="rounded-xl shadow-2xl w-full h-auto"
                    data-ai-hint="sri lankan software development team meeting"
                  />
                  
                  {/* Floating badge */}
                  <div className="absolute -bottom-6 -right-6 bg-card rounded-xl shadow-xl border border-accent/20 p-4 backdrop-blur-sm">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-accent" />
                      <span className="font-bold text-sm text-foreground">Colombo, Sri Lanka</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div 
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent border-accent/20">
                Our Mission & Vision
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Empowering Sri Lankan Businesses
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our mission is to empower businesses of all sizes by providing them with 
                <span className="text-accent font-medium"> intelligent, high-quality, and scalable</span> software solutions. 
                We believe that the right technology can be a powerful catalyst for growth, efficiency, and innovation.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We strive to be more than just a vendor; we aim to be a 
                <span className="text-primary font-medium"> long-term technology partner</span> committed to our clients' success, 
                helping transform Sri Lankan businesses through cutting-edge software solutions.
              </p>

              {/* Core Values */}
              <div className="grid grid-cols-2 gap-4">
                {coreValues.map((value, index) => (
                  <motion.div
                    key={value.title}
                    className="flex items-start space-x-3 p-4 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 border border-accent/10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                        <value.icon className="w-4 h-4 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm mb-1">
                        {value.title}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent border-accent/20">
                Why Choose AurionX
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                The AurionX Advantage
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We combine expertise with a passion for technology to deliver 
                <span className="text-accent font-medium"> outstanding results</span> that drive business growth.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUsItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full text-center border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-lg group bg-gradient-to-br from-card to-secondary/20">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className={`w-16 h-16 bg-${item.color}/10 rounded-2xl flex items-center justify-center group-hover:bg-${item.color}/20 transition-colors duration-300`}>
                        <item.icon className={`w-8 h-8 text-${item.color}`} />
                      </div>
                    </div>
                    <Badge variant="outline" className="mb-4 text-xs bg-accent/5 text-accent border-accent/20">
                      {item.highlight}
                    </Badge>
                    <h3 className="text-xl font-bold mb-3 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent border-accent/20">
                Our Team
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Meet Our Expert Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The passionate professionals behind AurionX's success, bringing years of experience 
                and innovative thinking to every project.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-lg group bg-gradient-to-br from-card to-secondary/20">
                  <CardContent className="p-8">
                    <div className="relative mb-6">
                      <Avatar className="w-24 h-24 mx-auto border-4 border-accent/20 group-hover:border-accent/40 transition-colors duration-300">
                        <AvatarImage src={member.image} alt={member.name} data-ai-hint={member.dataAiHint} />
                        <AvatarFallback className="bg-accent/10 text-accent font-bold text-lg">
                          {member.initials}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5 border-t border-accent/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-accent mr-2" />
                <span className="text-accent font-medium">Ready to Transform Your Business?</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Let's Build Something Amazing Together
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Join 50+ businesses that trust AurionX for their software development needs. 
                Contact us for a free consultation and discover how we can drive your success.
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
                    View Our Work
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
