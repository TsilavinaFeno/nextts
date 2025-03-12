import { NextResponse } from "next/server";
import { comments } from "../data";
import { redirect } from "next/navigation";

export async function GET(_request: Request, { params }: { params: { id: string } }) {
    const comment = comments.find((comment) => comment.id === parseInt(params.id))
    if (!comment) {
        redirect("/api/comments")
    }
    return NextResponse.json(comment)
}

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id
    const body = await request.json()
    const { text } = body
    const index = comments.findIndex(
        comment => comment.id === parseInt(id)
    )
    comments[index].text = text
    // console.log(index)
    return NextResponse.json(comments)
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id
    const index = comments.findIndex(
        comment => comment.id === parseInt(id)
    )
    // const deletedComment = comments[index]
    comments.splice(index, 1)
    return NextResponse.json(comments)
}