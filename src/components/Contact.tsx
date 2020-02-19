import React from "react";
import classNames from "classnames";
import "../app.sass";

const Contact = () => {
	const classes = {
		textCont: classNames({
			"has-text-centered": true,
			container: true
		}),
		link: classNames({
			"level-item": true,
		})
	};

	return (
		<div className='section'>
			<div className={classes.textCont}>
				<p className='subtitle'>Contact me</p>
				<div className='level'>
					<a
						className={classes.link}
						href='https://github.com/Joshuatanderson'
					>
						Github
					</a>
					<a
						href='https://www.linkedin.com/in/joshua-anderson-2aab9b89'
						className={classes.link}
					>
						Linkedin
					</a>
					<a className={classes.link} href='mailto:joshua@bookify.co'>Email</a>
				</div>
			</div>
		</div>
	);
};

export default Contact;
