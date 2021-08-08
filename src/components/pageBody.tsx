import React, { Component } from "react";

interface PageBodyState {}
interface PageBodyProps {
	title: string;
	text: string;
}

export default class PageBody extends Component<PageBodyProps, PageBodyState> {
	render() {
		return (
			<div className="page-section">
				<h2 className="page-title">
					{this.props.title}
				</h2>
				<div className="page-body">
					{this.props.text}
				</div>
			</div>
		)
	}
}

