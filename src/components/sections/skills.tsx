import React from 'react';
import { skills } from '@/lib/data';

const Skills = () => {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            My Skillset
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            A collection of technologies and tools I'm proficient with.
          </p>
        </div>

        <div className="mx-auto max-w-5xl flex flex-col items-center space-y-6">
          {skills.map((category, categoryIndex) => (
            <div key={categoryIndex} className="flex flex-wrap justify-center gap-x-6 gap-y-4">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="border-b border-foreground/50 pb-1 text-lg text-muted-foreground transition-colors hover:text-foreground hover:border-primary">
                  {skill.name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
