import Image from "next/image";
import { SearchIcon } from "lucide-react";

function Header() {
  return (
	<div className="flex">
		<Image 
		  className="rounded-lg"
		  src="https://links.papareact.com/b3z"
		  width={40}
		  height={40}
		  alt="logo"
		  />
	  <div>
		<form className="flex">
			<SearchIcon className="h-4 text-gray-600"/>
			<Input
			  type="text"
			  placeholder="Search"
			  className="bg-transparent flex-l outline-none"
			  />
		</form>
	  </div>
	</div>
  )
}

export default Header
