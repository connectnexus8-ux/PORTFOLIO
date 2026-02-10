import React from 'react';
import { personalInfo } from '@/lib/data';

const About = () => {
  return (
    <section id="about" className="bg-muted/50 py-24 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Bridging Design & Code
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {personalInfo.summary}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
