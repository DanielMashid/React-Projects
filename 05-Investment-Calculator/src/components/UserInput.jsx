export default function UserInput({ onChangeInput, newUserInput }) {
	return (
		<section id="user-input">
			<div className="input-group">
				<p>
					<label>Initial Investment</label>
					<input
						type="number"
						required
						value={newUserInput.initialInvestment} // Set the value of the input field to the value stored in the state
						onChange={(event) =>
							// Call handleChange with specific arguments to update the state with the new value of the "initialInvestment" input field
							onChangeInput("initialInvestment", event.target.value)
						}
					></input>
				</p>
				<p>
					<label>Annual Investment</label>
					<input
						type="number"
						required
						value={newUserInput.annualInvestment}
						onChange={(event) =>
							onChangeInput("annualInvestment", event.target.value)
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
						value={newUserInput.expectedReturn}
						onChange={(event) =>
							onChangeInput("expectedReturn", event.target.value)
						}
					></input>
				</p>
				<p>
					<label>Duration</label>
					<input
						type="number"
						required
						value={newUserInput.duration}
						onChange={(event) => onChangeInput("duration", event.target.value)}
					></input>
				</p>
			</div>
		</section>
	);
}
