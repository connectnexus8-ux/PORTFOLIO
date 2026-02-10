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

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
                    {/* Left side */}
                    <div className="lg:col-span-3 space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Hello, I'm {personalInfo.name.split(' ')[0]}!</h3>
                            <div className="space-y-4 text-muted-foreground">
                                {personalInfo.summary.split('\n').map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {aboutCards.map((card, index) => (
                                <Card key={index} className="bg-card/50 h-full">
                                    <CardContent className="p-4 flex items-start gap-4">
                                        <card.icon className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                                        <p className="text-sm text-muted-foreground">{card.text}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Right side */}
                    <div className="lg:col-span-2">
                        <Tabs defaultValue="photo" className="w-full">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="photo">Photo</TabsTrigger>
                                <TabsTrigger value="timeline">Timeline</TabsTrigger>
                            </TabsList>
                            <TabsContent value="photo">
                                <Card className="mt-4 overflow-hidden border-2 border-primary/20 shadow-lg">
                                    {profileImage && (
                                        <Image
                                            src={profileImage.imageUrl}
                                            alt={personalInfo.name}
                                            width={600}
                                            height={700}
                                            className="w-full h-auto object-cover"
                                            data-ai-hint={profileImage.imageHint}
                                        />
                                    )}
                                    <div className="p-4 bg-background/80 backdrop-blur-sm">
                                        <h4 className="font-bold text-lg">{personalInfo.name}</h4>
                                        <p className="text-sm text-muted-foreground">{personalInfo.titles[0]}</p>
                                    </div>
                                </Card>
                            </TabsContent>
                            <TabsContent value="timeline">
                                <div className="mt-4 max-h-[700px] overflow-y-auto pr-2">
                                    <div className="relative">
                                        <div className="absolute left-3 top-3 h-full w-0.5 bg-border -translate-x-1/2"></div>
                                        
                                        <div className="space-y-6 py-2">
                                            {education.map((edu, index) => (
                                                <div key={`edu-${index}`} className="relative pl-10">
                                                        <div className="absolute left-3 top-1 z-10 -translate-x-1/2">
                                                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                                            <GraduationCap className="h-4 w-4" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <p className="text-sm text-muted-foreground">{edu.period}</p>
                                                        <h4 className="text-base font-semibold mt-1">{edu.degree}</h4>
                                                        <p className="text-sm text-muted-foreground mt-1">{edu.institution}</p>
                                                    </div>
                                                </div>
                                            ))}

                                            {experience.map((job, index) => (
                                                <div key={`job-${index}`} className="relative pl-10">
                                                    <div className="absolute left-3 top-1 z-10 -translate-x-1/2">
                                                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                                            <Briefcase className="h-4 w-4" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <p className="text-sm text-muted-foreground">{job.period}</p>
                                                        <h4 className="text-base font-semibold mt-1">{job.role}</h4>
                                                        <p className="text-sm text-muted-foreground mt-1">{job.company} - {job.location}</p>
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
