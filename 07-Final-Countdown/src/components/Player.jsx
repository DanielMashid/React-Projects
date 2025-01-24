import { useState, useRef } from 'react';

export default function Player() {
	const playerName = useRef('');
	const [enteredPlayerName, setEnteredPlayerName] = useState('');

	function handleClick() {
		setEnteredPlayerName(playerName.current.value);
		playerName.current.value = ''; // Manipulating DOM directly (not recommended)
	}

	return (
		<section id="player">
			<h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2> {/* This is shortcut 👈 */}
			<p>
				<input ref={playerName} type="text" />
				<button onClick={handleClick}>Set Name</button>
			</p>
		</section>
	);
}
