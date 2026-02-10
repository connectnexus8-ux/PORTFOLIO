import React from 'react';
import StyleGuideReviewForm from '@/components/ai/style-guide-review-form';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const StyleGuideReview = () => {
  return (
    <section id="ai-review" className="bg-muted/50 py-24 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <Card className="overflow-hidden">
            <CardHeader className="bg-primary/5 text-center">
              <CardTitle className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                AI-Powered Style Guide Review
              </CardTitle>
              <CardDescription className="mt-4 text-lg leading-8 text-muted-foreground">
                Upload a design file and provide a style guide. My AI assistant will review your design for consistency and adherence.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 md:p-8">
              <StyleGuideReviewForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StyleGuideReview;
