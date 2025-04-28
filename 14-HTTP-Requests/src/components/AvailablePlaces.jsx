import { useEffect, useState } from 'react';

import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
	const [availablePlaces, setAvailablePlaces] = useState([]);
	const [isFetching, setIsFetching] = useState(false);

	// Using async / await
	useEffect(() => {
		async function fetchPlaces() {
			setIsFetching(true);
			const response = await fetch('http://localhost:3000/places'); // can take a couple of seconds
			const resData = await response.json();
			setAvailablePlaces(resData.places);
			setIsFetching(false);
		}
		fetchPlaces();
	}, []);

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
