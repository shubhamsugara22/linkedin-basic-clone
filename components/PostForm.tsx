'use client';

import { useUser } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "./ui/button";
import { ImageIcon } from "lucide-react";
import { useRef, useState } from "react";

function PostForm() {
    const ref =useRef<HTMLFormElement>(null);
	const fileInputRef = useRef<HTMLInputElement>(null);

	const { user } = useUser();
	const [preview, setPreview ] = useState(false);

	

  return (
	<div>
		<form ref={ref} action="">
			<div className="flex items-center space-x-2">
				<Avatar>
					<AvatarImage />
					<AvatarFallback>
						{user?.firstName?.charAt(0)}
						{user?.lastName?.charAt(0)}
					</AvatarFallback>
				</Avatar>

				<input
				ref={fileInputRef} 
				type="text" 
				name="postInput"
				placeholder="Start writing a post..."
				className="flex-1 outline-none rounded-full py-3 px-4 border"
				/>

				<input type="file" name="image" accept="image/*" hidden
				onChange={handleImageChange}
				/>

				<button type="submit" hidden>
					Post
				</button>
			</div>
            
			{/* Preview conditional check */}

			<div>
				<Button>
					<ImageIcon className="mr-2" size={16} color="currentColor"/>
					Add
				</Button>

				{/* Add a remove preview button */}
			</div>
		</form>
	  
	</div>
  )
}

export default PostForm
