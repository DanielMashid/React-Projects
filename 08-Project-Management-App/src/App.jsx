import { useState } from 'react';

import ProjectsSidebar from './components/ProjectsSidebar.jsx';
import NewProject from './components/NewProject.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx';

function App() {
	const [projectsState, setProjectsState] = useState({
		selectedProjectId: undefined, // undefined means no project selected
		projects: [],
	});

	function handleStartAddProject() {
		setProjectsState((prevState) => {
			return {
				...prevState, // Keep all the other properties in the state unchanged
				selectedProjectId: null, // null means new project is being created
			};
		});
	}

	function handleProjectSelect(projectData) {
		setProjectsState((prevState) => {
			const newProject = {
				...projectData,
				id: Math.random(),
			};

			return {
				...prevState,
				projects: [...prevState.projects, newProject],
			};
		});
	}

	console.log(projectsState);

	let content;

	if (projectsState.selectedProjectId === null) {
		content = <NewProject onAdd={handleProjectSelect} />;
	} else if (projectsState.selectedProjectId === undefined) {
		content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
	}

	return (
		<main className="h-screen my-8 flex gap-8">
			<ProjectsSidebar onStartAddProject={handleStartAddProject} />
			{content}
		</main>
	);
}

export default App;
