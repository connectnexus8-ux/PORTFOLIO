'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, ChevronDown } from 'lucide-react';
import { personalInfo } from '@/lib/data';

const Hero = () => {
  const [animatedTitle, setAnimatedTitle] = useState('');
  const fullTitle = personalInfo.title;

  // Reset animation when title changes
  useEffect(() => {
    setAnimatedTitle('');
  }, [fullTitle]);
  
  useEffect(() => {
    if (animatedTitle.length < fullTitle.length) {
      const timeoutId = setTimeout(() => {
        setAnimatedTitle(fullTitle.slice(0, animatedTitle.length + 1));
      }, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [animatedTitle, fullTitle]);

  const isAnimationComplete = animatedTitle.length === fullTitle.length;

  return (
    <section className="relative flex h-screen min-h-[700px] w-full flex-col items-center justify-center overflow-hidden bg-background text-center">
      <div className="absolute inset-0 z-0 h-full w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <h1 className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text bg-[length:200%_auto] animate-gradient font-headline text-5xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl lg:text-8xl">
          {personalInfo.name}
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground sm:text-xl md:text-2xl font-code h-8">
          <span>{animatedTitle}</span>
          {isAnimationComplete && <span className="ml-1 animate-blink border-l-2 border-primary"></span>}
        </p>
        <div className="mt-8 flex justify-center gap-6">
          <Link href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-7 w-7 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
          <Link href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
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
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
         <p className="text-sm text-muted-foreground">Scroll down to discover more</p>
         <ChevronDown className="mx-auto mt-2 h-6 w-6 animate-bounce text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
