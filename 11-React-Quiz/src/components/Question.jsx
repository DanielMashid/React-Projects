import { useState } from 'react';

import QuestionTimer from './QuestionTimer.jsx';
import Answers from './Answers.jsx';

import QUESTIONS from '../questions.js';

export default function Question({ index, onSelectAnswer, onSkipAnswer }) {
	const [answer, setAnswer] = useState({
		selectedAnswer: '',
		isCorrect: null,
	});

	let timer = 5000;

	// If the user has already selected an answer, we set the timer to 1000ms,
	// because we want to show the answer for 1 second before moving to the next question
	if (answer.selectedAnswer) {
		timer = 1000;
	}

	// If the user has already selected an answer and it is correct or wrong, we set the timer to 2000ms,
	// because we want to show the answer for 2 seconds before moving to the next question
	if (answer.isCorrect !== null) {
		timer = 2000;
	}

	function handleSelectAnswer(answer) {
		setAnswer({
			selectedAnswer: answer,
			isCorrect: null,
		});

		setTimeout(() => {
			setAnswer({
				selectedAnswer: answer,
				isCorrect: QUESTIONS[index].answers[0] === answer,
			});

			setTimeout(() => {
				onSelectAnswer(answer);
			}, 2000);
		}, 1000);
	}

	let answerState = '';

	if (answer.selectedAnswer && answer.isCorrect !== null) {
		answerState = answer.isCorrect ? 'correct' : 'wrong';
	} else if (answer.selectedAnswer) {
		answerState = 'answered';
	}

	return (
		<div id="question">
			<QuestionTimer
				key={timer}
				timeout={timer}
				onTimeout={answer.selectedAnswer === '' ? onSkipAnswer : null}
				mode={answerState}
			/>
			<p id="question-overview">
				Question {index + 1} of {QUESTIONS.length}
			</p>
			<h2>{QUESTIONS[index].text}</h2>
			<Answers
				answers={QUESTIONS[index].answers}
				selectedAnswer={answer.selectedAnswer}
				answerState={answerState}
				onSelect={handleSelectAnswer}
			/>
		</div>
	);
}
