import React from 'react';
import { achievements } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Trophy } from 'lucide-react';

const Achievements = () => {
  return (
    <section id="achievements" className="bg-muted/20 py-24 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Achievements
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            A few of my proudest accomplishments.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, index) => (
            <Card key={index} className="flex flex-col bg-card/50 border-border/50 transition-all hover:shadow-lg hover:border-primary/30">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription className="text-base text-muted-foreground">{item.description}</CardDescription>
                <p className="pt-2 text-sm text-muted-foreground">{item.year}</p>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
