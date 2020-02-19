import React from "react";
import classNames from "classnames";

import "./About.sass";
import reactLogo from "../assets/react-logo.png";
import tsLogo from "../assets/ts-logo.png";
import bulmaLogo from "../assets/bulma-logo.png";
import { image } from "../types/imageRow";
import ImageRow from "./ImageRow";

const About = () => {
	const classes = {
		aboutCont: classNames({
			section: true
		}),
		text: classNames({
			"is-size-5": true
		}),
		textCont: classNames({
			container: true,
			"has-text-centered": true,
			"is-fluid": true,
			textCont: true
		})
	};
	const images: image[] = [
		{
			description: "IMHO, the best JS framework",
			img: reactLogo,
			link: "https://reactjs.org/"
		},
		{
			description: "Javascript without insanity",
			img: tsLogo,
			link: "https://www.typescriptlang.org/"
		},
		{
			description: "A simple, modern CSS framework",
			img: bulmaLogo,
			link: "https://bulma.io/"
		}
	];

	return (
		<div className={classes.aboutCont}>
			<div className={classes.textCont}>
				<p className={classes.text}>Technologies I love right now:</p>
			</div>
			<ImageRow images={images} />
			{/* interests row (bookify, rock climbing, reading) */}
		</div>
	);
};

export default About;
