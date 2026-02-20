'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Linkedin, Trophy } from 'lucide-react';
import Link from 'next/link';
import ScrollAnimation from '@/components/effects/scroll-animation';

const Achievements = () => {
    return (
        <section id="achievements" className="bg-muted/20 py-24 sm:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <ScrollAnimation animation="slide-in-up">
                    <div className="mx-auto mb-16 max-w-3xl text-center">
                        <h2 className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-headline text-4xl font-bold tracking-tight sm:text-5xl">
                            Certifications & Achievements
                        </h2>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animation="slide-in-up" delay={200}>
                    <div className="mx-auto max-w-3xl">
                        <Card className="overflow-hidden border-2 border-primary/10 shadow-lg transition-transform duration-300 hover:-translate-y-2">
                            <CardContent className="p-8 text-center">
                                <div className="mb-6 flex justify-center">
                                    <div className="rounded-full bg-primary/10 p-4">
                                        <Trophy className="h-10 w-10 text-primary" />
                                    </div>
                                </div>
                                <p className="text-muted-foreground">
                                    Earned multiple professional certifications in UI/UX Design, Frontend Development, and Web Technologies, demonstrating strong expertise in user-centered design, modern interface tools, and practical implementation of responsive web applications. Recognized for continuous learning, skill development, and active contribution to real-world design and development projects.
                                </p>
                                <Button asChild className="mt-8">
                                    <Link href="https://www.linkedin.com/in/drashti-khanpara-3a3b83253/details/certifications/" target="_blank" rel="noopener noreferrer">
                                        <Linkedin className="mr-2 h-4 w-4" />
                                        View on LinkedIn
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
};

export default Achievements;
