import { useState } from 'react';

export default function Meals() {
	const [loadedMeals, setLoadedMeals] = useState([]);

	async function fetchMeals() {
		const response = await fetch('http://localhost:3000/meals', { method: 'GET' }); // can take a couple of seconds
		const meals = await response.json();

		if (!response.ok) {
			throw new Error('Failed to fetch meals');
		}
		setLoadedMeals(meals);
		return meals;
	}

	return (
		<ul id="meals">
			{loadedMeals.map((meal) => (
				<li key={meal.id}>{meal.name}</li>
			))}
		</ul>
	);
}
