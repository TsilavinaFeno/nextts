export async function GET(
    request: Request,
    { params }: { params: Promise<{ team: string }> }
) {
    const team = (await params).team
    return Response.json({ data: team });
}