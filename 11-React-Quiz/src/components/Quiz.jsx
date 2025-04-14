import { useState } from 'react';

export default function Quiz() {
	// Not the best way
	const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
	const [userAnswers, setUserAnswers] = useState([]);

	return <p>Currently Active Question</p>;
}
