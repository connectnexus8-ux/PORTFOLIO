import React from 'react';
import { experience } from '@/lib/data';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Work <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            My professional journey and contributions.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible defaultValue="item-0" className="w-full space-y-4">
            {experience.map((job, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="rounded-lg border border-border/50 bg-card/50 shadow-sm transition-all hover:shadow-lg data-[state=open]:border-primary/20">
                <AccordionTrigger className="p-6 text-left hover:no-underline">
                  <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Briefcase className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{job.role}</h3>
                        <p className="text-sm text-muted-foreground">{job.company}</p>
                        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                <span>{job.period}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                <span>{job.location}</span>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0">
                  <div className="space-y-6">
                    <div>
                        <h4 className="mb-3 font-semibold">Responsibilities & Achievements</h4>
                        <ul className="list-none space-y-2">
                            {job.description.map((point, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary"></span>
                                <span className="text-muted-foreground">{point}</span>
                            </li>
                            ))}
                        </ul>
                    </div>
                    {job.skills && job.skills.length > 0 && (
                      <div>
                        <h4 className="mb-3 font-semibold">Skills Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.skills.map((skill) => (
                            <Badge key={skill} variant="secondary">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Experience;
