import { useState } from 'react';

import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import { log } from './log.js';
import ConfigureCounter from './components/Counter/ConfigureCounter.jsx';

function App() {
	log('<App /> rendered');

	const [chosenCount, setChosenCount] = useState(0);

	function handleSetCount(enteredNumber) {
		setChosenCount(enteredNumber);
		console.log('chosenCount --> ', chosenCount); // Won't work, because this will always log the previous state, because setState is asynchronous
	}

	return (
		<>
			<Header />
			<main>
				<ConfigureCounter onSet={handleSetCount} />
				<Counter key={chosenCount} initialCount={chosenCount} />
				<Counter initialCount={0} />
			</main>
		</>
	);
}

export default App;
