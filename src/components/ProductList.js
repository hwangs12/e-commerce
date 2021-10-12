import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
	const { filtered_products: products, viewType } = useFilterContext();
	if (viewType === "grid") {
		return <GridView products={products} />;
	}
	if (viewType === "list") {
		return <ListView products={products} />;
	}
};

export default ProductList;
