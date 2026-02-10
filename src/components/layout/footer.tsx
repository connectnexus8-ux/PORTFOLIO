import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '@/lib/data';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row md:px-6">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Venisha Kalola. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
          <Link href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
          <Link href={`mailto:${personalInfo.email}`} aria-label="Email">
            <Mail className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
