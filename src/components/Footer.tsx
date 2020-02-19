import React from "react";
import classNames from "classnames";
import './Footer.sass';

const Footer = () => {
	const classes = {
		content: classNames({
			content: true,
			"has-text-centered": true
		})
	};
	return (
		<footer className='footer'>
			<div className={classes.content}>
				<a href='https://github.com/Joshuatanderson/portfolio-new'>
					View the code for this site
				</a>
			</div>
		</footer>
	);
};

export default Footer;
