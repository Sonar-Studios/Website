import React, { useEffect } from "react";
import Banner from "../components/banner";
import Card from "../components/card";
import Footer from "../components/footer";
import Header from "../components/header";
import PageHeader from "../components/pageHeader";
import "../stylesheets/styles.css";

import jobsbanner from "../images/jobsbanner.png";
import dreamjob from "../images/dreamjob.png";
import systemsengineer from "../images/systemsengineer.png";
import gameplayengineer from "../images/gameplayengineer.png";
import generalartist from "../images/generalartist.png";
import conceptartist from "../images/conceptartist.png";
import animator from "../images/animator.png";
import projectmanager from "../images/projectmanager.png";
import gamedesigner from "../images/gamedesigner.png";

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

				<Banner img={jobsbanner} video={false} />

				<div className="content">
					<PageHeader text={"jobs"} />

					<div className="page-section">
						<br />
						<div>
							Sonar Studios, LLC is an independent game studio
							that makes games on the Roblox platform. Founded in
							2019, our flagship games Dragon Adventures and
							Creatures of Sonaria have attracted tens of millions
							of players. Sonar Studios continues to develop
							highly innovative games, pushing the boundaries of
							Roblox’s engine to provide a highly engaging
							experience for players.
						</div>
						<br />
						<div>
							Sonar Studios is a highly innovative studio that is
							always striving to provide the best possible
							experience to both our players and developers. We
							are dedicated to making high-quality games that
							constantly test the boundaries of what the Roblox
							engine is capable of.
						</div>
						<br />
						<div>
							Sonar Studios is pushing the limits of the Roblox
							platform - and we'd like you to join us.
						</div>
					</div>

					<div className="page-section">
						<h2>You'll love</h2>
						<div>
							<ul>
								<li>Working with a diverse workforce</li>
								<li>
									Competitive salary to other full-time Roblox
									developer jobs
								</li>
								<li>
									Remote work or option to work in-person at
									our office in Las Vegas, Nevada
								</li>
							</ul>
						</div>
					</div>

					{/* for 1 job */}
					{/* <div className="container">
						<div className="container-item">
							<Card
								img={dreamjob}
								title={"Dream Job"}
								link={
									"https://sonar-studios.homerun.co/dream-job/en"
								}
								body={
									"We are currently not hiring, but we accept applications anytime! Apply for your dream job today."
								}
							/>
						</div>
					</div> */}

					{/* for multiple jobs */}
					<div className="grid">
						<Card
							img={projectmanager}
							title={"Project Manager"}
							link={
								"https://sonar-studios.homerun.co/project-manager/en"
							}
							body={
								"Take charge of a team and design innovative & unique gameplay mechanics."
							}
						/>
						<Card
							img={gameplayengineer}
							title={"Gameplay Engineer"}
							link={
								"https://sonar-studios.homerun.co/gameplay-engineer/en"
							}
							body={
								"Design the next big game feature for millions to experience and enjoy."
							}
						/>
						{/* <Card
							img={gamedesigner}
							title={"Game Designer"}
							link={
								"https://sonar-studios.homerun.co/game-designer/en"
							}
							body={
								"Document and design new features for engineers to bring to life."
							}
						/> */}
						<Card
							img={generalartist}
							title={"3D General Artist"}
							link={
								"https://sonar-studios.homerun.co/3d-artist"
							}
							body={
								"Develop and grow our art assets and integrate them into our projects."
							}
						/>
						<Card
							img={conceptartist}
							title={"2D Concept Artist"}
							link={
								"https://sonar-studios.homerun.co/concept-artist-2/en"
							}
							body={
								"Design and work with 3D artists to visualize characters and environments."
							}
						/>
						<Card
							img={animator}
							title={"3D Animator"}
							link={
								"https://sonar-studios.homerun.co/3d-animator"
							}
							body={
								"Characters, creatures, and monsters, help us make them move."
							}
						/>
						{/* <Card
							img={dreamjob}
							title={"Dream Job"}
							link={
								"https://sonar-studios.homerun.co/dream-job/en"
							}
							body={
								"Don't see your position open? Apply for your dream job and we may reach out!"
							}
						/> */}
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};
