import Header from './components/Header.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import StateLogin from './components/stateLogin.jsx';

function App() {
	return (
		<>
			<Header />
			<main>
				<StateLogin />
				{/* <Login /> */}
				{/* <Signup /> */}
			</main>
		</>
	);
}

export default App;
