// export default function TabButton(props) {
// 	return (
// 		<li>
// 			<button>{props.children}</button>
// 		</li>
// 	);
// }

export default function TabButton({ children, onSelect, isSelected }) {
	return (
		// console.log("TAB BUTTON COMPONENT EXECUTING"), // for testing
		<li>
			<button
				// dynamic class name
				className={isSelected ? "active" : undefined}
				onClick={onSelect}
			>
				{children}
			</button>
		</li>
	);
}
