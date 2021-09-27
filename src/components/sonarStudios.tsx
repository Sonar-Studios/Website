import React, { Component } from "react";
import { Link } from "gatsby";

import logo from "../images/logo.png";

interface SonarStudiosState {}
interface SonarStudiosProps {}

export default class SonarStudios extends Component<SonarStudiosProps, SonarStudiosState> {
	render() {
		return (
			<Link className="badge badge-link link" to="/">
				<img className="badge-logo" src={logo} />
				<h1 className="badge-title">sonar studios</h1>
			</Link>
		)
	}
}
