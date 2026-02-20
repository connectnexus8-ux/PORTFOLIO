import React from 'react';
import Image from 'next/image';
import { personalInfo } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';

const About = () => {
    const profileImage = PlaceHolderImages.find(p => p.id === 'drashti-cartoon-avatar');

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

                <div className="grid lg:grid-cols-5 gap-12 items-center">
                    <div className="lg:col-span-3">
                        <h3 className="text-3xl font-bold mb-4">Hello, I'm {personalInfo.name.split(' ')[0]}!</h3>
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                            {personalInfo.summary.split('\n').map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <Card className="overflow-hidden rounded-2xl border-4 border-primary/20 shadow-lg">
                           {profileImage && (
                                <div className="relative w-full aspect-square">
                                    <Image
                                        src={profileImage.imageUrl}
                                        alt={personalInfo.name}
                                        fill
                                        className="object-cover"
                                        data-ai-hint={profileImage.imageHint}
                                    />
                                </div>
                           )}
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
