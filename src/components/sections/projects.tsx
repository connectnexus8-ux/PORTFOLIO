import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const Projects = () => {
    const projectImages = PlaceHolderImages.filter(img => projects.some(p => p.id === img.id));

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            A selection of my work, from UI/UX design to front-end development.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const image = projectImages.find(img => img.id === project.id);
            return (
                <Card key={project.id} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl">
                  <CardHeader>
                    {image && (
                         <div className="aspect-video overflow-hidden rounded-md border">
                            <Image
                                src={image.imageUrl}
                                alt={project.title}
                                width={600}
                                height={338}
                                data-ai-hint={image.imageHint}
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                    )}
                    <CardTitle className="mt-4">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    {project.githubUrl && (
                      <Button asChild variant="ghost">
                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </Link>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button asChild variant="link">
                        <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          Live Demo
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
