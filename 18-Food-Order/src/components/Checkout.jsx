import { useContext } from 'react';

import { currencyFormatter } from '../util/formatting.js';
import Modal from '../UI/Modal.jsx';
import CartContext from '../store/CartContext.jsx';
import Input from '../UI/Input.jsx';
import Button from '../UI/Button.jsx';
import UserProgressContext from '../store/UserProgressContext.jsx';

export default function Checkout() {
	const cartCtx = useContext(CartContext);
	const totalAmount = cartCtx.items.reduce((acc, item) => acc + item.price * item.quantity, 0);

	const userProgressCtx = useContext(UserProgressContext);

	function handleCloseCheckout() {
		userProgressCtx.hideCheckout();
	}

	return (
		<Modal open={userProgressCtx.progress === 'checkout'}>
			<form>
				<h2>Checkout</h2>
				<p>Total Amount: {currencyFormatter.format(totalAmount)}</p>
				<Input label="Your Name" id="name" type="text" />
				<Input label="Your E-mail address" id="email" type="email" />
				<Input label="Your Address" id="address" type="text" />
				<div className="control-row">
					<Input label="Postal Code" id="postal-code" type="text" />
					<Input label="City" id="city" type="text" />
				</div>
				<p className="modal-actions">
					{/*to prevent form submission type='button'*/}
					<Button isTextOnly={true} type="button" onClick={handleCloseCheckout}>
						Cancel
					</Button>
					<Button>Submit</Button>
				</p>
			</form>
		</Modal>
	);
}
