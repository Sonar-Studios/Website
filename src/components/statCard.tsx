import React, { Component } from "react";

interface StatCardState {}
interface StatCardProps {
	stat: string;
	value: string;
	strong?: boolean;
}

export default class StatCard extends Component<StatCardProps, StatCardState> {
	render() {
		return (
			<div className="stat">
				{this.props.strong ? (
					<h1 className="stat-stronger">{this.props.value}</h1>
				) : (
					<h1 className="stat-header">{this.props.value}</h1>
				)}
				<div className="stat-body">{this.props.stat}</div>
			</div>
		);
	}
}
