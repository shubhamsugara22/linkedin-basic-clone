import { IUser } from "@/types/user";
import { NextResponse } from "next/server";

export interface AddPostRequestBody {
	user: IUser;
	text: string;
	imageUrl?: string | null ;
}

export async function POST(request: Request) {

}

export async function GET(request: Request) {
	try {

	} catch (error) {
		return NextResponse.json(
			{ error:  "An error occurred while fetching posts" },
			{ status: 500 }
		);

	}

	
}