import React, { Component } from "react";
import playbutton from "../images/playbutton.png";

interface CardState {}
interface CardProps {
	img?: string;
	title: string;
	body: string;
	link: string;
}

export default class Card extends Component<CardProps, CardState> {
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
						title={"View " + this.props.title}
					>
						<img className="card-play" src={playbutton} />
					</a>
				</div>
			</div>
		);
	}
}
