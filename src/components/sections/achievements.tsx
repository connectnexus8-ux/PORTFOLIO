import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

const Achievements = () => {
  return (
    <section id="achievements" className="bg-muted/20 py-24 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="font-headline text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Certifications & Achievements
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-6 text-center">
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
                Earned multiple professional certifications in UI/UX Design, Frontend Development, and Web Technologies, demonstrating strong expertise in user-centered design, modern interface tools, and practical implementation of responsive web applications. Recognized for continuous learning, skill development, and active contribution to real-world design and development projects.
              </p>
              <Button asChild size="lg" className="group w-fit">
                <Link href="https://www.linkedin.com/in/drashti-khanpara-3a3b83253/details/certifications/" target="_blank" rel="noopener noreferrer">
                  View on LinkedIn
                  <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
