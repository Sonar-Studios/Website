import React, { useEffect } from "react";
import "../stylesheets/styles.css";

import LinkButton from "../components/linkButton";
import SonarStudios from "../components/sonarStudios";
import ContentCard from "../components/contentCard";
import PageHeader from "../components/pageHeader";

import sonaria from "../images/sonaria.png";
import tacoblox from "../images/tacoblox.jpg";

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
					<LinkButton text={"games"} />
					<LinkButton text={"careers"} />
					<LinkButton text={"contact"} />
				</div>
			</div>
			
			{/* homepage banner */}
			<img className="banner" src={sonaria} />

			{/* homepage content */}
			<div className="content">
				<PageHeader text={"what's hot"} />
				<div className="grid">
					<ContentCard img={tacoblox} title={"chalupa on sale"} />
					<ContentCard img={tacoblox} title={"chalupa on sale"} />
					<ContentCard img={tacoblox} title={"chalupa on sale"} />
					<ContentCard img={tacoblox} title={"chalupa on sale"} />
					<ContentCard img={tacoblox} title={"chalupa on sale"} />
					<ContentCard img={tacoblox} title={"chalupa on sale"} />
				</div>
			</div>

			{/* page closer */}
			<div>
				
			</div>
		</div>
	);
};
