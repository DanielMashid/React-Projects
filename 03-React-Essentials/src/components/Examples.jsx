import { useState } from "react";
import TabButton from "./TabButton.jsx";
import { EXAMPLES } from "../data.js"; // name export and not default export

export default function Examples() {
	const [selectedTopic, setSelectedTopic] = useState("components");

	let tabButton = <p>Please select a topic</p>;

	if (selectedTopic) {
		tabButton = (
			<div id="tab-content">
				<h3>{EXAMPLES[selectedTopic].title}</h3>
				<p>{EXAMPLES[selectedTopic].description}</p>
				<pre>
					<code>{EXAMPLES[selectedTopic].code}</code>
				</pre>
			</div>
		);
	}

	function handleSelect(selectedButton) {
		setSelectedTopic(selectedButton);
		// console.log(selectedTopic); This will log the previous state value because the state update is asynchronous
	}

	return (
		<section id="examples">
			<h2>Examples</h2>
			<menu>
				<TabButton
					isSelected={selectedTopic === "components"}
					onSelect={() => handleSelect("components")}
				>
					Components
				</TabButton>
				<TabButton
					isSelected={selectedTopic === "jsx"}
					onSelect={() => handleSelect("jsx")}
				>
					Jsx
				</TabButton>
				<TabButton
					isSelected={selectedTopic === "props"}
					onSelect={() => handleSelect("props")}
				>
					Props
				</TabButton>
				<TabButton
					isSelected={selectedTopic === "state"}
					onSelect={() => handleSelect("state")}
				>
					State
				</TabButton>
			</menu>
			{tabButton}
		</section>
	);
}
