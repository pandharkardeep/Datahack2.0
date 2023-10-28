import React from "react";
import { Link } from "react-router-dom";
// import Logo from "../images/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
	return (
		<footer>
			<div className="container footer__container">
				<article>
					<Link to="/" className="logo">
						<p className="font-bold text-xl">TANDRUST-360</p>
					</Link>
					<p>
						Consectetur non nostrud enim nostrud est culpa ullamco incididunt
						nisi. Consectetur non nostrud enim nostrud est culpa ullamco
						incididunt nisi.
					</p>
					<div className="footer__socials">
						<a
							href="https://www.linkedin.com"
							target="_blank"
							rel="noreferrer noopener"
						>
							<FaLinkedin />
						</a>
						<a
							href="/"
							target="_blank"
							rel="noreferrer noopener"
						>
							<FaFacebookF />
						</a>
						<a
							href="/"
							target="_blank"
							rel="noreferrer noopener"
						>
							<AiOutlineTwitter />
						</a>
						<a
							href="/"
							target="_blank"
							rel="noreferrer noopener"
						>
							<AiFillInstagram />
						</a>
					</div>
				</article>
				<article>
					<h4>Permalinks</h4>
					<Link to="/about">About</Link>
					<Link to="/plans">Plans</Link>
					<Link to="/contact">Contact</Link>
				</article>
				<article>
					<h4>Insights</h4>
					<Link to="/s">Blog</Link>
					<Link to="/s">Case Studies</Link>
					<Link to="/s">Events</Link>
					<Link to="/s">Communities</Link>
					<Link to="/constact">FAQs</Link>
				</article>
				<article>
					<h4>Get In Touch</h4>
					<Link to="/contact">Plans</Link>
					<Link to="/s">Trainers</Link>
				</article>
			</div>
			<div className="footer__copyright">
				<small> &copy; Aam Aadmi Python </small>
			</div>
		</footer>
	);
};

export default Footer;
