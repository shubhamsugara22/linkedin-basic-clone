import Image from "next/image";
import { SearchIcon } from "lucide-react";

function Header() {
  return (
	<div className="flex items-center p-2 max-w-6xl mx-auto">
		<Image 
		  className="rounded-lg"
		  src="https://links.papareact.com/b3z"
		  width={40}
		  height={40}
		  alt="logo"
		  />
	  <div className="flex-l">
		<form className="flex items-center  space-x-1 bg-gray-100 rounded-md flex-l mx-2 max-w-90">
			<SearchIcon className="h-4 text-gray-600"/>
			<input
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
