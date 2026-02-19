'use server';

import { z } from 'zod';
import { styleGuideReview } from '@/ai/flows/style-guide-review';

// AI Style Guide Review Action
export type ReviewState = {
  feedback?: string;
  error?: string;
};

export async function reviewStyleGuideAction(
  input: { figmaFileUri: string; styleGuide: string; }
): Promise<ReviewState> {
  if (!input.figmaFileUri || !input.styleGuide) {
    return { error: 'Please provide both a design file and a style guide.' };
  }
  try {
    const result = await styleGuideReview(input);
    return { feedback: result.feedback };
  } catch (e: any) {
    console.error(e);
    return { error: e.message || 'An unexpected error occurred during AI review.' };
  }
}
