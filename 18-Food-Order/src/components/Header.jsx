import { useContext } from 'react';

import logoImg from '../assets/logo.jpg';
import Button from '../UI/Button.jsx';
import CartContext from '../store/CartContext.jsx';

export default function Header() {
	const cartCtx = useContext(CartContext);

	// calculate total number of items in cart
	const totalCartItems = cartCtx.items.reduce((acc, item) => acc + item.quantity, 0);

	return (
		<header id="main-header">
			<div id="title">
				<img id="title-img" src={logoImg} alt="Logo" />
				<h1>Daniel Restaurant</h1>
			</div>
			<nav>
				<Button isTextOnly={true}>Cart ({totalCartItems})</Button>
			</nav>
		</header>
	);
}
