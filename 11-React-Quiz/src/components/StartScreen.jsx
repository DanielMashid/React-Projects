export default function StartScreen({ onStart }) {
	return (
		<div id="start-screen">
			<h1>Test your knowledge and have fun!</h1>
			<button className="start-button" onClick={onStart}>
				Start Quiz
			</button>
		</div>
	);
}
