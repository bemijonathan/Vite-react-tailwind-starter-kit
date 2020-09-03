import React from "react";
import { Link } from "@reach/router";

export default function Nav() {
	return (
		<>
			<header className="text-gray-500 bg-gray-900 body-font">
				<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
					<Link
						to="/"
						className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
					>
						<span className="ml-3 text-xl">tailblocks</span>
					</Link>
					<nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
						<Link to="/" className="mr-5 hover:text-white">
							Home
						</Link>
						<Link to="/about" className="mr-5 hover:text-white">
							About
						</Link>
					</nav>
					<a
						href="https://github.com/bemijonathan/Vite-react-tailwind-netlify-starter-kit"
						target="_blank"
						rel="noreferrer"
						className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
					>
						GitHub
					</a>
				</div>
			</header>
		</>
	);
}
