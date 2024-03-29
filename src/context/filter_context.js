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
	sort: "price-lowest",
	filters: {
		text: "",
		category: "all",
		company: "all",
		color: "all",
		min_price: 0,
		max_price: 0,
		price: 0,
		shipping: false,
	},
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { products } = useProductsContext();

	useEffect(() => {
		dispatch({ type: LOAD_PRODUCTS, payload: products });
	}, [products]);

	useEffect(() => {
		setTimeout(() => {
			dispatch({ type: FILTER_PRODUCTS });
			dispatch({ type: SORT_PRODUCTS });
		}, 1000);
	}, [products, state.filters, state.sort]);

	const viewGrid = () => {
		dispatch({ type: SET_GRIDVIEW });
	};

	const viewList = () => {
		dispatch({ type: SET_LISTVIEW });
	};

	const updateSort = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		dispatch({ type: UPDATE_SORT, payload: { [name]: value } });
	};

	const updateFilters = (e) => {
		let name = e.target.name;
		let value = e.target.value;
		if (name === "category") {
			value = e.target.textContent;
		}
		if (name === "color") {
			value = e.target.dataset.color;
		}
		if (name === "price") {
			value = Number(value);
		}
		if (name === "shipping") {
			value = e.target.checked;
		}

		dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
	};

	const clearFilters = () => {
		dispatch({ type: CLEAR_FILTERS });
	};

	return (
		<FilterContext.Provider
			value={{
				...state,
				viewGrid,
				viewList,
				updateSort,
				updateFilters,
				clearFilters,
			}}
		>
			{children}
		</FilterContext.Provider>
	);
};
// make sure use
export const useFilterContext = () => {
	return useContext(FilterContext);
};
