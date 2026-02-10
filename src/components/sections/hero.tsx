import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo } from '@/lib/data';

const Hero = () => {
  return (
    <section className="relative flex h-[calc(100vh-5rem)] min-h-[600px] w-full items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background"></div>
      <div className="container relative z-10 mx-auto px-4 text-center md:px-6">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          {personalInfo.name}
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground sm:text-xl md:text-2xl">
          {personalInfo.title}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg">
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#contact">Contact Me</Link>
          </Button>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{personalInfo.location}</span>
            </div>
            <a href={`tel:${personalInfo.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
                <Phone className="h-4 w-4" />
                <span>{personalInfo.phone}</span>
            </a>
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
                <Mail className="h-4 w-4" />
                <span>{personalInfo.email}</span>
            </a>
        </div>
        <div className="mt-6 flex justify-center gap-6">
          <Link href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-7 w-7 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
          <Link href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-7 w-7 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
