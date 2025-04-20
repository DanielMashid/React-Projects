import { useState, useCallback } from 'react';
import QUESTIONS from '../questions.js';
import quizCompleteImg from '../assets/quiz-complete.png';
import QuestionTimer from './QuestionTimer.jsx';

export default function Quiz() {
	const [userAnswers, setUserAnswers] = useState([]);

	const activeQuestionIndex = userAnswers.length;
	const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

	const handleSelectAnswer = useCallback(function handleSelectAnswer(selectAnswer) {
		setUserAnswers((prevUserAnswers) => {
			return [...prevUserAnswers, selectAnswer];
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

	const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
	shuffledAnswers.sort(() => Math.random() - 0.5); // value between -0.5 to 0.5 and this is shuffled the answers

	return (
		<div id="quiz">
			<div id="question">
				<QuestionTimer key={activeQuestionIndex} timeout={5000} onTimeout={handleSkipAnswer} />
				<h2>{QUESTIONS[activeQuestionIndex].text}</h2>
				<ul id="answers">
					{shuffledAnswers.map((answer) => (
						<li key={answer} className="answer">
							<button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
