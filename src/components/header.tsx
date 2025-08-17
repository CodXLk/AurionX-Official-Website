"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Logo from '@/components/logo';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { 
    href: '/services', 
    label: 'Services',
    hasDropdown: true,
    dropdownItems: [
      { href: '/services#pos', label: 'POS Systems' },
      { href: '/services#management', label: 'Management Platforms' },
      { href: '/services#development', label: 'Custom Development' },
      { href: '/services#hosting', label: 'Hosting & Support' },
    ]
  },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
];

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <motion.div 
        className="hidden lg:block bg-gradient-to-r from-logo-purple to-primary/95 text-primary-foreground py-2 text-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-3 h-3" />
              <span>+94 77 123 4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-3 h-3" />
              <span>info@aurionx.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="secondary" className="bg-accent/20 text-accent-foreground border-accent/30 text-xs">
              🎉 Free Consultation Available
            </Badge>
          </div>
        </div>
      </motion.div>

      {/* Main Header */}
      <motion.header 
        className={cn(
          "sticky top-0 z-50 w-full border-b transition-all duration-300",
          isScrolled 
            ? "bg-background/95 backdrop-blur-xl shadow-lg border-border/50" 
            : "bg-background/80 backdrop-blur-sm border-transparent"
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="container mx-auto flex h-16 lg:h-20 items-center justify-between px-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="flex items-center gap-2 group">
              <div className="transition-all duration-300 group-hover:drop-shadow-lg">
                <Logo height={isScrolled ? 45 : 50} />
              </div>
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.href} className="relative">
                {link.hasDropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className={cn(
                        'flex items-center gap-1 text-sm font-medium transition-all duration-200 hover:text-primary group relative py-2',
                        pathname.startsWith(link.href) ? 'text-primary' : 'text-muted-foreground'
                      )}>
                        {link.label}
                        <ChevronDown className="w-3 h-3 transition-transform group-data-[state=open]:rotate-180" />
                        {pathname.startsWith(link.href) && (
                          <motion.div
                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                            layoutId="activeTab"
                          />
                        )}
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center" className="w-56 mt-2">
                      {link.dropdownItems?.map((item) => (
                        <DropdownMenuItem key={item.href} asChild>
                          <Link href={item.href} className="w-full cursor-pointer">
                            {item.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    href={link.href}
                    className={cn(
                      'text-sm font-medium transition-all duration-200 hover:text-primary relative py-2 block',
                      pathname === link.href ? 'text-primary' : 'text-muted-foreground'
                    )}
                  >
                    {link.label}
                    {pathname === link.href && (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                        layoutId="activeTab"
                      />
                    )}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="outline" size="sm" asChild className="border-accent/30 hover:border-accent hover:bg-accent/5">
              <Link href="/portfolio">
                View Work
              </Link>
            </Button>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild size="sm" className="shadow-lg hover:shadow-xl transition-all duration-200">
                <Link href="/contact" className="flex items-center">
                  Get Started
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Trigger */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="relative">
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] sm:w-[400px] p-0">
              <div className="flex h-full flex-col">
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-primary/5 to-accent/5">
                  <Link 
                    href="/" 
                    className="flex items-center gap-2" 
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Logo height={40} />
                  </Link>
                  <Badge variant="outline" className="text-xs bg-accent/5 text-accent border-accent/20">
                    Menu
                  </Badge>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex-1 overflow-y-auto py-6">
                  <div className="space-y-1 px-6">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        {link.hasDropdown ? (
                          <div className="space-y-2">
                            <div className={cn(
                              'text-lg font-medium py-3 px-4 rounded-lg transition-colors',
                              pathname.startsWith(link.href) ? 'text-primary bg-primary/10' : 'text-foreground'
                            )}>
                              {link.label}
                            </div>
                            <div className="ml-4 space-y-1">
                              {link.dropdownItems?.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="block text-sm text-muted-foreground hover:text-accent py-2 px-4 rounded-md hover:bg-accent/5 transition-colors"
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <Link
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={cn(
                              'block text-lg font-medium py-3 px-4 rounded-lg transition-colors',
                              pathname === link.href 
                                ? 'text-primary bg-primary/10' 
                                : 'text-foreground hover:text-primary hover:bg-primary/5'
                            )}
                          >
                            {link.label}
                          </Link>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </nav>

                {/* Mobile CTA */}
                <motion.div 
                  className="p-6 border-t bg-gradient-to-r from-primary/5 to-accent/5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <div className="space-y-3">
                    <Button asChild className="w-full shadow-lg">
                      <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                        Get Free Consultation
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild className="w-full border-accent/30 hover:border-accent">
                      <Link href="/portfolio" onClick={() => setIsMobileMenuOpen(false)}>
                        View Our Work
                      </Link>
                    </Button>
                  </div>
                  
                  {/* Contact Info */}
                  <div className="mt-6 pt-4 border-t space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-accent" />
                      <span>+94 77 123 4567</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-accent" />
                      <span>info@aurionx.com</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </motion.header>
    </>
  );
};

export default Header;
