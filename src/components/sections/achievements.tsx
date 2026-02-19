'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Bot, Code, Cloud, Rocket } from 'lucide-react';

const certifications = [
    {
        icon: Bot,
        category: 'Data Analytics & AI',
        title: 'Introduction to Data Analytics and AI',
        issuer: 'Adani Institute of Digital Technology Management',
        date: 'Sep 2024',
        skills: ['Data Analysis', 'AI', 'Data Science', 'Python'],
        details: [
            'Learned data cleaning, visualization, and AI fundamentals',
            'Explored real-world AI applications & data-driven decision making',
        ]
    },
    {
        icon: Code,
        category: 'C# Programming – Microsoft Learning Path',
        title: 'Issued by Microsoft Learning',
        issuer: 'Microsoft Learning',
        details: [
            'Core Programming Concepts: Write your first C# code, variables, data types, string formatting, and code conventions.',
            'Control Flow & Logic: Conditional statements (if-else, switch), boolean expressions, branching, and scope management.',
            'Loops & Data Handling: for, while, do-while loops, foreach loops with arrays, and processing data collections.',
            'Hands-on Guided Projects: GPA calculator project, student grade processing system, and array data processing challenges.',
        ]
    },
    {
        icon: Cloud,
        category: 'Google Cloud & Generative AI',
        title: 'Issued by Google Cloud Skills Boost',
        issuer: 'Google Cloud Skills Boost',
        details: [
            'Cloud Foundations: Cloud Computing Fundamentals, Infrastructure in Google Cloud, Networking & Security, Data, ML & AI in Google Cloud.',
            'Practical Cloud Skills: Load Balancing on Compute Engine, Secure network setup, App development environment setup.',
            'AI & GenAI: Introduction to Generative AI, Foundational AI tasks in GCP.',
        ]
    },
    {
        icon: Rocket,
        category: 'Google Cloud Arcade Program',
        title: 'Level 3: GenAI',
        issuer: 'Google Cloud Arcade Facilitator Program',
        skills: ['Beginner-level Google Cloud Platform & AI concepts'],
        details: []
    }
];

const Achievements = () => {
    return (
        <section id="achievements" className="bg-muted/20 py-24 sm:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <h2 className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-headline text-4xl font-bold tracking-tight sm:text-5xl">
                        📜 Certifications & Learning
                    </h2>
                </div>

                <div className="mx-auto max-w-3xl">
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full"
                    >
                        {certifications.map((cert, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="border-b-0"
                            >
                                <Card 
                                    className="mb-4 overflow-hidden border-border/50 bg-card/80 shadow-sm transition-all duration-300 ease-out has-[[data-state=open]]:border-primary/20 has-[[data-state=open]]:shadow-lg"
                                >
                                    <AccordionTrigger 
                                        className="p-6 text-left hover:no-underline"
                                    >
                                        <div className="flex w-full items-start gap-4">
                                            <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                                <cert.icon className="h-6 w-6" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg font-semibold text-foreground">{cert.category}</h3>
                                                <p className="text-sm text-muted-foreground">{cert.title}</p>
                                                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                                                    <span>{cert.issuer}</span>
                                                    {cert.date && <span>{cert.date}</span>}
                                                </div>
                                            </div>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="p-6 pt-0">
                                        <div className="mt-2 border-t border-border pt-4">
                                            {cert.details && cert.details.length > 0 && (
                                                <ul className="mb-6 list-disc space-y-2 pl-5 text-muted-foreground">
                                                    {cert.details.map((point, i) => (
                                                        <li key={i}>{point}</li>
                                                    ))}
                                                </ul>
                                            )}
                                            {cert.skills && cert.skills.length > 0 && (
                                                 <>
                                                    <h4 className="mb-3 font-semibold text-foreground">Skills</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {cert.skills.map((skill) => (
                                                            <Badge key={skill} variant="secondary">{skill}</Badge>
                                                        ))}
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </AccordionContent>
                                </Card>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
