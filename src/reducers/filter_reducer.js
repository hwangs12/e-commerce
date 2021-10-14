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
		const prices = action.payload.map((p) => parseInt(p.price));
		let maxPrice;
		if (prices.length > 0) {
			maxPrice = Math.max(...prices);
		}
		// console.log(">>> from filter reducer our maxPrice is:", maxPrice);
		return {
			...state,
			filtered_products: [...action.payload],
			all_products: [...action.payload],
			filters: {
				...state.filters,
				max_price: maxPrice,
				price: maxPrice,
			},
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

	if (action.type === UPDATE_FILTERS) {
		const { name, value } = action.payload;
		if (name === "shipping") {
			return {
				...state,
				filters: { ...state.filters, [name]: !state.filters.shipping },
			};
		}
		return { ...state, filters: { ...state.filters, [name]: value } };
	}

	if (action.type === FILTER_PRODUCTS) {
		const {
			all_products,
			filters: { text, category, color, price, shipping },
		} = state;

		let temp_products = all_products.filter(
			(product) =>
				product.name.includes(text) &&
				product.category === category &&
				product.color === color
		);
		return { ...state, filtered_products: temp_products };
	}

	if (action.type === CLEAR_FILTERS) {
		return { ...state, filtered_products: state.all_products };
	}
	throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
