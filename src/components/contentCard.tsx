import React, { Component } from "react";

import LinkButton from "./linkButton";
import logo from "../images/logo.png";
import playbutton from "../images/playbutton.png";

interface ContentCardState {}
interface ContentCardProps {
	img?: string;
	title: string;
	body: string;
	link: string;
}

export default class ContentCard extends Component<
	ContentCardProps,
	ContentCardState
> {
	render() {
		return (
			<div className="card">
				{this.props.img && (
					<img className="card-image" src={this.props.img} />
				)}
				<h2 className="card-title">{this.props.title}</h2>
				<div className="card-body">{this.props.body}</div>
				<div className="card-toggle">
					<a
						className="card-button"
						href={this.props.link}
						target="_blank"
					>
						<img className="card-play" src={playbutton} />
					</a>
				</div>
			</div>
		);
	}
}
