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
			// myDialog.current.showModal(); This line would open the dialog modal if uncommented and myDialog is correctly referenced.
			myDialog.current.open(); // This line calls the custom `open` method defined in the ResultModel component to show the modal.
		}, targetTime * 1000);
		setTimeStarted(true);
	}

	function handleStopChallenge() {
		clearTimeout(timer.current);
	}

	return (
		<>
			<ResultModel ref={myDialog} result="lost" targetTime={targetTime} />
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
