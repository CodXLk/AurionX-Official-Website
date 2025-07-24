import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Target, ShieldCheck, Users, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const teamMembers = [
  { name: 'Alex Johnson', role: 'Founder & CEO', image: 'https://placehold.co/150x150.png', dataAiHint: 'man portrait', initials: 'AJ' },
  { name: 'Maria Garcia', role: 'Lead Developer', image: 'https://placehold.co/150x150.png', dataAiHint: 'woman smiling', initials: 'MG' },
  { name: 'Chen Wei', role: 'Project Manager', image: 'https://placehold.co/150x150.png', dataAiHint: 'person glasses', initials: 'CW' },
];

const whyChooseUsItems = [
    {
        icon: <Target className="h-8 w-8 text-primary" />,
        title: "Custom Development",
        description: "We don't use one-size-fits-all solutions. Every project is tailored to your specific needs for maximum impact."
    },
    {
        icon: <Users className="h-8 w-8 text-primary" />,
        title: "Local Support",
        description: "Our dedicated local team is always available to provide fast, friendly, and expert support when you need it most."
    },
    {
        icon: <ShieldCheck className="h-8 w-8 text-primary" />,
        title: "Secure Hosting",
        description: "Benefit from our robust and secure hosting services, ensuring your applications are safe and always online."
    },
    {
        icon: <Zap className="h-8 w-8 text-primary" />,
        title: "Affordable Pricing",
        description: "We offer competitive pricing to provide top-tier software solutions that deliver a high return on investment."
    }
]

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold font-headline">About AurionX Solutions</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Discover our mission, values, and the team driving innovation in software development.
          </p>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="https://placehold.co/600x450.png"
                alt="Office brainstorming session"
                width={600}
                height={450}
                className="rounded-lg shadow-xl"
                data-ai-hint="office meeting"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                Our mission is to empower businesses of all sizes by providing them with intelligent, high-quality, and scalable software solutions. We believe that the right technology can be a powerful catalyst for growth, efficiency, and innovation. We strive to be more than just a vendor; we aim to be a long-term technology partner committed to our clients' success.
              </p>
              <h3 className="text-2xl font-bold font-headline mt-6 mb-4">Our Values</h3>
              <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">✓ Innovation</li>
                  <li className="flex items-center gap-2">✓ Integrity</li>
                  <li className="flex items-center gap-2">✓ Customer-Centricity</li>
                  <li className="flex items-center gap-2">✓ Excellence</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Why Choose Us?</h2>
            <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
              We combine expertise with a passion for technology to deliver outstanding results.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUsItems.map(item => (
                <div key={item.title} className="text-center">
                    <div className="flex justify-center mb-4">
                        {item.icon}
                    </div>
                    <h3 className="text-xl font-bold font-headline mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground mt-2">The experts behind our success.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center">
                <CardContent className="pt-6">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={member.image} alt={member.name} data-ai-hint={member.dataAiHint} />
                    <AvatarFallback>{member.initials}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold font-headline">{member.name}</h3>
                  <p className="text-primary">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-headline mb-4">Ready to Start Your Project?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's build something amazing together. Contact us for a free consultation.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
