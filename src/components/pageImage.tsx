import React, { Component } from "react";

interface PageImageState {}
interface PageImageProps {
	icon: string;
}

export default class PageImage extends Component<
	PageImageProps,
	PageImageState
> {
	render() {
		return (
			<div className="page-center">
				<img className="page-image" src={this.props.icon} />
			</div>
		);
	}
}
