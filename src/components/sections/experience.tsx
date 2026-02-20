'use client';

import React from 'react';
import { experience, education } from '@/lib/data';
import { Briefcase, GraduationCap } from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import ScrollAnimation from '@/components/effects/scroll-animation';

const Experience = () => {
  const timelineItems = [
    ...experience.map(item => ({ ...item, type: 'experience' as const })),
    ...education.map(item => ({ ...item, type: 'education' as const }))
  ];

  return (
    <section id="experience" className="bg-background py-24 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollAnimation animation="slide-in-up">
            <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Experience & Education
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
                My professional journey and academic milestones
            </p>
            </div>
        </ScrollAnimation>

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-5 top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>
          <div className="space-y-8">
            {timelineItems.map((item, index) => (
              <ScrollAnimation key={index} animation="slide-in-up" delay={100 * (index + 1)}>
                <div className="relative">
                    <div className="absolute left-5 top-0 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-background border-2 border-primary">
                    {item.type === 'experience' ? (
                        <Briefcase className="h-5 w-5 text-primary" />
                    ) : (
                        <GraduationCap className="h-5 w-5 text-primary" />
                    )}
                    </div>
                    <div className="ml-16">
                    <Card className="bg-card/50 border-border/50 transition-all duration-300 hover:shadow-primary/10 hover:border-primary/30 hover:-translate-y-1">
                        <CardHeader>
                        <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-2">
                            <div>
                            <CardTitle className="text-xl">
                                {item.type === 'experience' ? item.role : item.degree}
                            </CardTitle>
                            <CardDescription className="mt-1">
                                {item.type === 'experience' ? `${item.company} - ${item.location}` : item.institution}
                            </CardDescription>
                            </div>
                            <div className="text-sm text-muted-foreground text-left sm:text-right flex-shrink-0 pt-1">
                            {item.period}
                            </div>
                        </div>
                        </CardHeader>
                        {item.type === 'experience' && item.description && item.description.length > 0 && (
                        <CardContent>
                            <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                            {item.description.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                            </ul>
                        </CardContent>
                        )}
                    </Card>
                    </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
