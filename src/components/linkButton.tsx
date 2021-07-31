import React, { Component } from "react";

interface LinkButtonState {

}

interface LinkButtonProps {
	text: string;
}

export default class LinkButton extends Component<LinkButtonProps, LinkButtonState> {
	render() {
		return (
			<button className="linkButton" key="thing">
				{this.props.text.toUpperCase()}
			</button>
		)
	}
}

