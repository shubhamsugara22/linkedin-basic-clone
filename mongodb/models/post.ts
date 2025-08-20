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

// Define the document methods ( for each instance of a post)
interface IPostMethods {
	likePost(userId: string): Promise<void>;
	unlikePost(userId: string): Promise<void>;
	commentOnPost(comment: ICommentBase): Promise<void>;
	getAllComments(): Promise<IComment[]>;
	removePost(): Promise<void>;
}
interface IPostStatics {
	getAllPosts(): Promise<IPostDocument[]>;
}

export interface IPostDocument extends IPost , IPostMethods {} // Singular instace of a post
interface IPostModel extends IPostStatics, Model<IPostDocument> {} // all posts

const PostSchema = new Schema<IPostDocument>({
	user: {
		userId: { type: String, required: true },
		userImage: {type: String, required: true },
		firstName:{type: String, required: true },
		lastName: {type: String },
	},
	text: { type: String, required: true },
	imageUrl: { type: String },
	comments: { type: [Schema.types.ObjectId], ref: "Comment", default: [] },
	likes: { type: [String] },
});