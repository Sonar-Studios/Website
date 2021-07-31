import React, { Component } from "react";

interface PageHeaderState {

}

interface PageHeaderProps {
	text: string;
}

export default class PageHeader extends Component<PageHeaderProps, PageHeaderState> {
	render() {
		return (
			<h1 className="pageHeader">
				{this.props.text.toUpperCase()}
			</h1>
		)
	}
}

