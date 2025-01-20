import { useState } from "react";

export default function UserInput() {
	const [userInput, setUserInput] = useState({
		initialInvestment: 10000,
		annualInvestment: 1200,
		expectedReturn: 6,
		duration: 10,
	});

	function handleChange(inputIdentifier, newValue) {
		// Update the state with the new value for the specified input field
		// while preserving the rest of the state.
		setUserInput((prevUserInput) => {
			return { ...prevUserInput, [inputIdentifier]: newValue };
		});
	}

	return (
		<section id="user-input">
			<div className="input-group">
				<p>
					<label>Initial Investment</label>
					<input
						type="number"
						required
						value={userInput.initialInvestment} // Set the value of the input field to the value stored in the state
						onChange={(event) =>
							// Call handleChange with specific arguments to update the state with the new value of the "initialInvestment" input field
							handleChange("initialInvestment", event.target.value)
						}
					></input>
				</p>
				<p>
					<label>Annual Investment</label>
					<input
						type="number"
						required
						value={userInput.annualInvestment}
						onChange={(event) =>
							handleChange("annualInvestment", event.target.value)
						}
					></input>
				</p>
			</div>
			<div className="input-group">
				<p>
					<label>Expected Return</label>
					<input
						type="number"
						required
						value={userInput.expectedReturn}
						onChange={(event) =>
							handleChange("expectedReturn", event.target.value)
						}
					></input>
				</p>
				<p>
					<label>Duration</label>
					<input
						type="number"
						required
						value={userInput.duration}
						onChange={(event) => handleChange("duration", event.target.value)}
					></input>
				</p>
			</div>
		</section>
	);
}
