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
	throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
