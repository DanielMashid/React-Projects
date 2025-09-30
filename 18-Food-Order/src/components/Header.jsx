import logoImg from '../assets/logo.jpg';
import Button from '../UI/Button.jsx';

export default function Header() {
	return (
		<header id="main-header">
			<div id="title">
				<img id="title-img" src={logoImg} alt="Logo" />
				<h1>Daniel Restaurant</h1>
			</div>
			<nav>
				<Button isTextOnly={true}>Cart (0)</Button>
			</nav>
		</header>
	);
}
