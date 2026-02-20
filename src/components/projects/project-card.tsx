'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { type Project } from '@/lib/types';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { PlaceHolderImages } from '@/lib/placeholder-images';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const isBulleted = project.description.includes('•');
  const projectImage = PlaceHolderImages.find(p => p.id === project.image);

  return (
    <Dialog>
      <DialogTrigger asChild className="h-full w-full cursor-pointer">
        <Card className="group relative flex h-full w-full flex-col justify-end overflow-hidden rounded-xl border-border/30 bg-card text-left shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-primary/50">
          {projectImage ? (
            <Image
              src={projectImage.imageUrl}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              data-ai-hint={projectImage.imageHint}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-secondary to-card"></div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          <div className="relative z-10 p-6 space-y-3">
              <h3 className="text-2xl font-bold text-white drop-shadow-md">{project.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-white/10 text-white backdrop-blur-sm border-none">{tag}</Badge>
                  ))}
              </div>

              <div className="flex items-center gap-2 text-white/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pt-2">
                  <Eye className="h-5 w-5" />
                  <span className="text-sm font-medium">View Details</span>
              </div>
          </div>
        </Card>
      </DialogTrigger>

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
