'use client';

import { useUser } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

function PostForm() {

	const { user } = useUser();

  return (
	<div>
		<form action="">
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

				<input type="file" name="image" accept="image/*" hidden/>

				<button type="submit" hidden>
					Post
				</button>
			</div>
            
			{/* Preview conditional check */}

			<div>
				
			</div>
		</form>
	  
	</div>
  )
}

export default PostForm
