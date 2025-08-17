'use client';

import { Mail, Phone, MapPin, Clock, MessageSquare, CheckCircle, Star, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import ContactForm from '@/components/contact-form';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    subtitle: 'General Inquiries',
    content: 'info@aurionx.com',
    href: 'mailto:info@aurionx.com',
    description: 'Get a response within 24 hours',
    color: 'accent'
  },
  {
    icon: Phone,
    title: 'Call Us',
    subtitle: '24/7 Support Available',
    content: '+94 77 123 4567',
    href: 'tel:+94771234567',
    description: 'Speak directly with our team',
    color: 'primary'
  },
  {
    icon: MapPin,
    title: 'Visit Our Office',
    subtitle: 'Colombo, Sri Lanka',
    content: 'Business District, Colombo 03',
    href: '#map',
    description: 'Schedule an in-person meeting',
    color: 'accent'
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp',
    subtitle: 'Quick Response',
    content: '+94 77 123 4567',
    href: 'https://wa.me/94771234567',
    description: 'Chat with us instantly',
    color: 'primary'
  }
];

const responseStats = [
  { number: '< 2hrs', label: 'Response Time' },
  { number: '24/7', label: 'Support Available' },
  { number: '100%', label: 'Confidential' },
  { number: 'Free', label: 'Consultation' }
];

export default function ContactPage() {
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
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-16 h-16 bg-primary-foreground/10 rounded-full blur-lg"
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
              📞 Get in Touch
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Let's Build Something
              <span className="block text-accent">Amazing Together</span>
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
              Ready to transform your business with cutting-edge software? 
              We're here to answer your questions and{' '}
              <span className="text-accent font-semibold">help you get started</span>.
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

      {/* Response Stats */}
      <section className="py-16 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {responseStats.map((stat, index) => (
              <motion.div 
                key={stat.label} 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
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

      {/* Main Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-gradient-to-br from-card to-secondary/20 border border-accent/10 shadow-xl">
                <CardContent className="p-8">
                  <div className="mb-8">
                    <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent border-accent/20">
                      Send us a Message
                    </Badge>
                    <h2 className="text-3xl font-bold mb-4 text-foreground">
                      Start Your Project Today
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Fill out the form below and we'll get back to you within 24 hours with a detailed proposal.
                    </p>
                  </div>
                  <ContactForm />
                  
                 
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div>
                <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent border-accent/20">
                  Contact Information
                </Badge>
                <h2 className="text-3xl font-bold mb-4 text-foreground">
                  Multiple Ways to Reach Us
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Choose the method that works best for you. Our team is available 24/7 to help with your software needs.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="group hover:shadow-lg transition-all duration-300 hover:border-accent/30 border-border/50 bg-gradient-to-br from-card to-secondary/20">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className={`flex-shrink-0 w-12 h-12 bg-${method.color}/10 rounded-xl flex items-center justify-center group-hover:bg-${method.color}/20 transition-colors duration-300`}>
                            <method.icon className={`w-6 h-6 text-${method.color}`} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-lg font-bold text-foreground">
                                {method.title}
                              </h3>
                              <Badge variant="outline" className="text-xs bg-accent/5 text-accent border-accent/20">
                                {method.subtitle}
                              </Badge>
                            </div>
                            <a
                              href={method.href}
                              className={`text-${method.color} font-medium hover:underline transition-colors duration-200 block mb-2`}
                            >
                              {method.content}
                            </a>
                            <p className="text-sm text-muted-foreground">
                              {method.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Office Hours */}
              <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border border-accent/10">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                      <Clock className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-bold text-foreground">Business Hours</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday:</span>
                      <span className="font-medium text-foreground">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday:</span>
                      <span className="font-medium text-foreground">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Emergency Support:</span>
                      <span className="font-medium text-accent">24/7 Available</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Map Section */}
      <section className="py-16 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent border-accent/20">
              Our Location
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Visit Our Colombo Office
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Located in the heart of Sri Lanka's business district, we're easily accessible for in-person meetings.
            </p>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Map Container */}
            <div className="relative aspect-video w-full bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl shadow-xl overflow-hidden border border-accent/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Interactive Map Coming Soon
                  </h3>
                  <p className="text-muted-foreground max-w-md mx-auto mb-6">
                    Our office is located in Colombo's business district, easily accessible by public transport and with ample parking.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors duration-200"
                    >
                      View on Google Maps
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Details */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                {
                  title: 'Address',
                  content: 'Business District, Colombo 03, Sri Lanka',
                  icon: MapPin
                },
                {
                  title: 'Parking',
                  content: 'Free parking available for visitors',
                  icon: CheckCircle
                },
                {
                  title: 'Public Transport',
                  content: '5 minutes walk from Fort Railway Station',
                  icon: CheckCircle
                }
              ].map((detail, index) => (
                <Card key={detail.title} className="text-center p-6 bg-gradient-to-br from-card to-secondary/20">
                  <detail.icon className="w-8 h-8 text-accent mx-auto mb-4" />
                  <h4 className="font-bold text-foreground mb-2">{detail.title}</h4>
                  <p className="text-sm text-muted-foreground">{detail.content}</p>
                </Card>
              ))}
            </div>
          </motion.div>
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
                <Star className="w-6 h-6 text-accent mr-2" />
                <span className="text-accent font-medium">Ready to Get Started?</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Let's Discuss Your Project
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Join 50+ businesses that have transformed their operations with AurionX. 
                Schedule your free consultation today.
              </p>
              
              {/* Multiple Contact Options */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+94771234567"
                  className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: +94 77 123 4567
                </a>
                <a
                  href="https://wa.me/94771234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 border-2 border-accent text-accent hover:bg-accent/5 rounded-lg transition-colors duration-200"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  WhatsApp Chat
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
