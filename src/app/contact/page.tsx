import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from '@/components/contact-form';

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold font-headline">Get in Touch</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            We're here to answer your questions and help you get started.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold font-headline mb-6">Send us a Message</h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold font-headline mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-6">
                  Have a question or a project in mind? Reach out to us through any of the channels below. We look forward to hearing from you.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold font-headline">Email Us</h3>
                    <a href="mailto:contact@aurionx.com" className="text-muted-foreground hover:text-primary transition-colors">
                      contact@aurionx.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold font-headline">Call Us</h3>
                    <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold font-headline">Our Office</h3>
                    <p className="text-muted-foreground">123 Tech Avenue, Innovation City, 10100</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-card">
         <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold font-headline">Find Us Here</h2>
            </div>
            <div className="aspect-video w-full bg-muted rounded-lg shadow-md flex items-center justify-center">
                <p className="text-muted-foreground">Google Maps embed will be here.</p>
            </div>
         </div>
      </section>
    </>
  );
}
