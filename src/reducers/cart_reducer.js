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

		//cart state consists of 4 parts, cart, total_items, total_amount, shipping_fee

		const itemToAdd = {
			id: id + color,
			color,
			amount,
			price: product.price,
			name: product.name,
		};

		console.log(">>> item to add:", itemToAdd);

		//if item exists in the cart, then add the number to the cart

		const existingItem = state.cart.find(
			(item) => item.id === itemToAdd.id
		);

		if (existingItem) {
			const tempCart = state.cart.map((item) => {
				if (item.id === itemToAdd.id) {
					return { ...item, amount: item.amount + itemToAdd.amount };
				}
				return item;
			});

			return { ...state, cart: tempCart };
		} else {
			return { ...state, cart: [...state.cart, itemToAdd] };
		}
	}

	return state;
	throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
