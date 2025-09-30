import { createContext, useReducer } from 'react';

const CartContext = createContext({
	items: [],
	addItem: (item) => {},
	removeItem: (id) => {},
});

function cartReducer(state, action) {
	if (action.type === 'ADD_ITEM') {
		// state.items.push(action.payload); Not good --> never mutate state directly

		// Find the existing item in the cart
		const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);

		// Create a new array with the updated items
		const updatedItems = [...state.items];

		if (existingCartItemIndex > -1) {
			const existingItem = state.items[existingCartItemIndex];
			const updatedItem = {
				...existingItem,
				quantity: existingItem.quantity + 1,
			};
			updatedItems[existingCartItemIndex] = updatedItem;
		} else {
			// Item does not exist in cart, add it with quantity 1
			updatedItems.push({ ...action.item, quantity: 1 });
		}
		return { ...state, items: updatedItems };
	} else if (action.type === 'REMOVE_ITEM') {
		const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);
		const existingItem = state.items[existingCartItemIndex];
		const updatedItems = [...state.items];

		// If the item is the last one, remove it from the cart
		if (existingItem.quantity === 1) {
			updatedItems.splice(existingCartItemIndex, 1);
		} else {
			const updatedItem = {
				...existingItem,
				quantity: existingItem.quantity - 1,
			};
			updatedItems[existingCartItemIndex] = updatedItem;
		}
		return { ...state, items: updatedItems };
	}
	return state;
}

export function CartContextProvider({ children }) {
	const [cartState, dispatchCartAction] = useReducer(cartReducer, { items: [] });
	return <CartContext.Provider>{children}</CartContext.Provider>;
}

export default CartContext;
