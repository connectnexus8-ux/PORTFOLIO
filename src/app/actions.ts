'use server';

import { z } from 'zod';
import { styleGuideReview } from '@/ai/flows/style-guide-review';

// Contact Form Action
const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export type ContactState = {
  message?: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  success: boolean;
};

export async function sendEmailAction(
  prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Failed to send message.',
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }
  
  console.log('New message received:');
  console.log('Name:', validatedFields.data.name);
  console.log('Email:', validatedFields.data.email);
  console.log('Message:', validatedFields.data.message);

  return {
    message: 'Your message has been sent successfully!',
    success: true,
  };
}


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
