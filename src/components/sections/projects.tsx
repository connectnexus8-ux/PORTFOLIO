'use client';

import React, { useState } from 'react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import ProjectTerminal from '@/components/projects/project-terminal';
import ProjectGrid from '@/components/projects/project-grid';

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
          {isTerminalMode ? <ProjectTerminal onExit={() => setIsTerminalMode(false)} /> : <ProjectGrid />}
        </div>
      </div>
    </section>
  );
};

export default Projects;
