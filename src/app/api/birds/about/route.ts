
import { NextResponse } from 'next/server';

// Middleware equivalent - logging time
function logTime() {
  console.log('Time: ', Date.now());
}

export async function GET() {
  logTime();
  return NextResponse.json({ message: 'About birds' });
}
