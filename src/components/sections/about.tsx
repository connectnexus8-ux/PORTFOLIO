import React from 'react';
import Image from 'next/image';
import { personalInfo, aboutCards, experience, education } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
    const profileImage = PlaceHolderImages.find(img => img.id === 'drashti-profile');

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

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-stretch">
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
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow">
                            {aboutCards.map((card, index) => (
                                <Card key={index} className="bg-card h-full">
                                    <CardContent className="p-6 flex items-center gap-4 h-full">
                                        <card.icon className="h-6 w-6 text-primary flex-shrink-0" />
                                        <p className="text-sm text-card-foreground">{card.text}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Right side */}
                    <div className="lg:col-span-2 flex">
                        <Tabs defaultValue="photo" className="w-full flex flex-col">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="photo">Photo</TabsTrigger>
                                <TabsTrigger value="timeline">Timeline</TabsTrigger>
                            </TabsList>
                            <TabsContent value="photo" className="flex-grow">
                                <Card className="mt-4 overflow-hidden border-2 border-primary/20 shadow-lg h-full flex flex-col">
                                    {profileImage && (
                                        <div className="relative w-full flex-grow min-h-[400px]">
                                            <Image
                                                src={profileImage.imageUrl}
                                                alt={personalInfo.name}
                                                fill
                                                className="object-cover"
                                                data-ai-hint={profileImage.imageHint}
                                            />
                                        </div>
                                    )}
                                    <div className="p-4 bg-background/80 backdrop-blur-sm mt-auto">
                                        <h4 className="font-bold text-lg">{personalInfo.name}</h4>
                                        <p className="text-sm text-muted-foreground">{personalInfo.titles[0]}</p>
                                    </div>
                                </Card>
                            </TabsContent>
                            <TabsContent value="timeline" className="flex-grow">
                                <div className="mt-4 relative h-full">
                                        <div className="relative p-6">
                                            <div className="absolute left-6 top-0 h-full w-px bg-border"></div>
                                            <div className="space-y-8">
                                                
                                                {education.length > 0 && (
                                                    <div className="relative pl-8">
                                                        <div className="absolute left-0 top-1.5 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-background">
                                                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-card text-primary">
                                                                <GraduationCap className="h-4 w-4" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p className="text-sm text-muted-foreground">{education[0].period}</p>
                                                            <h4 className="font-semibold mt-1">{education[0].degree}</h4>
                                                            <p className="text-sm text-muted-foreground">{education[0].institution}</p>
                                                        </div>
                                                    </div>
                                                )}

                                                {experience.map((job, index) => (
                                                    <div key={`job-${index}`} className="relative pl-8">
                                                        <div className="absolute left-0 top-1.5 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-background">
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
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
