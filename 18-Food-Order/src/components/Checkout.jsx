import { useContext } from 'react';

import { currencyFormatter } from '../util/formatting.js';
import Modal from '../UI/Modal.jsx';
import CartContext from '../store/CartContext.jsx';
import Input from '../UI/Input.jsx';
import Button from '../UI/Button.jsx';
import UserProgressContext from '../store/UserProgressContext.jsx';
import useHttp from '../hooks/useHttp.js';
import Error from './Error.jsx';

const requestConfig = {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
	},
};

export default function Checkout() {
	const cartCtx = useContext(CartContext);
	const userProgressCtx = useContext(UserProgressContext);

	const {
		data,
		isLoading: isSending,
		error,
		sendRequest,
		clearData,
	} = useHttp('http://localhost:3000/orders', requestConfig);

	const totalAmount = cartCtx.items.reduce((acc, item) => acc + item.price * item.quantity, 0);

	function handleCloseCheckout() {
		userProgressCtx.hideCheckout();
	}

	function handleFinishOrder() {
		userProgressCtx.hideCheckout();
		cartCtx.clearCart();
		clearData();
	}

	async function checkoutAction(formData) {
		// validation could be added here, but it is already done by Input component with required attribute

		const customerData = Object.fromEntries(formData.entries()); // {email: test@example.com}

		// send http request...
		await sendRequest(
			JSON.stringify({
				order: {
					items: cartCtx.items,
					customer: customerData,
				},
			})
		);
	}

	// Define actions for the modal
	let actions = (
		<>
			<Button isTextOnly={true} type="button" onClick={handleCloseCheckout}>
				Cancel
			</Button>
			<Button>Submit</Button>
		</>
	);

	if (isSending) {
		actions = <span>Sending order data...</span>;
	}

	if (data && !error) {
		return (
			<Modal open={userProgressCtx.progress === 'checkout'} onClose={handleCloseCheckout}>
				<h2>Success!</h2>
				<p>Your order has been placed successfully.</p>
				<p>We will deliver your food to you shortly.</p>
				<p className="modal-actions">
					<Button onClick={handleFinishOrder}>Okay</Button>
				</p>
			</Modal>
		);
	}

	return (
		<Modal open={userProgressCtx.progress === 'checkout'} onClose={handleFinishOrder}>
			<form action={checkoutAction}>
				<h2>Checkout</h2>
				<p>Total Amount: {currencyFormatter.format(totalAmount)}</p>
				<Input label="Your Name" id="name" type="text" />
				<Input label="Your E-mail address" id="email" type="email" />
				<Input label="Your Address" id="street" type="text" />
				<div className="control-row">
					<Input label="Postal Code" id="postal-code" type="text" />
					<Input label="City" id="city" type="text" />
				</div>
				{error && <Error title="Failed to submit order" message={error} />}
				<p className="modal-actions">{actions}</p>
			</form>
		</Modal>
	);
}
