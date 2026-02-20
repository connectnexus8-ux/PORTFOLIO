'use client';

import React, { useState, FormEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Loader2, Send, Linkedin, Github, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { personalInfo } from '@/lib/data';
import Link from 'next/link';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type Errors = {
    name?: string[];
    email?: string[];
    message?: string[];
};

function SubmitButton({ pending }: { pending: boolean }) {
  return (
    <Button type="submit" disabled={pending} className="w-full bg-gradient-to-r from-cyan-400 to-purple-500 text-white">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
      Send Message
    </Button>
  );
}

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setErrors({});

    const formData = new FormData(event.currentTarget);
    const validatedFields = contactSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
    });

    if (!validatedFields.success) {
        setErrors(validatedFields.error.flatten().fieldErrors);
        setLoading(false);
        return;
    }

    const { name, email, message } = validatedFields.data;
    const subject = `Message from ${name} via portfolio`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    
    const mailtoLink = `mailto:khanparadrashti@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
    setLoading(false);
    (event.target as HTMLFormElement).reset();
  };


  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
            <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Get In Touch
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
                Let's connect and discuss opportunities
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column: Contact Form */}
            <div>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">Send Me a Message</CardTitle>
                        <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" name="name" placeholder="Your name" aria-label="Your name" />
                                {errors?.name && <p className="text-sm text-destructive">{errors.name[0]}</p>}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" name="email" type="email" placeholder="your.email@example.com" aria-label="Your email" />
                                {errors?.email && <p className="text-sm text-destructive">{errors.email[0]}</p>}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea id="message" name="message" placeholder="Your message" rows={4} aria-label="Your message" />
                                {errors?.message && <p className="text-sm text-destructive">{errors.message[0]}</p>}
                            </div>
                            <SubmitButton pending={loading} />
                        </form>
                    </CardContent>
                </Card>
            </div>

            {/* Right Column: Connect & Resume */}
            <div className="space-y-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">Connect With Me</CardTitle>
                        <CardDescription>Reach out through social media or direct contact.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-3">
                        <Button asChild className="w-full justify-start h-12 text-base bg-sky-700 hover:bg-sky-600 text-white px-4">
                            <Link href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer">
                                <Linkedin className="mr-3 h-5 w-5" />
                                LinkedIn
                            </Link>
                        </Button>
                        <Button asChild variant="secondary" className="w-full justify-start h-12 text-base px-4">
                            <Link href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer">
                                <Github className="mr-3 h-5 w-5" />
                                GitHub
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
                
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">Resume</CardTitle>
                        <CardDescription>Download my resume for a detailed overview of my skills and experience.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Button asChild className="w-full bg-gradient-to-r from-cyan-400 to-purple-500 text-white">
                            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                                <Download className="mr-2 h-4 w-4" />
                                Download Resume
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
