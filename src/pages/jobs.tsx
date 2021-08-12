import React, { useEffect } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import PageHeader from "../components/pageHeader";
import "../stylesheets/styles.css";

// we use a functional component for initial render because we can't use
// hooks in class components, it sucks but that's what we gotta do
export default () => {
	useEffect(() => {
		document.title = "Sonar Jobs";
	}, []);

	return (
		<div className="page">
			<div className="page-wrap">
				<Header />

				<div className="content">
					<PageHeader text={"jobs"} />
					
				</div>
			</div>

			<Footer />
		</div>
	)
}
