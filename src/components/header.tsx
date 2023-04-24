import React, { Component } from "react";
import SonarStudios from "./sonarStudios";
import { Link } from "gatsby";

interface HeaderState {}
interface HeaderProps {}

export default class Header extends Component<HeaderProps, HeaderState> {
	render() {
		return (
			<div className="sticky">
				<div className="ta-banner">
					<a
						className="ta-banner-title"
						href="https://twinatlas.com/"
						target="_blank"
						title="Check out Twin Atlas!"
					>
						RedManta Games And Sonar Studios Have Merged To Form
						Twin Atlas!
					</a>
				</div>
				<div className="header">
					<SonarStudios />
					<div className="header-buttons">
						<a className="header-link link" 
						href="https://twinatlas.com/careers/"
						target="_blank"
						title="Check out our opportunities!"
						>
							jobs
						</a>
						{/* <Link className="link" to="/contact">
						contact
					</Link> */}
					</div>
				</div>
			</div>
		);
	}
}
