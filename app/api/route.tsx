import { cookies } from 'next/headers';
import { NextRequest } from "next/server";

export const dynamic = 'force-static';
export const revalidate = 10; // After 10 seconds new data will be fetched, after a request

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);

  requestHeaders.get('Authorization')

  const cookieStore = await cookies();
  cookieStore.set('resultPerPage', '20')
  const resultPerPage = cookieStore.get('resultPerPage');
  // console.log(resultPerPage);

  return new Response('Profile api data', {
    headers: {
      'Content-Type': 'text/html',
    }
  })
}