import { useEffect, useState } from 'react';

import Places from './Places.jsx';
import ErrorPage from './Error.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
	// When using fetching data, it's super-common to have these three pieces of state work together.
	const [isFetching, setIsFetching] = useState(false); // loading state
	const [availablePlaces, setAvailablePlaces] = useState([]); // data state
	const [error, setError] = useState(); // error state

	// Using .then() 1
	// useEffect(() => {
	// 	fetch('http://localhost:3000/places')
	// 		.then((response) => {
	// 			return response.json();
	// 		})
	// 		.then((resData) => {
	// 			setAvailablePlaces(resData.places);
	// 		});
	// }, []);

	// Using async / await 2
	// useEffect(() => {
	// 	async function fetchPlaces() {
	// 		setIsFetching(true);
	// 		const response = await fetch('http://localhost:3000/places');
	// 		const resData = await response.json();
	// 		setAvailablePlaces(resData.places);
	// 		setIsFetching(false);
	// 	}
	// 	fetchPlaces();
	// }, []);

	// Using try / catch / finally and async / await 3
	useEffect(() => {
		async function fetchPlaces() {
			setIsFetching(true);
			try {
				const response = await fetch('http://localhost:3000/places'); // can take a couple of seconds
				const resData = await response.json();

				if (!response.ok) {
					throw new ErrorPage('Failed to fetch places');
				}

				setAvailablePlaces(resData.places);
			} catch (error) {
				setError({ message: error.message || 'Could not fetch places, please try again later.' });
			}

			setIsFetching(false);
		}
		fetchPlaces();
	}, []);

	if (error) {
		return <ErrorPage title="An error occurred" message={error.message} />;
	}

	return (
		<Places
			title="Available Places"
			places={availablePlaces}
			isLoading={isFetching}
			loadingText="Fetching place data..."
			fallbackText="No places available."
			onSelectPlace={onSelectPlace}
		/>
	);
}
