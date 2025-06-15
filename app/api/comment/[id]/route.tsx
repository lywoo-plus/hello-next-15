export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return Response.json({id});
}

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const body = await request.json();
  const {text} = body;
  
  return Response.json({id});
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const body = await request.json();
  const {text} = body;
  
  return Response.json({id});
}