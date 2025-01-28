export default function SelectedProject({ project }) {
	const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});

	return (
		<div>
			<header>
				<div>
					<h1>{project.title}</h1>
					<button>Delete</button>
				</div>
				<div>
					<p>{formattedDate}</p>
					<p>{project.description}</p>
				</div>
			</header>
			Tasks
		</div>
	);
}
