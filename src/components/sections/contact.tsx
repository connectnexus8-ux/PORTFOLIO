'use client';

import React, { useEffect, useRef, useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { sendEmailAction, type ContactState } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Send, Linkedin, Github, Mail, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { personalInfo } from '@/lib/data';
import Link from 'next/link';

const initialState: ContactState = { success: false };

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="w-full bg-gradient-to-r from-cyan-400 to-purple-500 text-white">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
      Send Message
    </Button>
  );
}

const Contact = () => {
  const [state, formAction] = useActionState(sendEmailAction, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (state.success) {
      toast({
        title: 'Success!',
        description: state.message,
      });
      formRef.current?.reset();
    } else if (state.message && (state.errors?.email || state.errors?.message || state.errors?.name)) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Please correct the errors and try again.',
      });
    }
  }, [state, toast]);

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
                        <form ref={formRef} action={formAction} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" name="name" placeholder="Your name" aria-label="Your name" />
                                {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name[0]}</p>}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" name="email" type="email" placeholder="your.email@example.com" aria-label="Your email" />
                                {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email[0]}</p>}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea id="message" name="message" placeholder="Your message" rows={4} aria-label="Your message" />
                                {state.errors?.message && <p className="text-sm text-destructive">{state.errors.message[0]}</p>}
                            </div>
                            <SubmitButton />
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
                    <CardContent className="space-y-4">
                        <Link href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer">
                            <Card className="p-4 flex items-center gap-4 hover:bg-muted/50 transition-colors cursor-pointer">
                                <Linkedin className="h-6 w-6 text-primary" />
                                <div>
                                    <h4 className="font-semibold">LinkedIn</h4>
                                </div>
                            </Card>
                        </Link>
                         <Link href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer">
                            <Card className="p-4 flex items-center gap-4 hover:bg-muted/50 transition-colors cursor-pointer">
                                <Github className="h-6 w-6 text-primary" />
                                <div>
                                    <h4 className="font-semibold">GitHub</h4>
                                </div>
                            </Card>
                        </Link>
                        <Link href={`mailto:${personalInfo.email}`}>
                            <Card className="p-4 flex items-center gap-4 hover:bg-muted/50 transition-colors cursor-pointer">
                                <Mail className="h-6 w-6 text-primary" />
                                <div>
                                    <h4 className="font-semibold">Email</h4>
                                </div>
                            </Card>
                        </Link>
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
