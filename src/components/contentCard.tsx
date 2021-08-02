import React, { Component } from "react";

import logo from "../images/logo.png";

interface ContentCardState {}
interface ContentCardProps {
	img: string;
	title: string;
	body: string;
}

export default class ContentCard extends Component<ContentCardProps, ContentCardState> {
	render() {
		return (
			<div className="card">
				<img className="card-image" src={this.props.img} />
				<h2 className="card-title">{this.props.title.toUpperCase()}</h2>
				<div className="card-body">{this.props.body.toUpperCase()}</div>
			</div>
		)
	}
}

