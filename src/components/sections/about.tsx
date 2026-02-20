import React from 'react';
import { personalInfo } from '@/lib/data';

const About = () => {
    return (
        <section id="about" className="bg-muted/50 py-24 sm:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                        About Me
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Get to know my journey and what drives me
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="flex flex-col gap-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Hello, I'm {personalInfo.name.split(' ')[0]}!</h3>
                            <div className="space-y-4 text-muted-foreground">
                                {personalInfo.summary.split('\n').map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
