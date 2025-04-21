import { useCallback, useState } from 'react';

import QUESTIONS from '../questions.js';

import Question from './Question.jsx';
import Summary from './Summary.jsx';

export default function Quiz({ onRestart }) {
	const [userAnswers, setUserAnswers] = useState([]);

	const activeQuestionIndex = userAnswers.length;
	const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

	const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
		setUserAnswers((prevUserAnswers) => {
			return [...prevUserAnswers, selectedAnswer];
		});
	}, []);

	const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

	if (quizIsComplete) {
		return <Summary userAnswers={userAnswers} onRestart={onRestart} />;
	}

	return (
		<div id="quiz">
			<Question
				key={activeQuestionIndex} // exclusively reserved for React
				index={activeQuestionIndex} // own prop
				onSelectAnswer={handleSelectAnswer}
				onSkipAnswer={handleSkipAnswer}
			/>
		</div>
	);
}
