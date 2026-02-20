import React from 'react';
import { skills } from '@/lib/data';
import { CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { CodeXml, GitFork, Microscope, Palette, ServerCog, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import AnimatedSkillCard from '@/components/ui/animated-skill-card';

const iconMap: Record<string, React.ElementType> = {
    'UX & Research': Microscope,
    'Design': Palette,
    'Frontend': CodeXml,
    'Development': ServerCog,
    'Tools & Collaboration': GitFork,
    'Collaboration': Users,
};

const colorCycle = [
    {
        text: 'text-primary',
        bg: 'bg-primary',
        hsl: 'var(--primary)',
    },
    {
        text: 'text-accent',
        bg: 'bg-accent',
        hsl: 'var(--accent)',
    },
    {
        text: 'text-pink-500',
        bg: 'bg-pink-500',
        hsl: '336 83% 61%',
    },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            My Skillset
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            A collection of technologies and tools I'm proficient with.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((category, index) => {
            const Icon = iconMap[category.title] ?? CodeXml;
            const { text: textColor, bg: dotColor, hsl } = colorCycle[index % colorCycle.length];
            
            return (
              <AnimatedSkillCard key={index} glowHsl={hsl}>
                <CardHeader className="flex flex-row items-center gap-4 pb-4">
                  <div className={cn("flex h-10 w-10 items-center justify-center rounded-lg bg-background", textColor)}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className={cn("font-headline text-lg", textColor)}>{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center gap-3">
                        <span className={cn("h-2 w-2 rounded-full", dotColor)}></span>
                        <span className="text-base text-muted-foreground">{skill.name}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </AnimatedSkillCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
