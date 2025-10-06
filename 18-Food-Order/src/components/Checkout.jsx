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

	function handleSubmit(event) {
		// Prevent the default form submission behavior
		event.preventDefault();

		// validation could be added here, but it is already done by Input component with required attribute

		const formData = new FormData(event.target); // HTML form element is event.target
		const customerData = Object.fromEntries(formData.entries()); // {email: test@example.com}

		// send http request...
		fetch('http://localhost:3000/orders', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				order: {
					items: cartCtx.items,
					customer: customerData,
				},
			}),
		});
	}

	return (
		<Modal open={userProgressCtx.progress === 'checkout'} onClose={handleCloseCheckout}>
			<form onSubmit={handleSubmit}>
				<h2>Checkout</h2>
				<p>Total Amount: {currencyFormatter.format(totalAmount)}</p>
				<Input label="Your Name" id="name" type="text" />
				<Input label="Your E-mail address" id="email" type="email" />
				<Input label="Your Address" id="street" type="text" />
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
