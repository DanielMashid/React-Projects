import { useState, useRef } from 'react';

export default function TimerChallenge({ title, targetTime }) {
	const timer = useRef();
	const [timeStarted, setTimeStarted] = useState(false);
	const [timerExpired, setTimerExpired] = useState(false);

	function handleStartChallenge() {
		timer.current = setTimeout(() => {
			setTimerExpired(true);
		}, targetTime * 1000);
		setTimeStarted(true);
	}

	function handleStopChallenge() {
		clearTimeout(timer.current);
	}

	return (
		<section className="challenge">
			<h2>{title}</h2>
			{timerExpired && <p> Time's up!</p>}
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
	);
}
