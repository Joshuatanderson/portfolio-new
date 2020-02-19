import React from "react";
import classNames from "classnames";
import './Header.sass'

const Header = () => {
	const headerCont = classNames({
		hero: true,
		"is-primary-gradient": true
	});
	const heroBody = classNames({
		'hero-body': true,
	})
	const titleText = classNames({
		'title': true,
		'has-text-white': true
	})
	const subtitleText = classNames({
		'subtitle': true,
		'has-text-white': true
	})
	// const headerContent;
	return (
		<div className={headerCont}>
			<div className={heroBody}>
				<p className={titleText}>Joshua Anderson</p>
				<p className={subtitleText}>
					Developer, entrepreneur, and curious human.
				</p>
			</div>
		</div>
	);
};

export default Header;
