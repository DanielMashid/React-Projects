import { useState } from 'react';

// let timer; We can declare timer here, because it's will be share across all component instances

export default function TimerChallenge({ title, targetTime }) {
	const [timeStarted, setTimeStarted] = useState(false);
	const [timerExpired, setTimerExpired] = useState(false);

	// let timer; We can declare timer here, because it's redeclared every time the component is rendered

	function handleStartChallenge() {
		timer = setTimeout(() => {
			setTimerExpired(true);
		}, targetTime * 1000);
		setTimeStarted(true);
	}

	function handleStopChallenge() {
		clearTimeout(timer);
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
