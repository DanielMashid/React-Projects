// One way:

export default function Tabs({ children, buttons, buttonsContainer }) {
	const ButtonsContainer = buttonsContainer;

	return (
		<>
			<ButtonsContainer>{buttons}</ButtonsContainer>
			{children}
		</>
	);
}

// Another way: (With capital letter for ButtonsContainer to make it a component)

// export default function Tabs({ children, buttons, ButtonsContainer }) {
// 	return (
// 		<>
// 			<ButtonsContainer>{buttons}</ButtonsContainer>
// 			{children}
// 		</>
// 	);
// }

// Another way: (With capital letter and default value for ButtonsContainer to make it a component)

// export default function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
// 	return (
// 		<>
// 			<ButtonsContainer>{buttons}</ButtonsContainer>
// 			{children}
// 		</>
// 	);
// }
