import { useContext } from 'react';

import { currencyFormatter } from '../util/formatting.js';
import Modal from '../UI/Modal.jsx';
import CartContext from '../store/CartContext.jsx';
import Button from '../UI/Button.jsx';
import UserProgressContext from '../store/UserProgressContext.jsx';
import CartItem from './CartItem.jsx';

export default function Cart() {
	const cartCtx = useContext(CartContext);
	const userProgressCtx = useContext(UserProgressContext);

	const cartTotalPrice = cartCtx.items.reduce((acc, item) => acc + item.quantity * item.price, 0);

	function handleCloseCart() {
		userProgressCtx.hideCart();
	}

	return (
		<Modal className="cart" open={userProgressCtx.progress === 'cart'}>
			<h2>Your Cart</h2>
			<ul>
				{cartCtx.items.map((item) => (
					<CartItem
						key={item.id}
						item={item}
						onIncrease={() => cartCtx.addItem(item)}
						onDecrease={() => cartCtx.removeItem(item.id)} // because we only need the id to remove an item
					/>
				))}
			</ul>
			<p className="cart-total">{currencyFormatter.format(cartTotalPrice)}</p>
			<p className="modal-actions">
				<Button isTextOnly={true} onClick={handleCloseCart}>
					Close
				</Button>{' '}
				{cartCtx.items.length > 0 && <Button>Go To Checkout</Button>}
			</p>
		</Modal>
	);
}
