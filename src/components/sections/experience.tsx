import React from 'react';
import { experience } from '@/lib/data';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="bg-background py-24 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Work <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            My professional journey and contributions
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
            {experience.map((job, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b-0">
                <Card className="mb-4 overflow-hidden border-border/50 bg-card/80 shadow-sm transition-all duration-300 ease-out has-[[data-state=open]]:border-primary/20 has-[[data-state=open]]:shadow-lg">
                  <AccordionTrigger className="p-6 text-left hover:no-underline">
                    <div className="flex w-full flex-col gap-2">
                      <div className="flex items-start gap-4">
                        <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <Building className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-foreground">{job.role}</h3>
                          <p className="text-sm text-muted-foreground">{job.company}</p>
                        </div>
                      </div>
                      <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-2 pl-12 text-sm text-muted-foreground">
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
                  </AccordionTrigger>
                  <AccordionContent className="p-6 pt-0">
                    <div className="mt-4 border-t border-border pt-4">
                      <h4 className="mb-3 font-semibold text-foreground">Responsibilities & Achievements</h4>
                      <ul className="mb-6 list-disc space-y-2 pl-5 text-muted-foreground">
                        {job.description.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                      <h4 className="mb-3 font-semibold text-foreground">Skills Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill) => (
                          <Badge key={skill} variant="secondary">{skill}</Badge>
                        ))}
                      </div>
                    </div>
                  </AccordionContent>
                </Card>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Experience;
