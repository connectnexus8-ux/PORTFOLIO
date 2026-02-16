'use client';

import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { type Project } from '@/lib/types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const isBulleted = project.description.includes('•');

  return (
    <Card className="group flex h-full flex-col transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="relative max-h-40 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-[1000px]">
          {isBulleted ? (
            <ul className="text-muted-foreground list-disc space-y-2 pl-5 text-sm">
              {project.description
                .split('• ')
                .filter((item) => item.trim() !== '')
                .map((item, index) => (
                  <li key={index}>{item.trim().replace(/\n$/, '')}</li>
                ))}
            </ul>
          ) : (
            <p className="text-muted-foreground">{project.description}</p>
          )}
          <div className="absolute bottom-0 h-12 w-full bg-gradient-to-t from-card to-transparent group-hover:hidden" />
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="mt-auto flex justify-end gap-2 border-t pt-6">
        {project.githubUrl && (
          <Button variant="ghost" size="icon" asChild>
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
        )}
        {project.liveUrl && (
          <Button variant="outline" asChild>
            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
