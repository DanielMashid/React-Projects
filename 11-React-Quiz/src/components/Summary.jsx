import quizCompleteImg from '../assets/quiz-complete.png';
import QUESTIONS from '../questions.js';

export default function Summary({ userAnswers }) {
	const skippedAnswers = userAnswers.filter((answer) => answer === null);
	const correctAnswers = userAnswers.filter(
		(answer, index) => answer === QUESTIONS[index].answers[0]
	);

	const skippedAnswersShare = Math.round((skippedAnswers.length / userAnswers.length) * 100);
	const correctAnswersShare = Math.round((correctAnswers.length / userAnswers.length) * 100);
	const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;
	return (
		<div id="summary">
			<img src={quizCompleteImg} alt="Trophy Icon..."></img>
			<h2>Quiz Is Completed !!</h2>
			<div id="summary-stats">
				<p>
					<span className="number">{skippedAnswersShare}%</span>
					<span className="text">Skipped</span>
				</p>
				<p>
					<span className="number">{correctAnswersShare}%</span>
					<span className="text">Correctly</span>
				</p>
				<p>
					<span className="number">{wrongAnswersShare}%</span>
					<span className="text">Incorrectly</span>
				</p>
			</div>
			<ol>
				{userAnswers.map((answer, index) => {
					let cssClass = 'user-answer';
					if (answer === null) {
						cssClass += ' skipped';
					} else if (QUESTIONS[index].answers[0] === answer) {
						cssClass += ' correct';
					} else {
						cssClass += ' wrong';
					}
					answer = answer === null ? 'Skipped' : answer;
					return (
						<li key={index}>
							<h3>{index + 1}</h3>
							<p className="question">{QUESTIONS[index].text}</p>
							<p className={cssClass}>{answer}</p>
						</li>
					);
				})}
			</ol>
		</div>
	);
}
