import React, { Component } from "react";

import twitter from "../images/twitter.png";
import roblox from "../images/roblox.png";
import linkedin from "../images/linkedin.png";

interface FooterState {}
interface FooterProps {}

export default class Footer extends Component<FooterProps, FooterState> {
	render() {
		return (
			<div className="footer">
				<div className="footer-content">
					<div className="footer-links">
						<a
							className="footer-button"
							href="https://www.roblox.com/groups/2919215/Sonar-Studios"
							target="_blank"
						>
							<img src={roblox} className="footer-button" />
						</a>
						<a
							className="footer-button"
							href="https://twitter.com/Sonar_Games"
							target="_blank"
						>
							<img src={twitter} className="footer-button" />
						</a>
						<a
							className="footer-button"
							href="https://www.linkedin.com/company/sonar-games/"
							target="_blank"
						>
							<img src={linkedin} className="footer-button" />
						</a>
					</div>
					<div className="footer-legal">© 2021 Sonar Studios LLC</div>
				</div>
			</div>
		);
	}
}
