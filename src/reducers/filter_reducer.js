import {
	LOAD_PRODUCTS,
	SET_LISTVIEW,
	SET_GRIDVIEW,
	UPDATE_SORT,
	SORT_PRODUCTS,
	UPDATE_FILTERS,
	FILTER_PRODUCTS,
	CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
	if (action.type === LOAD_PRODUCTS) {
		return {
			...state,
			filtered_products: [...action.payload],
			all_products: [...action.payload],
		};
	}

	if (action.type === SET_GRIDVIEW) {
		return {
			...state,
			viewType: "grid",
		};
	}

	if (action.type === SET_LISTVIEW) {
		return {
			...state,
			viewType: "list",
		};
	}

	if (action.type === UPDATE_SORT) {
		return {
			...state,
			...action.payload,
		};
	}

	if (action.type === SORT_PRODUCTS) {
		const { filtered_products: products, sort } = state;
		let temp_products = [...products];

		if (sort === "price-lowest") {
			temp_products = temp_products.sort((a, b) => a.price - b.price);
		}
		if (sort === "price-highest") {
			temp_products = temp_products.sort((a, b) => b.price - a.price);
		}
		if (sort === "name-a") {
			temp_products = temp_products.sort((a, b) =>
				a.name.localeCompare(b.name)
			);
		}
		if (sort === "name-z") {
			temp_products = temp_products.sort((a, b) =>
				b.name.localeCompare(a.name)
			);
		}

		return { ...state, filtered_products: temp_products };
	}
	throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
