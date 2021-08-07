import React, { Component } from "react";

interface ContentReelState {}
interface ContentReelProps {}

export default class ContentReel extends Component<
	ContentReelProps,
	ContentReelState
> {
	render() {
		return (
			<div className="banner-reel">
				<iframe
					width="800"
					height="450"
					src="https://www.youtube.com/embed/fR9ClX0egTc"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen={true}
				/>
			</div>
		);
	}
}
