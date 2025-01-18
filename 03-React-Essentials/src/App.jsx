import { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "./data.js"; // name export and not default export
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
	const [selectedTopic, setSelectedTopic] = useState();

	function handleSelect(selectedButton) {
		setSelectedTopic(selectedButton);
		// console.log(selectedTopic); This will log the previous state value because the state update is asynchronous
	}

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

	console.log("APP COMPONENT EXECUTING"); // Just for learn

	return (
		<div>
			<Header />
			<main>
				<section id="core-concepts">
					<h2>Core Concepts</h2>
					<ul>
						<CoreConcept
							title={CORE_CONCEPTS[0].title}
							description={CORE_CONCEPTS[0].description}
							image={CORE_CONCEPTS[0].image}
						/>
						{/* spread operator (Shortcut) */}
						<CoreConcept {...CORE_CONCEPTS[1]} />
						<CoreConcept {...CORE_CONCEPTS[2]} />
						<CoreConcept {...CORE_CONCEPTS[3]} />
					</ul>
				</section>
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
			</main>
		</div>
	);
}

export default App;
