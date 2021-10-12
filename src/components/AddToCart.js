import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
import AmountButtons from "./AmountButtons";

const AddToCart = ({ colors, stock }) => {
	const [mainColor, setMainColor] = useState(colors[0]);
	const [numberOfItems, setNumberOfItems] = useState(0);

	const chooseColor = (color) => {
		setMainColor(color);
	};

	const increaseItems = (e) => {
		setNumberOfItems((state) =>
			state < parseInt(stock) ? state + 1 : parseInt(stock)
		);
	};

	const decreaseItems = () => {
		setNumberOfItems((state) => (state > 0 ? state - 1 : 0));
	};

	return (
		<Wrapper>
			<div className="colors">
				<span>colors :</span>
				<div>
					{colors.map((color, index) => {
						return (
							<button
								key={index}
								className={
									mainColor === color
										? "active color-btn"
										: "color-btn"
								}
								style={{ backgroundColor: color }}
								onClick={() => chooseColor(color)}
							>
								{mainColor === color && <FaCheck />}
							</button>
						);
					})}
				</div>
			</div>
			<div className="btn-container">
				<AmountButtons
					increaseItems={increaseItems}
					decreaseItems={decreaseItems}
					numberOfItems={numberOfItems}
				/>
				<Link className="btn" to="/cart">
					add to cart
				</Link>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	margin-top: 2rem;
	.colors {
		display: grid;
		grid-template-columns: 125px 1fr;
		align-items: center;
		margin-bottom: 1rem;
		span {
			text-transform: capitalize;
			font-weight: 700;
		}
		div {
			display: flex;
		}
	}
	.color-btn {
		display: inline-block;
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 50%;
		background: #222;
		margin-right: 0.5rem;
		border: none;
		cursor: pointer;
		opacity: 0.5;
		display: flex;
		align-items: center;
		justify-content: center;
		svg {
			font-size: 0.75rem;
			color: var(--clr-white);
		}
	}
	.active {
		opacity: 1;
	}
	.btn-container {
		margin-top: 2rem;
	}

	.btn {
		margin-top: 1rem;
		width: 140px;
	}
`;
export default AddToCart;
