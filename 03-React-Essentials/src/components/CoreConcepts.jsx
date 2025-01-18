import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";

export default function CoreConcepts() {
	return (
		<section id="core-concepts">
			<h2>Core Concepts</h2>
			<ul>
				{/* One way to show the data with the components */}

				{/* <CoreConcept
                                    title={CORE_CONCEPTS[0].title}
                                    description={CORE_CONCEPTS[0].description}
                                    image={CORE_CONCEPTS[0].image}
                                /> */}

				{/* spread operator (Shortcut) */}

				{/* <CoreConcept {...CORE_CONCEPTS[1]} />
                                <CoreConcept {...CORE_CONCEPTS[2]} />
                                <CoreConcept {...CORE_CONCEPTS[3]} /> */}

				{/* Another way to do that with map function */}
				{CORE_CONCEPTS.map((conceptItem) => (
					<CoreConcept key={conceptItem.title} {...conceptItem} />
				))}
			</ul>
		</section>
	);
}
