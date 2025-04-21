import { useState } from 'react';

import Header from './components/Header.jsx';
import Quiz from './components/Quiz.jsx';
import StartScreen from './components/StartScreen.jsx';

function App() {
	const [quizStart, setQuizStart] = useState(false);

	function handleStartQuiz() {
		setQuizStart(true);
	}

	return (
		<>
			<Header />
			{!quizStart && <StartScreen onStart={handleStartQuiz} />}
			<main>{quizStart && <Quiz />}</main>
		</>
	);
}

export default App;
