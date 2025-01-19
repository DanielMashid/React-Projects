import { useState } from "react";

const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }) {
	// onSelectSquare is a function that will be called when a square is selected and turns is an array of objects with square and player properties

	let gameBoard = initialGameBoard; // Computed value

	for (const turn of turns) {
		// Destructuring the turn object

		// const square = turn.square;
		// const player = turn.player;

		// const row = square.row;
		// const col = square.col;

		const { square, player } = turn;
		const { row, col } = square;

		gameBoard[row][col] = player;
	}

	// const [gameBoard, setGameBoard] = useState(initialGameBoard);

	// function handleSelectSquare(rowIndex, colIndex) {
	// 	setGameBoard((prevGameBoard) => {
	// 		const updatedBoard = [
	// 			...prevGameBoard.map((innerArray) => [...innerArray]),
	// 		];
	// 		updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
	// 		return updatedBoard;
	// 	});

	// 	onSelectSquare();
	// }

	return (
		<ol id="game-board">
			{gameBoard.map((row, rowIndex) => (
				<li key={rowIndex}>
					<ol>
						{row.map((playerSymbol, colIndex) => (
							<li key={colIndex}>
								<button
									onClick={() => onSelectSquare(rowIndex, colIndex)}
									disabled={playerSymbol !== null}
								>
									{playerSymbol}
								</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	);
}
