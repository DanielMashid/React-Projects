import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
	const [userInputState, setUserInputState] = useState({
		initialInvestment: 10000,
		annualInvestment: 1200,
		expectedReturn: 6,
		duration: 10,
	});

	function handleChange(inputIdentifier, newValue) {
		// Update the state with the new value for the specified input field
		// while preserving the rest of the state.
		setUserInputState((prevUserInput) => {
			return { ...prevUserInput, [inputIdentifier]: newValue };
		});
	}
	return (
		<>
			<Header />
			<UserInput onChangeInput={handleChange} newUserInput={userInputState} />
			<Results inputData={userInputState} />
		</>
	);
}

export default App;
