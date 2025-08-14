'use client';

import { useUser } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "./ui/button";
import { ImageIcon, XIcon } from "lucide-react";
import { useRef, useState } from "react";

function PostForm() {
    const ref =useRef<HTMLFormElement>(null);
	const fileInputRef = useRef<HTMLInputElement>(null);

	const { user } = useUser();
	const [preview , setPreview ] = useState<string | null>(null);

	const handleImageChange = ( event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			setPreview(URL.createObjectURL(file));
		}
	};

	

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
				type="text" 
				name="postInput"
				placeholder="Start writing a post..."
				className="flex-1 outline-none rounded-full py-3 px-4 border"
				/>

				<input 
				ref={fileInputRef}
				type="file" 
				name="image" 
				accept="image/*" 
				hidden
				onChange={handleImageChange}
				/>

				<button type="submit" hidden>
					Post
				</button>
			</div>
            
			{/* Preview conditional check */}
			{preview && (
				<div className="mt-3">
					<img src={preview} alt="Preview" className="w-full object-cover"/>
				</div>
			)}

			<div>
				<Button type="button" onClick={() => fileInputRef.current?.click()}>
					<ImageIcon className="mr-2" size={16} color="currentColor"/>
					{preview ? "Change" : "Add" } Image
				</Button>

				{/* Add a remove preview button */}

				{preview && (
				<Button variant="outline">
					<XIcon className="mr-2" size={16} color="currentColor" />
					Remove Image
				</Button>
			
			)}

			</div>
		</form>
	  
	</div>
  )
}

export default PostForm
