import React, { useEffect } from "react";
import Banner from "../components/banner";
import Card from "../components/card";
import Footer from "../components/footer";
import Header from "../components/header";
import PageHeader from "../components/pageHeader";
import "../stylesheets/styles.css";

import chalupa from "../images/chalupa.png";

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

				<Banner video={false} />

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

					<div className="grid">
						<Card
							img={chalupa}
							title={"Gameplay Engineer"}
							link={
								"https://sonar-studios.homerun.co/gameplay-engineer-sr-jr"
							}
							body={
								"Work on amazing things with Sonar Studios. Filler text that must be updated."
							}
						/>
						<Card
							img={chalupa}
							title={"Systems Engineer"}
							link={
								"https://sonar-studios.homerun.co/systems-engineer-sr-jr"
							}
							body={
								"Work on amazing things with Sonar Studios. Filler text that must be updated."
							}
						/>
						<Card
							img={chalupa}
							title={"3D General Artist"}
							link={
								"https://sonar-studios.homerun.co/3d-general-artist"
							}
							body={
								"Work on amazing things with Sonar Studios. Filler text that must be updated."
							}
						/>
						<Card
							img={chalupa}
							title={"3D Animator"}
							link={
								"https://sonar-studios.homerun.co/3d-animator"
							}
							body={
								"Work on amazing things with Sonar Studios. Filler text that must be updated."
							}
						/>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};
