import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const servicesData = {
    "POS Systems": {
        description: "Modern, reliable Point-of-Sale systems designed to streamline your sales process, manage inventory, and enhance customer experience.",
        image: "https://placehold.co/500x350.png",
        dataAiHint: "cash register",
        features: [
            "Offline/Standalone POS: Robust functionality even without an internet connection.",
            "Cloud-based POS: Access your sales data from anywhere, anytime.",
            "Mobile POS solutions: Turn any smartphone or tablet into a powerful POS device."
        ]
    },
    "Management Support Systems": {
        description: "Powerful, custom-built management systems to optimize your business operations and provide critical insights for decision-making.",
        image: "https://placehold.co/500x350.png",
        dataAiHint: "dashboard analytics",
        features: [
            "Vehicle Service Management: Streamline workshop operations, from booking to billing.",
            "Microfinance System: Secure and efficient management of micro-lending operations.",
            "Fixed Asset Management: Track and manage your company's assets effectively.",
            "HR or Inventory Management: Custom systems to manage your workforce and stock levels."
        ]
    },
    "Custom Software Development": {
        description: "Bespoke software solutions built from the ground up to meet your unique business challenges and goals.",
        image: "https://placehold.co/500x350.png",
        dataAiHint: "code screen",
        features: [
            "Web and desktop apps: Creating powerful applications for any platform.",
            "API integration: Seamlessly connect your systems and third-party services.",
            "Legacy system upgrades: Modernize your outdated software for better performance and security."
        ]
    },
    "Hosting & Maintenance": {
        description: "Reliable hosting and proactive maintenance services to ensure your applications are always secure, fast, and available.",
        image: "https://placehold.co/500x350.png",
        dataAiHint: "server room",
        features: [
            "Cloud hosting packages (AWS, cPanel, etc.): Scalable and secure hosting solutions.",
            "System monitoring and yearly support: Proactive monitoring to prevent issues before they occur.",
            "Performance optimization and security audits to keep your systems running smoothly."
        ]
    }
}


export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold font-headline">Our Services & Solutions</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Comprehensive software solutions tailored to drive business growth and efficiency.
          </p>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Accordion type="single" collapsible defaultValue="item-0" className="w-full max-w-4xl mx-auto">
            {Object.entries(servicesData).map(([title, service], index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-2xl font-headline hover:no-underline">{title}</AccordionTrigger>
                <AccordionContent>
                  <div className="grid md:grid-cols-2 gap-8 pt-4">
                    <div>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      <ul className="space-y-4">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-center">
                        <Image
                            src={service.image}
                            alt={title}
                            width={500}
                            height={350}
                            className="rounded-lg shadow-md object-cover"
                            data-ai-hint={service.dataAiHint}
                        />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

       {/* CTA Section */}
       <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-headline mb-4">Have a Specific Requirement?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            We excel at building custom solutions. Let's discuss your project today.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Request a Quote</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
