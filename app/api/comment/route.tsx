// import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('query');

  const filteredComments = query ? [] : [];

  // redirect('/api/')

  return Response.json(filteredComments);
}

export async function POST(request: Request) {
  const comment = await request.json();

  const newComment = {
    id: 1,
    uid: 1,
    message: comment.message,
  };

  return new Response(JSON.stringify(newComment),{
    headers: {
      'Content-Type': 'application/json',
      status: '201'
    }
  });
}