import { useEffect, useRef } from 'react';

import { createPortal } from 'react-dom';

export default function Modal({ children, open, className = '' }) {
	const dialogRef = useRef();

	useEffect(() => {
		const modal = dialogRef.current;
		if (open) {
			modal.showModal();
		}

		return () => modal.close(); // cleanup function to close the dialog when component unmounts or open changes
	}, [open]);

	return createPortal(
		<dialog ref={dialogRef} className={`modal ${className}`}>
			{children}
		</dialog>,
		document.getElementById('modal')
	);
}
