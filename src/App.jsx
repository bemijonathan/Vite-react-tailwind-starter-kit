import React from "react";
import "./assets/css/output.css";
import { Router, Link } from "@reach/router";
import Home from "./views/Home";
import About from "./views/About";

function App() {
	return (
		<div>
			<nav>
				<Link to="/"> Home </Link>
				<Link to="/about"> About </Link>
			</nav>
			<Router>
				<Home path="/" />
				<About path="/about" />
			</Router>
		</div>
	);
}

export default App;
