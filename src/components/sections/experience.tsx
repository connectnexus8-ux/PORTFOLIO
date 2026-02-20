'use client';

import React from 'react';
import { experience, education } from '@/lib/data';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  const timelineItems = [
    ...experience.map(item => ({ ...item, type: 'experience' as const })),
    ...education.map(item => ({ ...item, type: 'education' as const }))
  ];

  return (
    <section id="experience" className="bg-background py-24 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            My professional journey and academic milestones
          </p>
        </div>

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>
          <div className="space-y-10">
            {timelineItems.map((item, index) => (
              <div key={index} className="relative pl-12">
                <div className="absolute -left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-background border-2 border-primary">
                  {item.type === 'experience' ? (
                    <Briefcase className="h-4 w-4 text-primary" />
                  ) : (
                    <GraduationCap className="h-4 w-4 text-primary" />
                  )}
                </div>
                <div>
                    <p className="text-sm font-medium text-primary">{item.period}</p>
                    <h3 className="mt-1 text-xl font-semibold text-foreground">
                        {item.type === 'experience' ? item.role : item.degree}
                    </h3>
                    <p className="mt-1 text-base text-muted-foreground">
                        {item.type === 'experience' ? `${item.company} - ${item.location}` : item.institution}
                    </p>
                    {item.type === 'experience' && item.description && item.description.length > 0 && (
                        <div className="mt-4 text-muted-foreground">
                            <ul className="list-disc space-y-2 pl-5">
                                {item.description.map((point, i) => (
                                <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
