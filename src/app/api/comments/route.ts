import { NextRequest, NextResponse } from "next/server";
import { comments } from "./data";

export async function GET() {
    return Response.json(comments)
}

export async function POST(request: NextRequest) {

    const comment = await request.json();
    const newComment = {
        id: comments.length + 1,
        text: comment.text
    };
    comments.push(newComment);
    return NextResponse.json(comments, { status: 201 });
}