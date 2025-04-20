import { useCallback, useState } from 'react';

import QUESTIONS from '../questions.js';

import quizCompleteImg from '../assets/quiz-complete.png';

import Question from './Question.jsx';

export default function Quiz() {
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
		return (
			<div id="summary">
				<img src={quizCompleteImg} alt="Trophy Icon..."></img>
				<h2>Quiz Is Completed !!</h2>
			</div>
		);
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
