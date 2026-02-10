
'use server';

import { z } from 'zod';
import { styleGuideReview, type StyleGuideReviewInput } from '@/ai/flows/style-guide-review';

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
const styleGuideReviewSchema = z.object({
  figmaFileUri: z.string().min(1, 'File is required.'),
  styleGuide: z.string().min(10, 'Style guide description is required.'),
});

export type ReviewState = {
  feedback?: string;
  error?: string;
};

export async function reviewStyleGuideAction(
  input: StyleGuideReviewInput
): Promise<ReviewState> {
  const validatedFields = styleGuideReviewSchema.safeParse(input);

  if (!validatedFields.success) {
    return { error: 'Invalid input. Please check your file and style guide description.' };
  }
  
  try {
    const result = await styleGuideReview(validatedFields.data);
    return { feedback: result.feedback };
  } catch (error) {
    console.error('AI Style Guide Review Error:', error);
    return { error: 'An error occurred while reviewing the style guide. Please try again.' };
  }
}
