'use server';

/**
 * @fileOverview A style guide review AI agent.
 *
 * - styleGuideReview - A function that handles the style guide review process.
 * - StyleGuideReviewInput - The input type for the styleGuideReview function.
 * - StyleGuideReviewOutput - The return type for the styleGuideReview function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const StyleGuideReviewInputSchema = z.object({
  figmaFileUri: z
    .string()
    .describe(
      "A Figma file, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  styleGuide: z.string().describe('The style guide to adhere to.'),
});
export type StyleGuideReviewInput = z.infer<typeof StyleGuideReviewInputSchema>;

const StyleGuideReviewOutputSchema = z.object({
  feedback: z.string().describe('The feedback on the Figma file.'),
});
export type StyleGuideReviewOutput = z.infer<typeof StyleGuideReviewOutputSchema>;

export async function styleGuideReview(input: StyleGuideReviewInput): Promise<StyleGuideReviewOutput> {
  return styleGuideReviewFlow(input);
}

const prompt = ai.definePrompt({
  name: 'styleGuideReviewPrompt',
  input: {schema: StyleGuideReviewInputSchema},
  output: {schema: StyleGuideReviewOutputSchema},
  prompt: `You are an expert design reviewer specializing in style guide adherence.

You will use this information to review the Figma file, and provide feedback on its adherence to the style guide. Consider aspects such as color palettes, typography, spacing, and component usage.

Style Guide: {{{styleGuide}}}
Figma File: {{media url=figmaFileUri}}`,
});

const styleGuideReviewFlow = ai.defineFlow(
  {
    name: 'styleGuideReviewFlow',
    inputSchema: StyleGuideReviewInputSchema,
    outputSchema: StyleGuideReviewOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
