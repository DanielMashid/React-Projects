import { useState, useRef } from 'react';
import ResultModel from './ResultModel.jsx';

export default function TimerChallenge({ title, targetTime }) {
	const timer = useRef();
	const myDialog = useRef();

	const [timeStarted, setTimeStarted] = useState(false);
	const [timerExpired, setTimerExpired] = useState(false);

	function handleStartChallenge() {
		timer.current = setTimeout(() => {
			setTimerExpired(true);
			myDialog.current.showModal();
		}, targetTime * 1000);
		setTimeStarted(true);
	}

	function handleStopChallenge() {
		clearTimeout(timer.current);
	}

	return (
		<>
			<ResultModel myRef={myDialog} result="lost" targetTime={targetTime} />
			<section className="challenge">
				<h2>{title}</h2>
				<p className="challenge-time">
					{targetTime} second{targetTime > 1 ? 's' : ''}
				</p>
				<p>
					<button onClick={timeStarted ? handleStopChallenge : handleStartChallenge}>
						{timeStarted ? 'Stop' : 'Start'} challenge
					</button>
				</p>
				<p className={timeStarted ? 'active' : undefined}>
					{timeStarted ? 'Time is running...' : 'Timer inactive'}
				</p>
			</section>
		</>
	);
}
