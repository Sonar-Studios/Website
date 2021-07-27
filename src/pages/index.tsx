import React, { useEffect } from "react";
import "../stylesheets/styles.css";

export default () => {
	useEffect(() => {
		document.title = "Sonar Studios";
	}, []);

	return (
		<div className="page">
			<h1 className="header">
				Hello, world!
			</h1>
		</div>
	);
};
