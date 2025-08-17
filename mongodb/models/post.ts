import { IUser } from "@/types/user"
import { IComment } from "./comment";
import mongoose, { Schema, Document, models, Model } from mongoose;

export interface IPostBase {
	user: IUser;
	text: string;
	imageUrl?: string;
	comments?: IComment[];
	likes?: string[];
}

export interface IPost extends IPostBase, Document {
	createdAt : Date;
	updatedAt: Date; 
}