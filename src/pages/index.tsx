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
import StatCard from "../components/statCard";

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
			<div className="banner">
				<img className="banner-image" src={sonaria} />
				<div className="banner-reel">
					<iframe
						width="800"
						height="450"
						src="https://www.youtube.com/embed/a8NFAfcND-s?autoplay=1"
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen={true}
					/>
				</div>
			</div>

			{/* stats content */}
			<div className="content">
				<PageHeader text={"stats"} />
				<StatCard stat="unique game sessions" value="420,000,000+" strong={true} />
				<div className="grid">
					<StatCard stat="collective favorites" value="1.8m+" />
					<StatCard stat="community members" value="1.4m+" />
					<StatCard stat="combined likes" value="501k+" />
					<StatCard stat="average game rating" value="86%" />
				</div>
			</div>

			<div className="section">
				<PageHeader text={"titles"} />
				<div className="content">
					<div className="grid">
						<ContentCard
							img={dragonadventures_title}
							title={"dragon adventures"}
							link={"https://www.roblox.com/games/3475397644"}
							body={
								"Hatch eggs and raise your dragons to become powerful beasts in a variety of immersive worlds"
							}
						/>
						<ContentCard
							img={sonaria_title}
							title={"creatures of sonaria"}
							link={"https://www.roblox.com/games/5233782396"}
							body={
								"Grow, fight and survive with other players as a fictional creature in the world of Sonaria"
							}
						/>
						<ContentCard
							img={captive_title}
							title={"captive"}
							link={"https://www.roblox.com/games/3388553819"}
							body={
								"Hack the computers, escape the beast, unlock the exits, and escape captivity"
							}
						/>
						<ContentCard
							img={warships_title}
							title={"warships"}
							link={"https://www.roblox.com/games/334218733"}
							body={
								"Set sail in massive battleships for control over the seas"
							}
						/>
						<ContentCard
							img={sunnyshores_title}
							title={"sunny shores"}
							link={"https://www.roblox.com/games/7071201807"}
							body={
								"Build your dream home, dress up, party with friends and more in our tropical island city"
							}
						/>
						<ContentCard
							img={felinesdestiny_title}
							title={"feline's destiny"}
							link={"https://www.roblox.com/games/2586423667"}
							body={
								"Explore a rainforest, survive disasters and roleplay with friends as a wild cat"
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
