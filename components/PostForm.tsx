'use client';

import { useUser } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

function PostForm() {

	const { user } = useUser();

  return (
	<div>
		<form action="">
			<div>
				<Avatar>
					<AvatarImage />
					<AvatarFallback>
						{user?.firstName?.charAt(0)}
						{user?.lastName?.charAt(0)}
					</AvatarFallback>
				</Avatar>

				<input type="text" />
			</div>
		</form>
	  
	</div>
  )
}

export default PostForm
