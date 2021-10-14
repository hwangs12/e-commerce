import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
	const { filtered_products: products, viewType } = useFilterContext();
	console.log("filtered_products in the productlist component:", products);
	if (viewType === "grid") {
		return <GridView products={products} />;
	}
	if (viewType === "list") {
		return <ListView products={products} />;
	}
};

export default ProductList;
