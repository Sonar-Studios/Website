import React, { useEffect } from "react";
import "../stylesheets/styles.css";

import LinkButton from "../components/linkButton";
import SonarStudios from "../components/sonarStudios";
import ContentCard from "../components/contentCard";
import PageHeader from "../components/pageHeader";

import logo from "../images/logo.png";
import sonaria from "../images/sonaria.png";
import dragonadventures_title from "../images/dragonadventures_title.png";
import sonaria_title from "../images/sonaria_title.png";
import captive_title from "../images/captive_title.png";
import warships_title from "../images/warships_title.png";
import sunnyshores_title from "../images/sunnyshores_title.png";
import felinesdestiny_title from "../images/felinesdestiny_title.png";

// we use a functional component for initial render because we can't use
// hooks in class components, it sucks but that's what we gotta do
export default () => {
	useEffect(() => {
		document.title = "Sonar Studios";
	}, []);

	return (
		<div>
			{/* page header */}
			<div className="header">
				<SonarStudios />
				<div className="buttons">
					<LinkButton text={"home"} />
					<LinkButton text={"careers"} />
					<LinkButton text={"contact"} />
				</div>
			</div>

			{/* homepage banner */}
			<img className="banner" src={sonaria} />

			{/* stats content */}
			<div className="content">
				<PageHeader text={"stats"} />
				<div className="grid">
					
				</div>
			</div>

			<div className="section">
				<PageHeader text={"titles"} />
				<div className="content">
				<div className="grid">
					<ContentCard
						img={dragonadventures_title}
						title={"dragon adventures"}
						body={
							"a description"
						}
					/>
					<ContentCard
						img={sonaria_title}
						title={"creatures of sonaria"}
						body={
							"a description"
						}
					/>
					<ContentCard
						img={captive_title}
						title={"captive"}
						body={
							"a description"
						}
					/>
					<ContentCard
						img={warships_title}
						title={"warships"}
						body={
							"a description"
						}
					/>
					<ContentCard
						img={sunnyshores_title}
						title={"sunny shores"}
						body={
							"a description"
						}
					/>
					<ContentCard
						img={felinesdestiny_title}
						title={"feline's destiny"}
						body={
							"a description"
						}
					/>
				</div>
				</div>
			</div>

			{/* page footer */}
			<div className="footer"></div>
		</div>
	);
};
