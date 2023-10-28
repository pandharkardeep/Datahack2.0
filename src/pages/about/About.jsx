import React from "react";
import "./about.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
// import StoryImage from "../../images/about1.jpg";
// import VisionImage from "../../images/about2.jpg";
// import MissionImage from "../../images/about3.jpg";

const About = () => {
	return (
		<>
			<Header title="About us" image={HeaderImage}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Et maiores
				doloribus, eligendi incidunt modi rerum debitis consequatur molestias?
			</Header>
			<section className="about__story">
				<div className="container about__story-container">
					<div className="about__section-image">
						<img src="https://th.bing.com/th/id/OIP.X1AV09ntyjHj2LNLjX08tgHaE8?w=304&h=203&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="OurStoryImage" />
					</div>
					<div className="about__section-content">
						<h1>Our Story</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
							fugit ad neque quo, quas eius quam at sunt quod in atque nulla
							minus nam impedit tempore consectetur esse quibusdam voluptatum
							optio nemo! Aperiam veritatis delectus commodi. Minima tempora
							voluptates natus.
						</p>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Laboriosam harum corrupti quas voluptate, perferendis consectetur
							veritatis veniam, ratione, distinctio iste dignissimos alias ipsum
							minima consequuntur?
						</p>
						<p>
							Perferendis consectetur veritatis veniam, ratione, distinctio iste
							dignissimos alias ipsum minima consequuntur?
						</p>
					</div>
				</div>
			</section>

			<section className="about__vision">
				<div className="container about__vision-container">
					<div className="about__section-content">
						<h1>Our Vision</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
							fugit ad neque quo, quas eius quam at sunt quod in atque nulla
							minus nam impedit tempore consectetur esse quibusdam voluptatum.
						</p>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Laboriosam harum corrupti quas voluptate, perferendis consectetur
							veritatis veniam?
						</p>
					</div>
					<div className="about__section-image">
						<img src="https://th.bing.com/th/id/OIP.jPdN-EGuK-EK2_fvg-WaQQHaCy?w=315&h=132&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="VisionImage" />
					</div>
				</div>
			</section>

			<section className="about__mission">
				<div className="container about__mission-container">
					<div className="about__section-image">
						<img src="https://th.bing.com/th/id/OIP.xS-o580lX0wPtgraTo67IgHaEF?w=336&h=185&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="VisionImage" />
					</div>
					<div className="about__section-content">
						<h1>Our Mission</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
							fugit ad neque quo, quas eius quam at sunt quod in atque nulla
							minus nam impedit tempore consectetur esse quibusdam voluptatum.
						</p>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Laboriosam harum corrupti quas voluptate, perferendis consectetur
							veritatis veniam?
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
