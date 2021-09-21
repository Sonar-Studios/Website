import React, { Component } from "react";
import sitebanner from "../images/sitebanner.png";

interface BannerState {}
interface BannerProps {}

export default class Banner extends Component<BannerProps, BannerState> {
	render() {
		return (
			<div className="banner">
				<img className="banner-image" src={sitebanner} />
				<div className="banner-reel">
					<iframe
						className="banner-iframe"
						width="800"
						height="450"
						src="https://www.youtube.com/embed/nRcc4F1Gem4?autoplay=1"
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen={true}
					/>
				</div>
				<div className="banner-gradient" />
				<div className="banner-darken" />
			</div>
		);
	}
}
