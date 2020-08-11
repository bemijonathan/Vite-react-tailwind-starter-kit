import React, { useState } from "react";
import logo from "../logo.svg";

export default function componentName() {
	const [count, setCount] = useState(0);
	return (
		<>
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>Hello Vite + React!</p>
					<p>
						<button onClick={() => setCount((count) => count + 1)}>
							count is: {count}
						</button>
					</p>
					<p>
						Edit <code>App.jsx</code> and save to test HMR updates.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header>
			</div>
		</>
	);
}
