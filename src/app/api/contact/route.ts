import { NextRequest, NextResponse } from 'next/server';
import { getDataSource } from '@/lib/database';
import { ContactSubmission } from '@/entities/ContactSubmission';

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: 'Name is required' },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string' || email.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: 'Email is required' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email.trim())) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: 'Message is required' },
        { status: 400 }
      );
    }

    if (name.trim().length > 255) {
      return NextResponse.json(
        { success: false, error: 'Name is too long (max 255 characters)' },
        { status: 400 }
      );
    }

    if (email.trim().length > 255) {
      return NextResponse.json(
        { success: false, error: 'Email is too long (max 255 characters)' },
        { status: 400 }
      );
    }

    const dataSource = await getDataSource();
    const repository = dataSource.getRepository(ContactSubmission);

    const submission = repository.create({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    });

    await repository.save(submission);

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been received. We will get back to you soon!',
        data: {
          id: submission.id,
          name: submission.name,
          email: submission.email,
          createdAt: submission.createdAt,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { success: false, error: 'Method not allowed' },
    { status: 405 }
  );
}
