import { createContext, useReducer } from 'react';

const CartContext = createContext({
	items: [],
	addItem: (item) => {},
	removeItem: (id) => {},
	clearCart: () => {},
});

function cartReducer(state, action) {
	// 1
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
	}
	// 2
	else if (action.type === 'REMOVE_ITEM') {
		const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id); // don't need action.item.id
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
	// 3
	else if (action.type === 'CLEAR_CART') {
		return { items: [] };
	}

	// 4
	return state;
}

export function CartContextProvider({ children }) {
	const [cartState, dispatchCartAction] = useReducer(cartReducer, { items: [] });

	function addItemToCart(item) {
		dispatchCartAction({ type: 'ADD_ITEM', item: item });
	}

	function removeItemFromCart(id) {
		dispatchCartAction({ type: 'REMOVE_ITEM', id: id });
	}
	function clearCart() {
		dispatchCartAction({ type: 'CLEAR_CART' });
	}

	const cartCtx = {
		items: cartState.items,
		addItem: addItemToCart,
		removeItem: removeItemFromCart,
		clearCart: clearCart,
	};

	return <CartContext.Provider value={cartCtx}>{children}</CartContext.Provider>;
}

export default CartContext;
