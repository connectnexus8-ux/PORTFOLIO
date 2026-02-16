'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { type Project } from '@/lib/types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const isBulleted = project.description.includes('•');
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)');
  
  const glowHsl = 'var(--primary)';

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({ x, y });
    const rotateX = (y - rect.height / 2) / 15;
    const rotateY = (x - rect.width / 2) / -15;
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`);
  };

  const handleMouseLeave = () => {
    setPosition({ x: -100, y: -100 });
    setTransform('perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)');
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transform,
        transition: 'transform 0.2s ease-out',
      }}
      className="group relative flex h-full flex-col overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, hsl(${glowHsl}, 0.3), transparent 80%)`,
        }}
      />
      <div className="relative z-10 flex h-full flex-col">
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
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
      </div>
    </div>
  );
};

export default ProjectCard;
