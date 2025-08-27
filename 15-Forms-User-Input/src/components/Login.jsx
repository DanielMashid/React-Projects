import { useRef, useState } from 'react';

export default function Login() {
	const [emailIsInvalid, setEmailIsInvalid] = useState(false);

	const email = useRef();
	const password = useRef();

	function handleSubmit(event) {
		event.preventDefault(); // To make sure that this automatically generated HTTP request is not being sent.

		const enteredEmail = email.current.value;
		const enteredPassword = password.current.value;
		console.log({ email: enteredEmail, password: enteredPassword });

		const emailIsValid = enteredEmail.includes('@');

		if (!emailIsValid) {
			setEmailIsInvalid(true);
			return; // because we don't want to proceed
		}

		setEmailIsInvalid(false);

		console.log('Sending HTTP request...');

		// Not ideal to manipulate the DOM directly like this, but it's okay for simple forms
		// email.current.value = '';
		// password.current.value = '';
	}

	return (
		<form onSubmit={handleSubmit}>
			<h2>Login</h2>

			<div className="control-row">
				<div className="control no-margin">
					<label htmlFor="email">Email</label>
					<input id="email" type="email" name="email" ref={email} />
					<div className="control-error">
						{emailIsInvalid && <p>Please enter a valid email add address. </p>}
					</div>
				</div>

				<div className="control no-margin">
					<label htmlFor="password">Password</label>
					<input id="password" type="password" name="password" ref={password} />
				</div>
			</div>

			<p className="form-actions">
				<button className="button button-flat">Reset</button>
				<button className="button">Login</button>
			</p>
		</form>
	);
}
