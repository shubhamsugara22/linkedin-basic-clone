'use server'

import { AddPostRequestBody } from "@/app/api/posts/route";
import { Post } from "@/mongodb/models/post";
import { currentUser } from "@clerk/nextjs/server";
import { IUser } from "@/types/user";

export default async function createPOstAction(formData: FormData) {
	const user = await currentUser()
	
	if (!user) {
		throw new Error("User not authenticated")
	}

	const postInput = formData.get("postInput") as string;
	const image = formData.get("image") as File;
	let imageUrl: string | undefined;

	if (!postInput) {
		throw new Error("post input is required");
	}

	// define user
	const userDB: IUser = {
		userId: user.id,
		userImage: user.imageUrl,
		firstName: user.firstName || "",
		lastName: user.lastName || "",
	};
    
	try {
	if (image.size > 0 ) {
		const body: AddPostRequestBody = {
			user: userDB,
			text: postInput,
			imageUrl: imageUrl || null,
		};
		await Post.create(body);
	} else {

		const body: AddPostRequestBody = {
			user: userDB,
			text: postInput,
		};
	   await Post.create(body);
	}
   }  catch (error: any ) {
	console.error("failed to create post", error);
	 throw new Error("failed to create post");
   }

	// upload image if there is one

	// create post in database


	// revalidatePath '/' - home pages
 


}