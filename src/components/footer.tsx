import React, { Component } from "react";

import twitter from "../images/twitter.png";
import roblox from "../images/roblox.png";
import linkedin from "../images/linkedin.png";

interface FooterState {}
interface FooterProps {}

const dateObj = new Date();
const dateYear = dateObj.getFullYear();

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
							title="Discover our games"
						>
							<img src={roblox} className="footer-button" />
						</a>
						<a
							className="footer-button"
							href="https://twitter.com/intent/follow?screen_name=Sonar_Games"
							target="_blank"
							title="Follow us on Twitter"
						>
							<img src={twitter} className="footer-button" />
						</a>
						<a
							className="footer-button"
							href="https://www.linkedin.com/company/sonar-games/"
							target="_blank"
							title="Join us on LinkedIn"
						>
							<img src={linkedin} className="footer-button" />
						</a>
					</div>
					<div className="footer-legal">© {dateYear} Sonar Studios LLC</div>
				</div>
			</div>
		);
	}
}
