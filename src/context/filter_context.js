import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/filter_reducer";
import {
	LOAD_PRODUCTS,
	SET_GRIDVIEW,
	SET_LISTVIEW,
	UPDATE_SORT,
	SORT_PRODUCTS,
	UPDATE_FILTERS,
	FILTER_PRODUCTS,
	CLEAR_FILTERS,
} from "../actions";
import { useProductsContext } from "./products_context";

const initialState = {
	filtered_products: [],
	all_products: [],
	viewType: "list",
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { products } = useProductsContext();

	useEffect(() => {
		dispatch({ type: LOAD_PRODUCTS, payload: products });
	}, [products]);

	const viewGrid = () => {
		dispatch({ type: SET_GRIDVIEW });
	};

	const viewList = () => {
		dispatch({ type: SET_LISTVIEW });
	};

	return (
		<FilterContext.Provider value={{ ...state, viewGrid, viewList }}>
			{children}
		</FilterContext.Provider>
	);
};
// make sure use
export const useFilterContext = () => {
	return useContext(FilterContext);
};
