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

	function handleCancelAddProject() {
		setProjectsState((prevState) => {
			return {
				...prevState, // Keep all the other properties in the state unchanged
				selectedProjectId: undefined, // undefined means no project selected
			};
		});
	}

	function handleProjectSelect(projectData) {
		setProjectsState((prevState) => {
			// const projectRandomId = Math.random();
			const newProject = {
				...projectData,
				id: Math.random(),
			};

			return {
				...prevState,
				selectedProjectId: undefined, // back to --> no project selected page
				// selectedProjectId: projectRandomId, // back to --> no project selected page
				projects: [...prevState.projects, newProject],
			};
		});
	}

	let content;

	if (projectsState.selectedProjectId === null) {
		content = <NewProject onAdd={handleProjectSelect} onCancel={handleCancelAddProject} />;
	} else if (projectsState.selectedProjectId === undefined) {
		content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
	}

	return (
		<main className="h-screen my-8 flex gap-8">
			<ProjectsSidebar
				onStartAddProject={handleStartAddProject}
				projects={projectsState.projects}
			/>
			{content}
		</main>
	);
}

export default App;
