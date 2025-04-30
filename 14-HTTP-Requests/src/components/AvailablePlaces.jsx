// import { useEffect, useState } from 'react';

import Places from './Places.jsx';
import ErrorPage from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';
import { fetchAvailablePlaces } from '../http.js';
import { useFetch } from '../hooks/useFetch.js';

// Using a custom hook 4
async function fetchSortedPlaces() {
	const places = await fetchAvailablePlaces(); // outsource the actual fetching code

	// promise is a js object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value
	return new Promise((resolve) => {
		navigator.geolocation.getCurrentPosition((position) => {
			const sortedPlaces = sortPlacesByDistance(
				places,
				position.coords.latitude,
				position.coords.longitude
			);

			resolve(sortedPlaces);
		});
	});
}

export default function AvailablePlaces({ onSelectPlace }) {
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
	// useEffect(() => {
	// 	async function fetchPlaces() {
	// 		setIsFetching(true);

	// 		try {
	// 			const places = await fetchAvailablePlaces(); // outsource the actual fetching code

	// 			navigator.geolocation.getCurrentPosition((position) => {
	// 				const sortedPlaces = sortPlacesByDistance(
	// 					places,
	// 					position.coords.latitude,
	// 					position.coords.longitude
	// 				);
	// 				setAvailablePlaces(sortedPlaces);
	// 				setIsFetching(false); // When we are finish to load the places
	// 			});
	// 		} catch (error) {
	// 			setError({ message: error.message || 'Could not fetch places, please try again later.' });
	// 			setIsFetching(false); // Or we are get an error
	// 		}
	// 	}
	// 	fetchPlaces();
	// }, []);

	const { isFetching, error, fetchedData: availablePlaces } = useFetch(fetchSortedPlaces, []);

	function handleError() {
		setError(null);
	}

	if (error) {
		return <ErrorPage title="An error occurred" message={error.message} onConfirm={handleError} />;
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
