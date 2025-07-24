import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Code, Server, Smartphone, ArrowRight, Target, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    icon: <Code className="w-10 h-10 text-primary" />,
    title: 'POS Systems',
    description: 'Offline, Cloud-based, and Mobile POS solutions tailored for your business needs.',
    link: '/services',
  },
  {
    icon: <Server className="w-10 h-10 text-primary" />,
    title: 'Management Platforms',
    description: 'Custom management support systems for various industries.',
    link: '/services',
  },
  {
    icon: <Smartphone className="w-10 h-10 text-primary" />,
    title: 'Web & Desktop Apps',
    description: 'Bespoke applications designed to streamline your operations.',
    link: '/services',
  },
];

const testimonials = [
  {
    name: 'John Doe',
    company: 'Retail Inc.',
    avatar: 'JD',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'man portrait',
    quote:
      'AurionX Solutions transformed our retail operations with their cloud-based POS system. The efficiency gains are remarkable!',
  },
  {
    name: 'Jane Smith',
    company: 'AutoCare Center',
    avatar: 'JS',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'woman portrait',
    quote:
      'The Vehicle Service Management system is a game-changer. Our workflow has never been smoother. Highly recommended.',
  },
  {
    name: 'Samuel Lee',
    company: 'MicroFin Bank',
    avatar: 'SL',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'person glasses',
    quote:
      'We needed a secure and custom microfinance system, and AurionX delivered beyond our expectations. Their support is top-notch.',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 text-center bg-card">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4 font-headline animate-fade-in-up">
              Empowering Businesses Through
              <br />
              <span className="text-primary">Smart Software Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in-up delay-200">
              POS Systems • Management Platforms • Web & Desktop Applications
            </p>
            <div className="flex justify-center gap-4 animate-fade-in-up delay-400">
              <Button asChild size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/portfolio">Our Work</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-headline">Who We Are</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              AurionX Solutions is a premier software development company dedicated to creating innovative, reliable, and scalable software. We partner with businesses to transform their operations and drive growth through technology.
            </p>
          </div>
        </section>

        {/* Key Services Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Core Services</h2>
              <p className="text-lg text-muted-foreground mt-2">Solutions built for performance and scale.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex justify-center mb-4">{service.icon}</div>
                    <CardTitle className="font-headline">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <Button variant="link" asChild className="text-primary font-semibold">
                      <Link href={service.link}>
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">What Our Clients Say</h2>
              <p className="text-lg text-muted-foreground mt-2">Trusted by businesses across industries.</p>
            </div>
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              className="w-full max-w-4xl mx-auto"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex flex-col items-center text-center p-6 aspect-auto justify-center">
                          <Avatar className="w-16 h-16 mb-4">
                            <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.dataAiHint} />
                            <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                          </Avatar>
                          <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                          <p className="font-bold font-headline">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Why Partner with AurionX?</h2>
                <p className="text-lg text-muted-foreground mb-8">We are committed to your success. Our approach is built on a foundation of expertise, reliability, and partnership.</p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      <Target className="h-6 w-6"/>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold font-headline">Custom Development</h3>
                      <p className="text-muted-foreground mt-1">Solutions perfectly tailored to your unique business requirements.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      <Users className="h-6 w-6"/>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold font-headline">Dedicated Local Support</h3>
                      <p className="text-muted-foreground mt-1">Accessible, friendly, and expert support when you need it.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                 <Image 
                    src="https://placehold.co/600x400.png" 
                    alt="Team discussing project" 
                    width={600} 
                    height={400} 
                    className="rounded-lg shadow-xl"
                    data-ai-hint="team collaboration"
                 />
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
