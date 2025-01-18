// export default function TabButton(props) {
// 	return (
// 		<li>
// 			<button>{props.children}</button>
// 		</li>
// 	);
// }

export default function TabButton({ children, isSelected, ...props }) {
	return (
		// console.log("TAB BUTTON COMPONENT EXECUTING"), // for testing
		<li>
			<button
				// dynamic class name
				className={isSelected ? "active" : undefined}
				{...props}
			>
				{children}
			</button>
		</li>
	);
}
