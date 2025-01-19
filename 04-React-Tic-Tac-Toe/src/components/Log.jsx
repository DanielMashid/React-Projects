export default function Log({ turns }) {
	return (
		<ol id="log">
			<h2>Game Logs:</h2>
			{turns.map((turn) => (
				<li key={`${turn.square.row}${turn.square.col}`}>
					{turns.player} selected {turn.square.row}, {turn.square.col}
				</li>
			))}
		</ol>
	);
}
