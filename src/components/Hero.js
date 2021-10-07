import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import rawsoy from "../assets/rawsoy.jfif";
import plant from "../assets/plant.jfif";

const Hero = () => {
	return (
		<Wrapper className="section-center">
			<article className="content">
				<h1>
					Natural Protein <br /> to your door
				</h1>
				<p>
					Meat alternatives are costly, or are they? Veggie options
					have always been around us before they were vegetarian. Soy,
					after a bit of fermentation, helps digestion and builds
					muscle mass. Please let us know if you'd like one. We make
					and deliver.
				</p>
				<Link className="btn hero-btn" to="/products">
					shop now
				</Link>
			</article>
			<article className="img-container">
				<img src={rawsoy} alt="raw soy" className="main-img" />
				<img src={plant} alt="plant" className="accent-img" />
			</article>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	min-height: 60vh;
	display: grid;
	place-items: center;
	.img-container {
		display: none;
	}

	p {
		line-height: 2;
		max-width: 45em;
		margin-bottom: 2rem;
		color: var(--clr-grey-5);
		font-size: 1rem;
	}
	@media (min-width: 992px) {
		height: calc(100vh - 5rem);
		grid-template-columns: 1fr 1fr;
		gap: 8rem;
		h1 {
			margin-bottom: 2rem;
		}
		p {
			font-size: 1.25rem;
		}
		.hero-btn {
			padding: 0.75rem 1.5rem;
			font-size: 1rem;
		}
		.img-container {
			display: block;
			position: relative;
		}
		.main-img {
			width: 100%;
			height: 550px;
			position: relative;
			border-radius: var(--radius);
			display: block;
			object-fit: cover;
		}
		.accent-img {
			position: absolute;
			bottom: -2rem;
			left: 0;
			width: 250px;
			transform: translateX(-50%);
			border-radius: var(--radius);
		}
		.img-container::before {
			content: "";
			position: absolute;
			width: 10%;
			height: 80%;
			background: var(--clr-primary-9);
			bottom: 0%;
			left: -8%;
			border-radius: var(--radius);
		}
	}
`;

export default Hero;
