"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  Loader2, 
  Send, 
  CheckCircle2, 
  User, 
  Mail, 
  MessageSquare, 
  Building,
  Phone,
  DollarSign,
  Sparkles
} from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  company: z.string().optional(),
  service: z.string({
    required_error: "Please select a service of interest.",
  }),
  budget: z.string().optional(),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }).max(1000, {
    message: "Message must not be longer than 1000 characters."
  }),
});

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      budget: "",
      subject: "",
      message: "",
    },
  });

  const { isSubmitting, errors } = form.formState;

  // Get current values to track progress
  const watchedFields = form.watch();
  const requiredFields = ['name', 'email', 'phone', 'service', 'subject', 'message'];
  const filledFields = requiredFields.filter(field => 
    watchedFields[field as keyof typeof watchedFields]
  ).length;
  const progressPercentage = (filledFields / requiredFields.length) * 100;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Web3Forms integration
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "5031ce40-7f53-48cc-9221-082ae57b8f16", // Replace with your actual Web3Forms access key
          name: values.name,
          email: values.email,
          phone: values.phone,
          company: values.company || "Not specified",
          service: values.service,
          budget: values.budget || "Not specified",
          subject: values.subject,
          message: values.message,
          from_name: "AurionX Contact Form",
          replyto: values.email,
          // Custom fields for better organization
          "Project Interest": values.service,
          "Budget Range": values.budget || "Not specified",
          "Company Name": values.company || "Individual",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        toast({
          title: "🎉 Message Sent Successfully!",
          description: "Thank you for contacting AurionX. We'll respond within 24 hours with a detailed proposal.",
        });
        
        // Reset form after successful submission
        form.reset();
        
        // Reset submitted state after 8 seconds to allow new submissions
        setTimeout(() => {
          setIsSubmitted(false);
          setCurrentStep(1);
        }, 8000);
      } else {
        throw new Error(result.message || "Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "❌ Submission Failed",
        description: "Something went wrong. Please try again or contact us directly at info@aurionx.com",
        variant: "destructive",
      });
    }
  }

  // Success state component
  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <CheckCircle2 className="w-20 h-20 text-accent mx-auto mb-6" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Thank You for Reaching Out! 🚀
          </h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Your message has been sent successfully to our team at AurionX Solutions.
          </p>
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-4 border border-accent/10 max-w-md mx-auto">
            <p className="text-sm text-accent font-medium">
              ⚡ Expected Response Time: Within 24 hours
            </p>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Progress Bar */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-2"
      >
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Form Progress</span>
          <span className="text-accent font-medium">{Math.round(progressPercentage)}% Complete</span>
        </div>
        <div className="w-full bg-secondary/20 rounded-full h-2">
          <motion.div
            className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-500"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
          />
        </div>
      </motion.div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Personal Information Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                <User className="w-4 h-4 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Personal Information</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>Full Name *</span>
                    </FormLabel>
                    <FormControl>
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Input 
                          placeholder="Your full name" 
                          className="border-accent/20 focus:border-accent transition-colors duration-200" 
                          {...field} 
                        />
                      </motion.div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground flex items-center space-x-2">
                      <Mail className="w-4 h-4" />
                      <span>Email Address *</span>
                    </FormLabel>
                    <FormControl>
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Input 
                          placeholder="your@email.com" 
                          type="email" 
                          className="border-accent/20 focus:border-accent transition-colors duration-200" 
                          {...field} 
                        />
                      </motion.div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground flex items-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <span>Phone Number *</span>
                    </FormLabel>
                    <FormControl>
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Input 
                          placeholder="+94 77 123 4567" 
                          type="tel" 
                          className="border-accent/20 focus:border-accent transition-colors duration-200" 
                          {...field} 
                        />
                      </motion.div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground flex items-center space-x-2">
                      <Building className="w-4 h-4" />
                      <span>Company Name</span>
                    </FormLabel>
                    <FormControl>
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Input 
                          placeholder="Your company name" 
                          className="border-accent/20 focus:border-accent transition-colors duration-200" 
                          {...field} 
                        />
                      </motion.div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </motion.div>

          {/* Project Details Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Project Details</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">Service of Interest *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="border-accent/20 focus:border-accent">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="pos-systems">
                          <div className="flex items-center space-x-2">
                            <span>💳 POS Systems</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="vehicle-management">
                          <div className="flex items-center space-x-2">
                            <span>🚗 Vehicle Service Management</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="management-systems">
                          <div className="flex items-center space-x-2">
                            <span>📊 Management Systems</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="custom-development">
                          <div className="flex items-center space-x-2">
                            <span>⚡ Custom Development</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="hosting-maintenance">
                          <div className="flex items-center space-x-2">
                            <span>🛡️ Hosting & Maintenance</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="consultation">
                          <div className="flex items-center space-x-2">
                            <span>💬 Free Consultation</span>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground flex items-center space-x-2">
                      <DollarSign className="w-4 h-4" />
                      <span>Budget Range</span>
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="border-accent/20 focus:border-accent">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="under-5k">Under $5,000</SelectItem>
                        <SelectItem value="5k-15k">$5,000 - $15,000</SelectItem>
                        <SelectItem value="15k-30k">$15,000 - $30,000</SelectItem>
                        <SelectItem value="30k-50k">$30,000 - $50,000</SelectItem>
                        <SelectItem value="over-50k">Over $50,000</SelectItem>
                        <SelectItem value="discuss">Prefer to Discuss</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground flex items-center space-x-2">
                    <MessageSquare className="w-4 h-4" />
                    <span>Subject *</span>
                  </FormLabel>
                  <FormControl>
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Input 
                        placeholder="Brief description of your project" 
                        className="border-accent/20 focus:border-accent transition-colors duration-200" 
                        {...field} 
                      />
                    </motion.div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">Project Requirements *</FormLabel>
                  <FormControl>
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Textarea
                        placeholder="Tell us about your project requirements, timeline, specific features needed, and any other details that would help us understand your needs better..."
                        className="min-h-32 border-accent/20 focus:border-accent resize-none transition-colors duration-200"
                        {...field}
                      />
                    </motion.div>
                  </FormControl>
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <FormMessage />
                    <span>{field.value.length}/1000</span>
                  </div>
                </FormItem>
              )}
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button 
              type="submit" 
              disabled={isSubmitting} 
              className="w-full shadow-lg hover:shadow-xl transition-all duration-200 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
              size="lg"
            >
              <AnimatePresence mode="wait">
                {isSubmitting ? (
                  <motion.div
                    key="submitting"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex items-center"
                  >
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending Message...
                  </motion.div>
                ) : (
                  <motion.div
                    key="submit"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex items-center"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message & Get Free Quote
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center space-x-6 text-sm text-muted-foreground pt-4 border-t border-border/50"
          >
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              <span>24hr Response</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              <span>No Spam Policy</span>
            </div>
          </motion.div>
        </form>
      </Form>
    </div>
  );
}
