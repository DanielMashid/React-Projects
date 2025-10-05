import { useContext } from 'react';

import logoImg from '../assets/logo.jpg';
import Button from '../UI/Button.jsx';
import CartContext from '../store/CartContext.jsx';
import UserProgressContext from '../store/UserProgressContext.jsx';

export default function Header() {
	const cartCtx = useContext(CartContext);
	const userProgressCtx = useContext(UserProgressContext);

	// calculate total number of items in cart
	const totalCartItems = cartCtx.items.reduce((acc, item) => acc + item.quantity, 0);

	function handleShowCart() {
		userProgressCtx.showCart();
	}

	return (
		<header id="main-header">
			<div id="title">
				<img id="title-img" src={logoImg} alt="Logo" />
				<h1>Daniel Restaurant</h1>
			</div>
			<nav>
				<Button isTextOnly={true} onClick={handleShowCart}>
					Cart ({totalCartItems})
				</Button>
			</nav>
		</header>
	);
}
