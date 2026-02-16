'use client';

import React, { useState } from 'react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import ProjectTerminal from '@/components/projects/project-terminal';
import { projects } from '@/lib/data';
import ProjectCard from '@/components/projects/project-card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


const Projects = () => {
  const [isTerminalMode, setIsTerminalMode] = useState(false);

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            My <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Showcasing my technical skills and creativity
          </p>
        </div>

        <div className="flex items-center justify-center space-x-2 mb-12">
          <Label htmlFor="terminal-mode">Terminal Mode</Label>
          <Switch
            id="terminal-mode"
            checked={isTerminalMode}
            onCheckedChange={setIsTerminalMode}
          />
        </div>

        <div>
          {isTerminalMode ? (
            <ProjectTerminal onExit={() => setIsTerminalMode(false)} />
          ) : (
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto"
            >
              <div className="flex justify-end gap-2 mb-4">
                <CarouselPrevious className="hidden sm:flex !relative !top-auto !left-auto !translate-y-0" />
                <CarouselNext className="hidden sm:flex !relative !top-auto !right-auto !translate-y-0" />
              </div>
              <CarouselContent className="-ml-8">
                {projects.map((project, index) => {
                  return (
                    <CarouselItem key={index} className="pl-8 md:basis-1/2 lg:basis-1/3">
                      <div className="h-full">
                          <ProjectCard project={project} />
                      </div>
                    </CarouselItem>
                  )
                })}
              </CarouselContent>
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
