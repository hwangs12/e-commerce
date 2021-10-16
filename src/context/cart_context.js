import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/cart_reducer";
import {
	ADD_TO_CART,
	REMOVE_CART_ITEM,
	TOGGLE_CART_ITEM_AMOUNT,
	CLEAR_CART,
	COUNT_CART_TOTALS,
} from "../actions";

const getLocalStorage = () => {
	let cart = localStorage.getItem("cart");
	if (cart) {
		return JSON.parse(localStorage.getItem("cart"));
	} else {
		return [];
	}
};

const initialState = {
	cart: getLocalStorage(),
	total_items: 0,
	total_amount: 0,
	shipping_fee: 100,
};

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	console.log(">>> cart state from cart_context: ", state);

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(state.cart));
	}, [state.cart]);

	const add_To_Cart = (id, color, amount, product) => {
		dispatch({
			type: ADD_TO_CART,
			payload: { id, color, amount, product },
		});
	};

	const toggleAmount = (id, value) => {
		dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, value } });
	};

	const clearCart = () => {
		dispatch({ type: CLEAR_CART });
	};

	const removeItem = (id) => {
		dispatch({ type: REMOVE_CART_ITEM, payload: { id } });
	};

	return (
		<CartContext.Provider
			value={{
				...state,
				add_To_Cart,
				clearCart,
				removeItem,
				toggleAmount,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
// make sure use
export const useCartContext = () => {
	return useContext(CartContext);
};
