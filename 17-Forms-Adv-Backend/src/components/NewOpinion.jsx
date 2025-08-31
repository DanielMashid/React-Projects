import { useActionState } from 'react';

export function NewOpinion() {
	function shareOpinionAction(prevState, formData) {
		const userName = formData.get('userName');
		const title = formData.get('title');
		const body = formData.get('body');

		let errorsMessage = [];

		if (title.trim().length < 5) {
			errorsMessage.push('Title must be at least five characters long.');
		}

		if (body.trim().length < 10 || body.trim().length > 300) {
			errorsMessage.push('Opinion must be between 10 and 300 characters long.');
		}

		if (!userName.trim()) {
			errorsMessage.push('Please provide your name.');
		}

		if (errorsMessage.length > 0) {
			return {
				errorsMessage,
				enteredValues: {
					userName,
					title,
					body,
				},
			};
		}

		// Here you can send the data to a server or perform other actions

		return { errorsMessage: null };
	}
	const [formState, formAction] = useActionState(shareOpinionAction, { errorsMessage: null });
	return (
		<div id="new-opinion">
			<h2>Share your opinion!</h2>
			<form action={formAction}>
				<div className="control-row">
					<p className="control">
						<label htmlFor="userName">Your Name</label>
						<input
							type="text"
							id="userName"
							name="userName"
							defaultValue={formState.enteredValues?.userName}
						/>
					</p>

					<p className="control">
						<label htmlFor="title">Title</label>
						<input
							type="text"
							id="title"
							name="title"
							defaultValue={formState.enteredValues?.title}
						/>
					</p>
				</div>
				<p className="control">
					<label htmlFor="body">Your Opinion</label>
					<textarea
						id="body"
						name="body"
						rows={5}
						defaultValue={formState.enteredValues?.body}
					></textarea>
				</p>

				{formState.errorsMessage && (
					<ul className="errors">
						{formState.errorsMessage.map((error) => (
							<li key={error}>{error}</li>
						))}
					</ul>
				)}

				<p className="actions">
					<button type="submit">Submit</button>
				</p>
			</form>
		</div>
	);
}
