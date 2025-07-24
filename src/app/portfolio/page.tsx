import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'Cloud POS for Retail Chains',
    industry: 'Retail',
    description: 'A comprehensive cloud-based Point-of-Sale system enabling multi-store management, real-time analytics, and inventory tracking.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'software interface',
    tags: ['POS', 'Cloud', 'React', 'Node.js'],
  },
  {
    title: 'Vehicle Service Management',
    industry: 'Auto Care',
    description: 'An all-in-one platform for auto workshops to manage job cards, customer appointments, inventory, and invoicing.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'dashboard analytics',
    tags: ['Management System', 'Desktop App', '.NET'],
  },
  {
    title: 'Microfinance Core Banking',
    industry: 'Finance',
    description: 'A secure and scalable system for microfinance institutions to manage loans, savings, and customer data.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'financial chart',
    tags: ['Web App', 'Security', 'Java'],
  },
  {
    title: 'Fixed Asset Tracker',
    industry: 'Corporate',
    description: 'A web application for tracking and managing company assets across multiple locations, with QR code integration.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'mobile application',
    tags: ['Asset Management', 'Web App', 'API'],
  },
  {
    title: 'E-commerce API Integration',
    industry: 'E-commerce',
    description: 'Integrated a legacy inventory system with a modern Shopify storefront, enabling seamless product and order synchronization.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'network diagram',
    tags: ['API Integration', 'E-commerce'],
  },
  {
    title: 'Mobile POS for Restaurants',
    industry: 'Hospitality',
    description: 'A user-friendly mobile POS application for iOS and Android, allowing staff to take orders and payments tableside.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'restaurant tablet',
    tags: ['Mobile App', 'POS', 'Flutter'],
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold font-headline">Our Work</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            A selection of projects that showcase our expertise and commitment to quality.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="relative aspect-[3/2]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      data-ai-hint={project.dataAiHint}
                    />
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <Badge variant="secondary" className="mb-2">{project.industry}</Badge>
                  <CardTitle className="font-headline mb-2">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-headline mb-4">Inspired by Our Work?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's turn your idea into a reality. We're ready for the next challenge.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
