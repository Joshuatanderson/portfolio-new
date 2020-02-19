import React from "react";
import classNames from "classnames";
import { imageRow, image } from "../types/imageRow";

const ImageRow = ({ images }: imageRow) => {
	const classes = {
		imagesCont: classNames({
			container: true,
			columns: true,
			"is-vcentered": true,
			"is-fluid": true
		}),
		imgCont: classNames({
			imgCont: true,
			column: true,
			"has-text-centered": true
		})
	};

	const createRowItems = (images: image[]) => {
		return images.map(image => (
			<div className={classes.imgCont}>
				<a href='https://reactjs.org/'>
					<img alt='react logo' src={image.img} className='img' />
				</a>
				<p>{image.description}</p>
			</div>
		));
	};
	return <div className={classes.imagesCont}>{createRowItems(images)}</div>;
};

export default ImageRow;
