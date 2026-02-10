'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, ChevronDown } from 'lucide-react';
import { personalInfo } from '@/lib/data';
import ParticleBackground from '@/components/effects/particle-background';

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [animatedTitle, setAnimatedTitle] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const { titles, name, socials } = personalInfo;

  useEffect(() => {
    const handleTyping = () => {
      const currentTitle = titles[titleIndex];
      
      if (isDeleting) {
        // Deleting
        if (animatedTitle.length > 0) {
          setAnimatedTitle(currentTitle.slice(0, animatedTitle.length - 1));
        } else {
          setIsDeleting(false);
          setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }
      } else {
        // Typing
        if (animatedTitle.length < currentTitle.length) {
          setAnimatedTitle(currentTitle.slice(0, animatedTitle.length + 1));
        } else {
          // Pause at end
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    };

    const typingSpeed = isDeleting ? 50 : 100;
    const timeoutId = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timeoutId);
  }, [animatedTitle, isDeleting, titleIndex, titles]);

  return (
    <section className="relative flex h-screen min-h-[700px] w-full flex-col items-center justify-center overflow-hidden bg-background text-center">
      <ParticleBackground />
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <h1 className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text bg-[length:200%_auto] animate-gradient font-headline text-5xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl lg:text-8xl">
          {name}
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground sm:text-xl md:text-2xl font-code h-8">
          <span>{animatedTitle}</span>
          <span className="ml-1 animate-blink border-l-2 border-primary"></span>
        </p>
        <div className="mt-8 flex justify-center gap-6">
          <Link href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-7 w-7 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
          <Link href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-7 w-7 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
        </div>
        <div className="mt-10">
          <Button asChild variant="outline" size="lg" className="border-primary/50 text-primary hover:bg-primary/10 hover:text-primary">
            <Link href="#projects">
              Explore My Work
              <ChevronDown className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
         <p className="text-sm text-muted-foreground">Scroll down to discover more</p>
         <ChevronDown className="mx-auto mt-2 h-6 w-6 animate-bounce text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
