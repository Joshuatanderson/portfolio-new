import React from "react";
import "./app.sass";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
	return (
		<div className='App'>
			<Header />
			<About />
			<Contact />
			<Footer/>
		</div>
	);
}

export default App;
