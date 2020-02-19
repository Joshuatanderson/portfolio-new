import React from "react";
import classNames from "classnames";

import "./About.sass";
import reactLogo from "../assets/react-logo.png";

const About = () => {
	const aboutCont = classNames({
		section: true
	});
	const text = classNames({
		"is-size-5": true
	});
	const imagesCont = classNames({
		'container': true,
		'level': true,
	})
	const imgCont = classNames({
		imgCont: true,
		'level-item': true,
	})

	return (
		<div className={aboutCont}>
			<div className='container'>
				<p className={text}>Technologies I love right now:</p>
			</div>
			<div className={imagesCont}>
				<div className={imgCont}>
					<img alt='react logo' src={reactLogo} className='img'></img>
				</div>
				<div className={imgCont}>
					<img alt='react logo' src={reactLogo} className='img'></img>
				</div>
				<div className={imgCont}>
					<img alt='react logo' src={reactLogo} className='img'></img>
				</div>
				<div className={imgCont}>
					<img alt='react logo' src={reactLogo} className='img'></img>
				</div>
			</div>
		</div>
	);
};

export default About;
