'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  Clock,
  Shield,
  Award,
  ExternalLink
} from 'lucide-react';
import Logo from './logo';

const quickLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
];

const services = [
  { href: '/services#pos', label: 'POS Systems' },
  { href: '/services#management', label: 'Management Platforms' },
  { href: '/services#development', label: 'Custom Development' },
  { href: '/services#hosting', label: 'Hosting & Support' },
];

const resources = [
  { href: '/blog', label: 'Blog' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/faq', label: 'FAQ' },
  { href: '/support', label: 'Support Center' },
];

const socialLinks = [
  { 
    href: 'https://linkedin.com/company/aurionx-solutions', 
    icon: Linkedin, 
    label: 'LinkedIn',
    color: 'hover:text-blue-600'
  },
  { 
    href: 'https://twitter.com/aurionxsolutions', 
    icon: Twitter, 
    label: 'Twitter',
    color: 'hover:text-blue-400'
  },
  { 
    href: 'https://github.com/aurionx-solutions', 
    icon: Github, 
    label: 'GitHub',
    color: 'hover:text-foreground'
  },
];

const trustBadges = [
  { icon: Shield, text: 'Secure & Reliable' },
  { icon: Award, text: '99% Client Satisfaction' },
  { icon: Clock, text: '24/7 Support' },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-secondary/20 to-card border-t border-border/50">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Company Info - Spans 2 columns */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/" className="flex items-center gap-3 mb-6 group">
                <div className="transition-transform group-hover:scale-105">
                  <Logo height={50}/>
                </div>
              </Link>
              
              <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
                <span className="text-primary font-semibold">AurionX Solutions</span> empowers businesses 
                through innovative software development. We specialize in POS systems, management platforms, 
                and custom applications that drive growth.
              </p>

              {/* Trust Badges */}
              <div className="space-y-3 mb-6">
                {trustBadges.map((badge, index) => (
                  <div key={badge.text} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                      <badge.icon className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">
                      {badge.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-6 border border-accent/10">
                <h4 className="font-bold text-foreground mb-3">Stay Updated</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Get the latest updates on our services and industry insights.
                </p>
                <div className="flex space-x-2">
                  <Input 
                    placeholder="your@email.com" 
                    className="flex-1 text-sm border-accent/20 focus:border-accent"
                  />
                  <Button size="sm" className="px-4">
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="font-bold mb-6 text-foreground">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-bold mb-6 text-foreground">Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.href}>
                    <Link 
                      href={service.href} 
                      className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {service.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact & Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="font-bold mb-6 text-foreground">Get in Touch</h3>
              
              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <Mail className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <a 
                      href="mailto:info@aurionx.com" 
                      className="text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      info@aurionx.com
                    </a>
                    <p className="text-xs text-muted-foreground/70">General inquiries</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <a 
                      href="tel:+94771234567" 
                      className="text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      +94 77 123 4567
                    </a>
                    <p className="text-xs text-muted-foreground/70">24/7 Support</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-sm text-muted-foreground">
                      Colombo, Sri Lanka
                    </span>
                    <p className="text-xs text-muted-foreground/70">Local presence</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="font-semibold mb-4 text-foreground">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <Link 
                      key={social.label}
                      href={social.href} 
                      aria-label={social.label}
                      className={`w-10 h-10 bg-secondary/50 rounded-lg flex items-center justify-center text-muted-foreground ${social.color} transition-all duration-200 hover:scale-110 hover:bg-accent/10`}
                    >
                      <social.icon className="w-5 h-5" />
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-border/50 py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} AurionX Solutions. All Rights Reserved.
              </p>
              <div className="flex space-x-4 text-xs">
                <Link href="/privacy" className="text-muted-foreground hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-muted-foreground hover:text-accent transition-colors">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="text-muted-foreground hover:text-accent transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
            
            {/* <div className="flex items-center space-x-2">
              <Badge variant="outline" className="text-xs bg-accent/5 text-accent border-accent/20">
                Made with ❤️ in Sri Lanka
              </Badge>
            </div> */}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
