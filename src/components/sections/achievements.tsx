import React from 'react';
import Link from 'next/link';

const Achievements = () => {
  return (
    <section id="achievements" className="bg-muted/20 py-24 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Certifications & Achievements
          </h2>
          <p className="text-lg leading-8 text-muted-foreground">
            Earned multiple professional certifications in UI/UX Design, Frontend Development, and Web Technologies, demonstrating strong expertise in user-centered design, modern interface tools, and practical implementation of responsive web applications. Recognized for continuous learning, skill development, and active contribution to real-world design and development projects.
          </p>
          <Link href="https://www.linkedin.com/in/drashti-khanpara-3a3b83253/details/certifications/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-muted-foreground underline-offset-4 hover:text-primary hover:underline break-all">
            https://www.linkedin.com/in/drashti-khanpara-3a3b83253/details/certifications/
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
