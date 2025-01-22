import { useState } from 'react';

export default function Player() {
	const [enteredPlayerName, setEnteredPlayerName] = useState('');
	const [submittedPlayerName, setSubmittedPlayerName] = useState(false);

	function handleChange(event) {
		setSubmittedPlayerName(false);
		setEnteredPlayerName(event.target.value);
	}

	function handleSubmit() {
		setSubmittedPlayerName(true);
	}

	return (
		<section id="player">
			<h2>Welcome {submittedPlayerName ? enteredPlayerName : 'unknown entity'}</h2>
			<p>
				<input onChange={handleChange} type="text" value={enteredPlayerName} />
				<button onClick={handleSubmit}>Set Name</button>
			</p>
		</section>
	);
}
