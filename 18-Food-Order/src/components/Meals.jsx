import MealItem from './MealItem.jsx';
import useHttp from '../hooks/useHttp.js';

const requestConfig = {}; // simple trick to avoid infinite loop in useEffect

export default function Meals() {
	// 1
	// This is not good, because loadedMeals is undefined at the beginning, before the request completes
	// const { data: loadedMeals, isLoading, error } = useHttp('http://localhost:3000/meals');

	// Also not good, because loading in initially false, so we would not see a loading state
	// if (isLoading) {
	// 	return <p>Loading...</p>;
	// }

	// 2
	// We don't see the meals,
	// const { data: loadedMeals, isLoading, error } = useHttp('http://localhost:3000/meals', {}, []);
	// if (isLoading) {
	// 	return <p>Loading...</p>;
	// }

	// if (!loadedMeals) {
	// 	return <p>No meals found.</p>;
	// }

	// 3
	const {
		data: loadedMeals,
		isLoading,
		error,
	} = useHttp('http://localhost:3000/meals', requestConfig, []);

	if (isLoading) {
		return <p>Loading...</p>;
	}

	return (
		<ul id="meals">
			{loadedMeals.map((meal) => (
				<MealItem key={meal.id} meal={meal} />
			))}
		</ul>
	);
}
