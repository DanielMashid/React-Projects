// There are two ways to do this.
// 1. A way that supports older versions and.
// 2. A new way that supports newer versions.

// New way
// export default function ResultModel({ myRef, result, targetTime }) {
// 	return (
// 		<dialog ref={myRef} className="result-modal">
// 			<h2>You {result}</h2>
// 			<p>
// 				The target time was <strong>{targetTime} seconds.</strong>
// 			</p>
// 			<p>
// 				You stopped the timer at{' '}
// 				<strong>
// 					{result === 'won' ? 'less' : 'more'} than {targetTime} seconds.
// 				</strong>
// 			</p>
// 			<form method="dialog">
// 				<button>Close</button>
// 			</form>
// 		</dialog>
// 	);
// }

// Old way
import { forwardRef } from 'react';

const ResultModel = forwardRef(function ResultModel({ result, targetTime }, ref) {
	return (
		<dialog ref={ref} className="result-modal">
			<h2>You {result}</h2>
			<p>
				The target time was <strong>{targetTime} seconds.</strong>
			</p>
			<p>
				You stopped the timer at{' '}
				<strong>
					{result === 'won' ? 'less' : 'more'} than {targetTime} seconds.
				</strong>
			</p>
			<form method="dialog">
				<button>Close</button>
			</form>
		</dialog>
	);
});

export default ResultModel;
