import React from "react";
import { Link } from "react-router-dom";
import Lottie from 'lottie-react'
import animationData from '../images/Animation - 1698482664354.json'
import Typed from 'react-typed'

const MainHeader = () => {
	return (
		<header className="main__header">
			<div className="container main__header-container">
				<div className="main__header-left">
					<h4>Fuel your fire, train your body, transform your life.</h4>
					<h1>We're here to help you reach your full  <Typed className=' font-bold text-blue-300' strings={['Potential' , 'Capabilities' , 'Potencies']} typeSpeed={200} backSpeed={140} loop/></h1>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla natus, laudantium dolores non vel repellendus autem minima veritatis nemo corrupti magnam, quam ratione, nihil at cum excepturi eos explicabo dolorem.
					</p>
					<Link to="/plans" className="btn lg">
						Get Started
					</Link>
				</div>
				<div className="main__header-right">
					<div className="main__header-circle"></div>
					<div className="main__header-image">
					<Lottie animationData={animationData}/>
					</div>
				</div>
			</div>
		</header>
	);
};

export default MainHeader;
