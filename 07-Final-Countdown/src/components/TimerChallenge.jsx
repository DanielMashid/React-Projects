import { useState, useRef } from 'react';
import ResultModel from './ResultModel.jsx';

export default function TimerChallenge({ title, targetTime }) {
	const timer = useRef();
	const myDialog = useRef();
	const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

	const timeIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

	if (timeRemaining <= 0) {
		clearInterval(timer.current);
		myDialog.current.open();
	}

	function handleReset() {
		setTimeRemaining(targetTime * 1000);
	}

	function handleStartChallenge() {
		timer.current = setInterval(() => {
			setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
		}, 10);
	}

	function handleStopChallenge() {
		myDialog.current.open();
		clearInterval(timer.current);
	}

	return (
		<>
			<ResultModel
				ref={myDialog}
				result="lost"
				targetTime={targetTime}
				remainingTime={timeRemaining}
				onReset={handleReset}
			/>
			<section className="challenge">
				<h2>{title}</h2>
				<p className="challenge-time">
					{targetTime} second{targetTime > 1 ? 's' : ''}
				</p>
				<p>
					<button onClick={timeIsActive ? handleStopChallenge : handleStartChallenge}>
						{timeIsActive ? 'Stop' : 'Start'} challenge
					</button>
				</p>
				<p className={timeIsActive ? 'active' : undefined}>
					{timeIsActive ? 'Time is running...' : 'Timer inactive'}
				</p>
			</section>
		</>
	);
}
