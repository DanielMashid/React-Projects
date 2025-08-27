import Input from './Input.jsx';
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation.js';
import { useInput } from '../hooks/useInput.js';

export default function StateLogin() {
	const {
		value: emailValue,
		handleInputChange: handleEmailChange,
		handleInputBlur: handleEmailBlur,
		hasError: emailHasError,
	} = useInput('', (value) => isEmail(value) && isNotEmpty(value));

	const {
		value: passwordValue,
		handleInputChange: handlePasswordChange,
		handleInputBlur: handlePasswordBlur,
		hasError: passwordHasError,
	} = useInput('', (value) => hasMinLength(value, 6));

	function handleSubmit(event) {
		event.preventDefault(); // Prevent the default form submission behavior

		if (emailHasError || passwordHasError) {
			return;
		}

		console.log({ email: emailValue, password: passwordValue });
		console.log('Sending HTTP request...');
	}

	return (
		<form onSubmit={handleSubmit}>
			<h2>Login</h2>

			<div className="control-row">
				<Input
					label="Email"
					id="email"
					type="email"
					name="email"
					onChange={handleEmailChange}
					onBlur={handleEmailBlur}
					value={emailValue}
					error={emailHasError && 'Please enter a valid email.'}
				/>

				<Input
					label="Password"
					id="password"
					type="password"
					name="password"
					onChange={handlePasswordChange}
					onBlur={handlePasswordBlur}
					value={passwordValue}
					error={passwordHasError && 'Please enter a valid password (min. 6 characters).'}
				/>
			</div>

			<p className="form-actions">
				<button className="button button-flat">Reset</button>
				<button className="button">Login</button>
			</p>
		</form>
	);
}
