
import { NextResponse } from 'next/server';

export async function GET() {
  // Log time like the original middleware
  console.log('Time: ', Date.now());
  
  return NextResponse.json({ message: 'Birds home page' });
}
