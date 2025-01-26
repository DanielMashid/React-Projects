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
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

const ResultModel = forwardRef(function ResultModel({ targetTime, remainingTime, onReset }, ref) {
	const dialog = useRef();

	const userLost = remainingTime <= 0;
	const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
	const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

	// This hook allows the parent component to call the `open` method on the `ResultModel` component,
	// which in turn calls `showModal` on the `dialog` element to display the modal.
	useImperativeHandle(ref, () => {
		return {
			open() {
				dialog.current.showModal();
			},
		};
	});

	return createPortal(
		<dialog ref={dialog} className="result-modal">
			{userLost && <h2>You Lost</h2>}
			{!userLost && <h2>Your Score: {score}</h2>}
			<p>
				The target time was <strong>{targetTime} seconds.</strong>
			</p>
			<p>
				You stopped the timer with <strong>{formattedRemainingTime} seconds left</strong>
			</p>
			<form method="dialog" onSubmit={onReset}>
				<button>Close</button>
			</form>
		</dialog>,
		document.getElementById('modal')
	);
});

export default ResultModel;
