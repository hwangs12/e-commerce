import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import soybean from "../assets/soybean.jfif";

const AboutPage = () => {
	return (
		<main>
			<PageHero text={"about"} />
			<Wrapper className="page section section-center">
				<img src={soybean} alt="soybean" />
				<article>
					<div className="title">
						<h2>our story</h2>
						<div className="underline"></div>
					</div>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Ab, omnis enim. Laborum sapiente fuga explicabo
						soluta ut quia vel, ad, voluptas aut sunt consectetur
						quasi provident amet tempora qui? Enim. Aspernatur
						incidunt ipsum sed illum amet ullam itaque ipsam! Est
						quia necessitatibus velit consectetur quidem. Eum culpa
						expedita harum doloremque nesciunt reiciendis eaque in
						corporis, quam incidunt accusantium reprehenderit
						officiis! Rem ullam facere possimus harum optio expedita
						iusto deleniti tempore animi ab atque est itaque
						praesentium sit, soluta iste! Aliquid accusamus minus
						natus omnis culpa alias quisquam laboriosam eos dolorum.
					</p>
				</article>
			</Wrapper>
		</main>
	);
};

const Wrapper = styled.section`
	display: grid;
	gap: 4rem;
	img {
		width: 100%;
		display: block;
		border-radius: var(--radius);
		height: 500px;
		object-fit: cover;
	}
	p {
		line-height: 2;
		max-width: 45em;
		margin: 0 auto;
		margin-top: 2rem;
		color: var(--clr-grey-5);
	}
	.title {
		text-align: left;
	}
	.underline {
		margin-left: 0;
	}
	@media (min-width: 992px) {
		grid-template-columns: 1fr 1fr;
	}
`;
export default AboutPage;
