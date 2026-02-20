import React from 'react';
import { personalInfo, experience, education } from '@/lib/data';
import { Briefcase, GraduationCap } from 'lucide-react';

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

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
                    {/* Left side */}
                    <div className="lg:col-span-3 flex flex-col gap-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Hello, I'm {personalInfo.name.split(' ')[0]}!</h3>
                            <div className="space-y-4 text-muted-foreground">
                                {personalInfo.summary.split('\n').map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right side */}
                    <div className="lg:col-span-2">
                        <div className="relative h-full">
                                <div className="relative p-6">
                                    <h3 className="text-2xl font-bold mb-8 text-center">My Journey</h3>
                                    <div className="absolute left-6 top-16 h-[calc(100%-4rem)] w-px bg-border"></div>
                                    <div className="space-y-8">
                                        
                                        {education.map((edu, index) => (
                                            <div key={`edu-${index}`} className="relative pl-8">
                                                <div className="absolute left-0 top-1.5 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-muted/50">
                                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-card text-primary">
                                                        <GraduationCap className="h-4 w-4" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-muted-foreground">{edu.period}</p>
                                                    <h4 className="font-semibold mt-1">{edu.degree}</h4>
                                                    <p className="text-sm text-muted-foreground">{edu.institution}</p>
                                                </div>
                                            </div>
                                        ))}

                                        {experience.map((job, index) => (
                                            <div key={`job-${index}`} className="relative pl-8">
                                                <div className="absolute left-0 top-1.5 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-muted/50">
                                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-card text-primary">
                                                        <Briefcase className="h-4 w-4" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-muted-foreground">{job.period}</p>
                                                    <h4 className="font-semibold mt-1">{job.role}</h4>
                                                    <p className="text-sm text-muted-foreground">{job.company} - {job.location}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
