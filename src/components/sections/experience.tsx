import React from 'react';
import { experience } from '@/lib/data';
import { Briefcase, CheckCircle } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="bg-muted/50 py-24 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Work Experience
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            A timeline of my professional roles and responsibilities.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border"></div>
          {experience.map((job, index) => (
            <div key={index} className="group relative mb-12 flex w-full items-center">
              <div className={`flex w-1/2 items-center ${index % 2 === 0 ? 'justify-end pr-8' : 'justify-start pl-8'}`}>
                <div className={`w-full rounded-lg bg-card p-6 shadow-md transition-shadow duration-300 hover:shadow-xl ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <p className="text-sm text-muted-foreground">{job.period}</p>
                  <h3 className="text-xl font-bold text-primary">{job.role}</h3>
                  <p className="mb-4 font-semibold">{job.company} - {job.location}</p>
                  <ul className={`space-y-2 text-muted-foreground ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    {job.description.map((point, i) => (
                      <li key={i} className={`flex items-start gap-2 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                        <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-primary/70" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="absolute left-1/2 z-10 -translate-x-1/2 transform">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                  <Briefcase className="h-6 w-6" />
                </div>
              </div>
              <div className="w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
