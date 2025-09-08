import { connectDB } from "@/mongodb/db";
import { NextResponse } from "next/server";
import { Post } from "@/mongodb/models/post";

export async function GET (
	request: Request,
	params: { params : { post_id: string } }

) {
	await connectDB();

	try {
		const post = await Post.findById(params.post_id);
		
		if (!post) {
			return NextResponse.json({ error: "Post not found" }, { status: 404 });
	}
	return NextResponse.json(post);
} catch (error) {
	return NextResponse.json(
		{ error: "An error accoured while trying to fetch post" }, 
		{ status: 500 }
	);
 }
}

export async function DELETE (
	request: Request,
	{ params }: { params : { post_id: string } }
) {
	auth.protect();
}