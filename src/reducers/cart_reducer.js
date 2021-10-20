import {
	ADD_TO_CART,
	CLEAR_CART,
	COUNT_CART_TOTALS,
	REMOVE_CART_ITEM,
	TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";

const cart_reducer = (state, action) => {
	//ADD ITEM TO CART
	if (action.type === ADD_TO_CART) {
		const { id, color, amount, product } = action.payload;

		console.log(product);

		//cart state consists of 4 parts, cart, total_items, total_amount, shipping_fee

		const itemToAdd = {
			id: id + color,
			color,
			amount,
			price: product.price,
			name: product.name,
			max: product.stock,
			image: product.images[0].url,
		};

		console.log(">>> item to add:", itemToAdd);

		//if item exists in the cart, then add the number to the cart

		const existingItem = state.cart.find(
			(item) => item.id === itemToAdd.id
		);

		if (existingItem) {
			const tempCart = state.cart.map((item) => {
				if (item.id === itemToAdd.id) {
					let newAmount = item.amount + itemToAdd.amount;
					if (newAmount > itemToAdd.max) {
						newAmount = itemToAdd.max;
					}
					return { ...item, amount: newAmount };
				}
				return item;
			});

			return { ...state, cart: tempCart };
		} else {
			return { ...state, cart: [...state.cart, itemToAdd] };
		}
	}

	if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
		const { id, value } = action.payload;
		if (value === "inc") {
			const tempCart = state.cart.map((item) => {
				if (item.id === id) {
					let newAmount = item.amount + 1;
					if (newAmount > item.max - 1) {
						newAmount = item.max;
					}
					return { ...item, amount: newAmount };
				}
				return { ...item };
			});
			return { ...state, cart: tempCart };
		} else {
			const tempCart = state.cart.map((item) => {
				if (item.id === id) {
					let newAmount = item.amount - 1;
					if (newAmount < 1) {
						newAmount = 0;
					}
					return { ...item, amount: newAmount };
				}
				return { ...item };
			});
			return { ...state, cart: tempCart };
		}
	}

	if (action.type === COUNT_CART_TOTALS) {
		const totalItems = state.cart.reduce(
			(total, item) => {
				const { total_items, total_amount } = total;
				const { amount, price } = item;
				total = {
					total_items: total_items + amount,
					total_amount: total_amount + amount * price,
				};
				return total;
			},
			{ total_items: 0, total_amount: 0 }
		);
		// return { ...state, ...totalItems };
		return { ...state, total_amount: 100 };
	}

	if (action.type === REMOVE_CART_ITEM) {
		const { id } = action.payload;
		const newCart = state.cart.filter((item) => {
			return item.id !== id;
		});
		return { ...state, cart: newCart };
	}

	if (action.type === CLEAR_CART) {
		return {
			...state,
			cart: [],
		};
	}

	throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
