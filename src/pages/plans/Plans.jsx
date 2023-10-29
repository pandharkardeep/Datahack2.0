import React from "react";
import "./plans.css";
import { plans } from "../../data";
import Header from "../../components/Header";
// import HeaderImage from "../../images/header_bg_4.jpg";
import Card from "../../UI/Card";

const Plans = () => {
	return (
		<>
			<Header title="Membership Plans" image="https://images.unsplash.com/photo-1593234270607-66cc705a0aaa?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
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
