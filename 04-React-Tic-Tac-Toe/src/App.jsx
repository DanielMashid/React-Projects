import { useState } from "react";

import Player from "./components/player";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import GameOver from "./components/GameOver.jsx";

import { WINNING_COMBINATIONS } from "./winning-combinations.js";

const PLAYERS = {
	X: "Player 1",
	O: "Player 2",
};

const INITIAL_GAME_BOARD = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

function deriveActivePlayer(gameTurns) {
	let currentPlayer = "X";
	if (gameTurns.length > 0 && gameTurns[0].player === "X") {
		currentPlayer = "O";
	}
	return currentPlayer;
}

function deriveWinner(gameBoard, players) {
	let winner;

	for (const combination of WINNING_COMBINATIONS) {
		const firstSquareSymbol =
			gameBoard[combination[0].row][combination[0].column];
		const secondSquareSymbol =
			gameBoard[combination[1].row][combination[1].column];
		const thirdSquareSymbol =
			gameBoard[combination[2].row][combination[2].column];

		if (
			firstSquareSymbol &&
			firstSquareSymbol === secondSquareSymbol &&
			firstSquareSymbol === thirdSquareSymbol
		) {
			// winner = players[firstSquareSymbol];
			winner = `${players[firstSquareSymbol]} (${firstSquareSymbol})`;
		}
	}
	return winner;
}

function deriveGameBoard(gameTurns) {
	let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])]; // Create a deep copy of initialGameBoard to ensure the gameBoard can be reset to its original state when restarting the game

	for (const turn of gameTurns) {
		// const square = turn.square;
		// const player = turn.player;

		// const row = square.row;
		// const col = square.col;

		// Destructuring the turn object
		const { square, player } = turn;
		const { row, col } = square;

		gameBoard[row][col] = player;
	}
	return gameBoard;
}

function App() {
	const [gameTurns, setGameTurns] = useState([]);
	const [players, setPlayers] = useState(PLAYERS);
	// const [activePlayer, setActivePlayer] = useState("X"); // This is derived from gameTurns
	// const [hasWinner, setHasWinner] = useState(false); // This is derived from gameTurns

	const activePlayer = deriveActivePlayer(gameTurns);
	let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])]; // Create a deep copy of initialGameBoard to ensure the gameBoard can be reset to its original state when restarting the game

	gameBoard = deriveGameBoard(gameTurns);
	const winner = deriveWinner(gameBoard, players);

	const hasDraw = gameTurns.length === 9 && !winner;

	function handleSelectSquare(rowIndex, colIndex) {
		// setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
		setGameTurns((prevTurns) => {
			const currentPlayer = deriveActivePlayer(prevTurns);

			// This is array of objects with square and player properties
			const updatedTurns = [
				{ square: { row: rowIndex, col: colIndex }, player: currentPlayer },
				...prevTurns,
			];
			return updatedTurns;
		});
	}

	function handleRematch() {
		setGameTurns([]);
	}

	function handlePlayerNameChange(symbol, newName) {
		setPlayers((prevPlayers) => {
			return {
				...prevPlayers,
				[symbol]: newName, // javascript object property shorthand, equivalent to X: newName if symbol is "X"
			};
		});
	}

	return (
		<main>
			<div id="game-container">
				<ol id="players" className="highlight-player">
					<Player
						initialName={PLAYERS.X}
						symbol="X"
						isActive={activePlayer === "X"}
						onChangeName={handlePlayerNameChange}
					/>
					<Player
						initialName={PLAYERS.O}
						symbol="O"
						isActive={activePlayer === "O"}
						onChangeName={handlePlayerNameChange}
					/>
				</ol>
				{(winner || hasDraw) && (
					<GameOver winner={winner} onRestart={handleRematch} />
				)}
				<GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
			</div>
			<Log turns={gameTurns} />
		</main>
	);
}

export default App;
