import { useState } from 'react';

export default function NewTask({ onAddTaskFromApp }) {
	// important to have a default value of an empty string ('') because the input field is a controlled component
	// This is likely caused by the value changing from undefined to a defined value, which should not happen.
	// Decide between using a controlled or uncontrolled input element for the lifetime of the component
	const [enteredTask, setEnteredTask] = useState('');

	function handleTaskChange(event) {
		setEnteredTask(event.target.value);
	}

	function handleClickButton() {
		if (enteredTask.trim() === '') {
			return;
		}
		onAddTaskFromApp(enteredTask);
		setEnteredTask('');
	}

	return (
		<div className="flex items-center gap-4">
			<input
				type="text"
				className="w-64 px-2 py-1 rounded-sm bg-stone-200"
				onChange={handleTaskChange}
				value={enteredTask}
			/>
			<button className="text-stone-700 hover:text-stone-500" onClick={handleClickButton}>
				Add Task
			</button>
		</div>
	);
}
