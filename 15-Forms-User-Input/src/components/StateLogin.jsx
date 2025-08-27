import { useState } from 'react';

export default function StateLogin() {
	const [enteredValue, setEnteredValue] = useState({
		email: '',
		password: '',
	});

	const [didEdit, setDidEdit] = useState({
		email: false,
		password: false,
	});

	const emailIsInvalid = didEdit.email && !enteredValue.email.includes('@');

	function handleSubmit(event) {
		event.preventDefault(); // Prevent the default form submission behavior
		console.log(enteredValue);
		setEnteredValue({ email: '', password: '' }); // Clear the form fields after submission
	}

	// Generic handler for input changes
	function handleInputChange(identifier, value) {
		setEnteredValue((prevValues) => ({
			...prevValues,
			[identifier]: value,
		}));
		setDidEdit((prevEdit) => ({
			...prevEdit,
			[identifier]: false,
		}));
	}

	function handleInputBlur(identifier) {
		setDidEdit((prevEdit) => ({
			...prevEdit,
			[identifier]: true,
		}));
	}

	return (
		<form onSubmit={handleSubmit}>
			<h2>Login</h2>

			<div className="control-row">
				<div className="control no-margin">
					<label htmlFor="email">Email</label>
					<input
						id="email"
						type="email"
						name="email"
						onBlur={() => handleInputBlur('email')}
						onChange={(event) => handleInputChange('email', event.target.value)}
						value={enteredValue.email}
						placeholder="Your email address"
					/>
					<div className="control-error">
						{emailIsInvalid && <p>Please enter a valid email add address. </p>}
					</div>
				</div>

				<div className="control no-margin">
					<label htmlFor="password">Password</label>
					<input
						id="password"
						type="password"
						name="password"
						onChange={(event) => handleInputChange('password', event.target.value)}
						value={enteredValue.password}
						placeholder="Your password"
					/>
				</div>
			</div>

			<p className="form-actions">
				<button className="button button-flat">Reset</button>
				<button className="button">Login</button>
			</p>
		</form>
	);
}
