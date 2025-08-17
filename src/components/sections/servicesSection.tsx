'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Monitor, 
  Settings, 
  Smartphone, 
  CheckCircle,
  Zap,
  Users,
  BarChart3
} from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'POS Systems',
    subtitle: 'Point of Sale Solutions',
    description: 'Modern, reliable Point-of-Sale systems designed to streamline your sales process and enhance customer experience.',
    features: [
      'Offline/Standalone POS',
      'Cloud-based Solutions', 
      'Mobile POS Integration',
      'Real-time Analytics'
    ],
    highlight: 'Most Popular',
    gradient: 'from-primary/10 to-accent/10',
    link: '/services',
  },
  {
    icon: Settings,
    title: 'Management Platforms',
    subtitle: 'Business Operations',
    description: 'Powerful, custom-built management systems to optimize your business operations and provide critical insights.',
    features: [
      'Vehicle Service Management',
      'Microfinance Systems',
      'Asset Management',
      'Custom Workflows'
    ],
    highlight: 'Featured',
    gradient: 'from-accent/10 to-primary/10',
    link: '/services',
  },
  {
    icon: Smartphone,
    title: 'Web & Desktop Apps',
    subtitle: 'Custom Development',
    description: 'Bespoke applications built from the ground up to meet your unique business challenges and goals.',
    features: [
      'Web Applications',
      'Desktop Software',
      'API Integration',
      'Legacy Modernization'
    ],
    highlight: 'Enterprise Ready',
    gradient: 'from-primary/5 to-accent/5',
    link: '/services',
  },
];

const stats = [
  { icon: Users, number: '50+', label: 'Projects Delivered' },
  { icon: Zap, number: '99%', label: 'Uptime Guarantee' },
  { icon: BarChart3, number: '24/7', label: 'Support Available' },
];

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/30">
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
              Our Core Services
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Solutions Built for
              <span className="text-primary block md:inline md:ml-3">Performance & Scale</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              From point-of-sale systems to complex management platforms, we deliver software that drives 
              <span className="text-accent font-medium"> real business results</span>.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className={`group h-full border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-gradient-to-br ${service.gradient} backdrop-blur-sm`}>
                {/* Highlight Badge */}
                {service.highlight && (
                  <div className="absolute -top-3 left-6 z-10">
                    <Badge className="bg-accent text-accent-foreground shadow-md">
                      {service.highlight}
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6 mx-auto group-hover:bg-accent/20 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <div className="text-center">
                    <CardTitle className="text-xl font-bold text-foreground mb-2">
                      {service.title}
                    </CardTitle>
                    <p className="text-sm text-accent font-medium mb-3">
                      {service.subtitle}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  {/* Features List */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={feature} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <Button 
                    variant="ghost" 
                    asChild 
                    className="w-full group-hover:bg-accent/10 group-hover:text-accent transition-all duration-300"
                  >
                    <Link href={service.link} className="flex items-center justify-center">
                      Learn More 
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-xl mb-4 mx-auto">
                <stat.icon className="w-6 h-6 text-accent" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-accent/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Every business is unique. Let us build a tailored solution that perfectly fits your requirements and drives growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-all duration-200">
              <Link href="/contact">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-accent/30 hover:border-accent hover:bg-accent/5">
              <Link href="/portfolio">
                View Case Studies
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
