import { useState } from 'react';

export function useInput(defaultValue, validationFn) {
	const [enteredValue, setEnteredValue] = useState(defaultValue);
	const [didEdit, setDitEdit] = useState(false);

	const valueIsValid = validationFn(enteredValue);

	function handleInputChange(event) {
		setEnteredValue(event.target.value);
		setDitEdit(false);
	}
	function handleInputBlur() {
		setDitEdit(true);
	}

	return {
		value: enteredValue,
		handleInputChange,
		handleInputBlur,
		hasError: didEdit && !valueIsValid,
	};
}
