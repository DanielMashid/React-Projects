import { createContext, useReducer } from 'react';

const CartContext = createContext({
	items: [],
	addItem: (item) => {},
	removeItem: (id) => {},
});

function cartReducer(state, action) {
	if (action.type === 'ADD_ITEM') {
		// logic for adding item to cart
	} else if (action.type === 'REMOVE_ITEM') {
		// logic for removing item from cart
	}
	return state;
}

export function CartContextProvider({ children }) {
	const [cartState, dispatchCartAction] = useReducer(cartReducer, { items: [] });
	return <CartContext.Provider>{children}</CartContext.Provider>;
}

export default CartContext;
