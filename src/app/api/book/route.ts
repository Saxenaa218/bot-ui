
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Get a random book' });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    return NextResponse.json(body);
  } catch (error) {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }
}

export async function PUT() {
  return NextResponse.json({ message: 'Update the book' });
}
