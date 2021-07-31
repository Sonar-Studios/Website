import React, { useEffect } from "react";
import "../stylesheets/styles.css";
import LinkButton from "../components/linkButton";

import sonaria from "../images/sonaria.png";

// we use a functional component for initial render because we can't use
// hooks in class components, it sucks but that's what we gotta do
export default () => {
	useEffect(() => {
		document.title = "Sonar Studios";
	}, []);

	return (
		<div>
			<div className="header">
				<LinkButton text={"home"}/>
				<LinkButton text={"games"}/>
				<LinkButton text={"contact"}/>
				<LinkButton text={"careers"}/>
			</div>
			<img className="banner" src={sonaria}>

			</img>
		</div>
	);
};
