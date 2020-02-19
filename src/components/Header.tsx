import React from 'react';
import classNames from "classnames";


const Header = () => {
	const headerCont= classNames({
		'hero': true,
		'container': true,
		'section': true,
		'is-primary': true,
	})
	return (
		<div className={headerCont}>
			<p className="title">Joshua Anderson</p>
			<p className="subtitle">Developer, entrepreneur, and curious human.</p>
		</div>
	)
}

export default Header
