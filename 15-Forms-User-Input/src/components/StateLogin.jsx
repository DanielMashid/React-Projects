import { useState } from 'react';

import Input from './Input.jsx';
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation.js';

export default function StateLogin() {
	// const [enteredEmail, setEnteredEmail] = useState('');
	// const [enteredPassword, setEnteredPassword] = useState('');

	const [enteredValues, setEnteredValues] = useState({
		email: '',
		password: '',
	});

	const [didEdit, setDidEdit] = useState({
		email: false,
		password: false,
	});

	const emailIsInvalid =
		didEdit.email && (!isEmail(enteredValues.email) || !isNotEmpty(enteredValues.email));
	const passwordIsInvalid = didEdit.password && !hasMinLength(enteredValues.password, 6);

	function handleSubmit(event) {
		event.preventDefault(); // Prevent the default form submission behavior
		console.log(enteredValues);
		setEnteredValues({ email: '', password: '' }); // Clear the form fields after submission
	}

	// Generic handler for input changes
	function handleInputChange(identifier, value) {
		setEnteredValues((prevValues) => ({
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

	// function handleEmailChange(event) {
	//   setEnteredEmail(event.target.value);
	// }

	// function handlePasswordChange(event) {
	//   setEnteredPassword(event.target.value);
	// }

	return (
		<form onSubmit={handleSubmit}>
			<h2>Login</h2>

			<div className="control-row">
				<Input
					label="Email"
					id="email"
					type="email"
					name="email"
					onChange={(event) => handleInputChange('email', event.target.value)}
					onBlur={() => handleInputBlur('email')}
					value={enteredValues.email}
					error={emailIsInvalid && 'Please enter a valid email.'}
				/>

				<Input
					label="Password"
					id="password"
					type="password"
					name="password"
					onChange={(event) => handleInputChange('password', event.target.value)}
					onBlur={() => handleInputBlur('password')}
					value={enteredValues.password}
					error={passwordIsInvalid && 'Please enter a valid password (min. 6 characters).'}
				/>
			</div>

			<p className="form-actions">
				<button className="button button-flat">Reset</button>
				<button className="button">Login</button>
			</p>
		</form>
	);
}
