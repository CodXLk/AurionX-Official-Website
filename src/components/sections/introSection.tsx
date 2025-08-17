'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Zap, Shield, TrendingUp, Code, Headphones } from 'lucide-react';

const companyValues = [
  {
    icon: Code,
    title: "Innovation First",
    description: "Cutting-edge solutions using the latest technologies"
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "Robust, secure systems you can depend on"
  },
  {
    icon: TrendingUp,
    title: "Growth-Focused",
    description: "Solutions designed to scale with your business"
  },
  {
    icon: Users,
    title: "Client Partnership", 
    description: "We're not just vendors, we're your technology partners"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Dedicated local support when you need it most"
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Efficient development with proven methodologies"
  }
];

const stats = [
  { number: "50+", label: "Projects Delivered" },
  { number: "6+", label: "Years Experience" },
  { number: "20+", label: "Happy Clients" },
  { number: "99%", label: "Client Satisfaction" }
];

export default function IntroSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto px-4">
        {/* Main Introduction */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium bg-accent/10 text-accent border-accent/20">
              About AurionX Solutions
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Who We Are
            </h2>
          </motion.div>
          
          <motion.p
            className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-primary font-semibold">AurionX Solutions</span> is a premier software development company dedicated to creating{' '}
            <span className="text-accent font-medium">innovative, reliable, and scalable</span> software solutions. 
            We partner with businesses to transform their operations and drive growth through cutting-edge technology.
          </motion.p>

          <motion.p
            className="text-base md:text-lg text-muted-foreground/80 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            From POS systems to complex management platforms, we deliver software that doesn't just meet requirements—it{' '}
            <span className="text-foreground font-medium">exceeds expectations</span> and drives real business results.
          </motion.p>
        </div>

        {/* Statistics */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Company Values Grid */}
        <div className="mb-12">
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Why Choose AurionX?
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="h-full border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-lg group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                          <value.icon className="w-6 h-6 text-accent" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">
                          {value.title}
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-lg text-muted-foreground mb-2">
            Ready to transform your business with smart software solutions?
          </p>
          <p className="text-sm text-accent font-medium">
            Let's discuss how AurionX can drive your success.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
