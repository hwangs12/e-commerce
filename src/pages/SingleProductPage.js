import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utils/constants";
import { formatPrice } from "../utils/helpers";
import {
	Loading,
	Error,
	ProductImages,
	AddToCart,
	Stars,
	PageHero,
} from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SingleProductPage = () => {
	const { id } = useParams();
	const history = useHistory();
	const {
		single_product_loading: loading,
		single_product_error: error,
		single_product: product,
		fetchSingleProduct,
	} = useProductsContext();
	const {
		name,
		price,
		featured,
		images,
		category,
		company,
		description,
		reviews,
		shipping,
		stars,
		stock,
	} = product;

	useEffect(() => {
		fetchSingleProduct(`${url}${id}`);
	}, []);

	useEffect(() => {
		if (error) {
			setTimeout(() => {
				history.push("/");
			}, 3000);
		}
	}, [error]);

	if (loading) {
		return <Loading />;
	}

	if (error) {
		return <Error />;
	}
	console.log(product);

	return (
		<Wrapper>
			<PageHero text={product.name} category={"/products"} />
			<div className="section section-center page">
				<Link className="btn" to="/products">
					back to products
				</Link>
				<div className="product-center">
					<ProductImages images={images} />
					<section className="content">
						<h2>{name}</h2>
						<Stars />
						<h5 className="price">{formatPrice(price)}</h5>
						<p className="desc">{description}</p>
						<p className="info">
							<span>Available : </span>
							{parseInt(stock) > 0 ? "In Stock" : "Out of stock"}
						</p>
						<p className="info">
							<span>SKU : </span>
							{id}
						</p>
						<p className="info">
							<span>Brand : </span>
							{company}
						</p>
						<hr></hr>
						{parseInt(stock) > 0 && <AddToCart />}
					</section>
				</div>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.main`
	.product-center {
		display: grid;
		gap: 4rem;
		margin-top: 2rem;
	}
	.price {
		color: var(--clr-primary-5);
	}
	.desc {
		line-height: 2;
		max-width: 45em;
	}
	.info {
		text-transform: capitalize;
		width: 300px;
		display: grid;
		grid-template-columns: 125px 1fr;
		span {
			font-weight: 700;
		}
	}

	@media (min-width: 992px) {
		.product-center {
			grid-template-columns: 1fr 1fr;
			align-items: center;
		}
		.price {
			font-size: 1.25rem;
		}
	}
`;

export default SingleProductPage;
