'use client';

import React, { useState } from 'react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import ProjectTerminal from '@/components/projects/project-terminal';
import { projects } from '@/lib/data';
import ProjectCard from '@/components/projects/project-card';
import ScrollAnimation from '@/components/effects/scroll-animation';

const Projects = () => {
  const [isTerminalMode, setIsTerminalMode] = useState(true);

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollAnimation animation="slide-in-up">
            <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-headline text-4xl font-bold tracking-tight sm:text-5xl">
                My Projects
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
                Showcasing my technical skills and creativity
            </p>
            </div>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-in" delay={200}>
            <div className="flex items-center justify-center space-x-2 mb-12">
            <Label htmlFor="terminal-mode">Terminal Mode</Label>
            <Switch
                id="terminal-mode"
                checked={isTerminalMode}
                onCheckedChange={setIsTerminalMode}
            />
            </div>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-in" delay={400}>
            <div>
            {isTerminalMode ? (
                <ProjectTerminal onExit={() => setIsTerminalMode(false)} />
            ) : (
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <div key={index} className="h-[400px]">
                    <ProjectCard project={project} />
                    </div>
                ))}
                </div>
            )}
            </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Projects;
