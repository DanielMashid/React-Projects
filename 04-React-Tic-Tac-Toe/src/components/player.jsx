import { useState } from "react";

export default function Player({ initialName, symbol }) {
	const [playerName, setPlayerName] = useState(initialName);
	const [isEditing, setIsEditing] = useState(false);

	// Not recommended to use this approach
	// function handleEditClick() {
	// 	setIsEditing(!isEditing);
	// }

	// This is the recommended approach
	function handleEditClick() {
		setIsEditing((prevIsEditing) => !prevIsEditing);
	}

	function handleChange(event) {
		setPlayerName(event.target.value); // event.target is the input element
	}

	let editablePlayerName = <span className="player-name">{playerName}</span>;

	if (isEditing) {
		editablePlayerName = (
			<input type="text" required value={playerName} onChange={handleChange} />
		);
	}

	return (
		<li>
			<span className="player">
				{editablePlayerName}
				<span className="player-symbol">{symbol}</span>
			</span>
			<button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
		</li>
	);
}
