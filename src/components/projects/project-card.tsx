'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { type Project } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const projectImage = PlaceHolderImages.find(img => img.id === project.image);
  const isBulleted = project.description.includes('•');

  return (
    <Dialog>
      <Card className="group relative h-full w-full overflow-hidden rounded-lg border-border/50 bg-card shadow-sm transition-all duration-300 ease-out">
        {projectImage ? (
          <Image
            src={projectImage.imageUrl}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            data-ai-hint={projectImage.imageHint}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-muted/30 p-6">
             <h3 className="text-center text-2xl font-bold text-foreground">{project.title}</h3>
          </div>
        )}
        
        <div className="absolute inset-0 flex flex-col bg-black/50 p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:backdrop-blur-sm">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="secondary" className="border-0 bg-white/20 text-white">{tag}</Badge>
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <DialogTrigger asChild>
                <Button variant="outline" className="bg-transparent text-white hover:bg-white hover:text-black">
                    <Eye className="mr-2 h-4 w-4" /> View Details
                </Button>
            </DialogTrigger>
          </div>
        </div>
      </Card>

      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh] pr-4">
            <div className="py-4 text-base text-muted-foreground">
                {isBulleted ? (
                    <ul className="list-disc space-y-2 pl-5">
                    {project.description
                        .split('• ')
                        .filter((item) => item.trim() !== '')
                        .map((item, index) => (
                        <li key={index}>{item.trim().replace(/\n$/, '')}</li>
                        ))}
                    </ul>
                ) : (
                    <p>{project.description}</p>
                )}
            </div>
        </ScrollArea>
        <div className="flex justify-end gap-2 border-t pt-4">
            {project.githubUrl && (
            <Button variant="ghost" size="icon" asChild>
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
                </Link>
            </Button>
            )}
            {project.liveUrl && (
            <Button asChild>
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
                </Link>
            </Button>
            )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectCard;
