import React, { Component } from "react";

import logo from "../images/logo.png";

interface SonarStudiosState {}
interface SonarStudiosProps {}

export default class SonarStudios extends Component<SonarStudiosProps, SonarStudiosState> {
	render() {
		return (
			<div className="badge">
				<img className="logo" src={logo} />
				<h1>SONAR STUDIOS</h1>
			</div>
		)
	}
}

