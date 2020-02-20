import React, { Fragment } from "react";
import classNames from "classnames";

import "./About.sass";
import reactLogo from "../assets/react-logo.svg";
import tsLogo from "../assets/ts-logo.png";
import bulmaLogo from "../assets/bulma-logo.png";
import bookifyLogo from "../assets/bookify-logo.png";
import reduxLogo from "../assets/redux-logo.png";
import sandersonImg from '../assets/sanderson.png';
import rockClimbingImg from '../assets/rock-climbing.png';
import { image } from "../types/imageRow";
import ImageRow from "./ImageRow";

const About = () => {
	const classes = {
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
		},
		{
			description: "State management made comprehensible",
			img: reduxLogo,
			link: "https://redux.js.org/"
		}
	];

	const interestImages: image[] = [
		{
			description: "Bookify (my startup that aims to make students readers)",
			img: bookifyLogo,
			link: "http://bookify.co/"
		},
		{
			description: "Brandon Sanderson, my current favorite author",
			img: sandersonImg,
			link: "https://www.brandonsanderson.com/where-do-i-start/"
		},
		{
			description: "Rock Climbing",
			img: rockClimbingImg,
			link: "https://www.lsuuniversityrec.com/hours"
		}
	];

	return (
		<Fragment>
			<div className='section'>
				<div className={classes.textCont}>
					<p className={classes.text}>
						Technologies I love right now:
					</p>
				</div>
				<ImageRow images={images} />
			</div>

			<div className='section'>
				<div className={classes.textCont}>
					<p className={classes.text}>Things I'm excited about:</p>
				</div>
				<ImageRow images={interestImages} />
			</div>
		</Fragment>
	);
};

export default About;
