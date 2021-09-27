import React, { Component } from "react";
import SonarStudios from "./sonarStudios";
import { Link } from "gatsby";

interface HeaderState {}
interface HeaderProps {}

export default class Header extends Component<HeaderProps, HeaderState> {
	render() {
		return (
			<div className="header">
				<SonarStudios />
				<div className="header-buttons">
					<Link className="header-link link" to="/">
						home
					</Link>
					<Link className="header-link link" to="/jobs">
						jobs
					</Link>
					{/* <Link className="link" to="/contact">
						contact
					</Link> */}
				</div>
			</div>
		);
	}
}
