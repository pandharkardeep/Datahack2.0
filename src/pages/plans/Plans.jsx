import React from "react";
import "./plans.css";
import { plans } from "../../data";
import Header from "../../components/Header";
// import HeaderImage from "../../images/header_bg_4.jpg";
import Card from "../../UI/Card";

const Plans = () => {
	return (
		<>
			<Header title="Membership Plans" image="https://th.bing.com/th/id/OIP.GOiGH5VHzH1jOGcjQJFDQgHaEl?w=301&h=186&c=7&r=0&o=5&dpr=1.1&pid=1.7">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quisquam iure, labore sed esse sapiente voluptate tenetur? Temporibus, impedit error.
			</Header>
			<section className="plans">
				<div className="container plans__container">
					{plans.map(({ id, name, desc, price, features }) => {
						return (
							<Card key={id} className="plan">
								<h3>{name}</h3>
								<small>{desc}</small>
								<h1>{`$ ${price}`}</h1>
								<h2>/mo</h2>
								<h4>Features</h4>
								{features.map(({ feature, available, index }) => {
									return (
										<p key={index} className={available ? "" : "disabled"}>
											{feature}
										</p>
									);
								})}
								<button className="btn lg">Choose Plan</button>
							</Card>
						);
					})}
				</div>
			</section>
		</>
	);
};

export default Plans;
