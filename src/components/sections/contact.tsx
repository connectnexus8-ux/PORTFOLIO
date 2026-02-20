'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Linkedin, Github } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { personalInfo } from '@/lib/data';
import Link from 'next/link';
import ScrollAnimation from '@/components/effects/scroll-animation';

const Contact = () => {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollAnimation animation="slide-in-up">
            <div className="text-center mb-16">
                <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Get In Touch
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Let's connect and discuss opportunities
                </p>
            </div>
        </ScrollAnimation>

        <ScrollAnimation animation="slide-in-up" delay={200}>
            <div className="max-w-lg mx-auto">
                <div className="space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl">Connect With Me</CardTitle>
                            <CardDescription>Reach out through social media.</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-3">
                            <Button asChild className="w-full justify-start h-12 text-base bg-sky-700 hover:bg-sky-600 text-white px-4">
                                <Link href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer">
                                    <Linkedin className="mr-3 h-5 w-5" />
                                    LinkedIn
                                </Link>
                            </Button>
                            <Button asChild variant="secondary" className="w-full justify-start h-12 text-base px-4">
                                <Link href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer">
                                    <Github className="mr-3 h-5 w-5" />
                                    GitHub
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Contact;
