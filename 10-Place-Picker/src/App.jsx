import { useRef, useState, useEffect } from 'react';

import Places from './components/Places.jsx';
import { AVAILABLE_PLACES } from './data.js';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import { sortPlacesByDistance } from './loc.js';

const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
const storedPlaces = storedIds.map((id) => AVAILABLE_PLACES.find((place) => place.id === id));

function App() {
	// const modal = useRef();
	const selectedPlace = useRef();
	const [modelIsOpen, setModelIsOpen] = useState(false);
	const [availablePlaces, setAvailablePlaces] = useState([]);
	const [pickedPlaces, setPickedPlaces] = useState(storedPlaces);

	// This here is an example for a redundant and not recommended usage of useEffect.
	// Because this code here, where we use local storage (unlike code location), runs synchronously.
	// Which means it basically finishes instantly.
	// It's executed line by line and once a line finished execution, it's done. We have the final result.

	// useEffect(() => {
	// 	const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
	// 	const storedPlaces = storedIds.map((id) => AVAILABLE_PLACES.find((place) => place.id === id));

	// 	setPickedPlaces(storedPlaces);
	// }, []);

	// Proper use of useEffect To prevent an infinite loop.
	// This code reads asynchronously because we have callback function.
	// That was executed by the browser and that happened at some point in the future.
	useEffect(() => {
		navigator.geolocation.getCurrentPosition((position) => {
			const sortedPlaces = sortPlacesByDistance(
				AVAILABLE_PLACES,
				position.coords.latitude,
				position.coords.longitude
			);
			setAvailablePlaces(sortedPlaces);
		});
	}, []);

	function handleStartRemovePlace(id) {
		// modal.current.open();
		setModelIsOpen(true);
		selectedPlace.current = id;
	}

	function handleStopRemovePlace() {
		setModelIsOpen(false);
	}

	function handleSelectPlace(id) {
		setPickedPlaces((prevPickedPlaces) => {
			if (prevPickedPlaces.some((place) => place.id === id)) {
				return prevPickedPlaces;
			}
			const place = AVAILABLE_PLACES.find((place) => place.id === id);
			return [place, ...prevPickedPlaces];
		});

		const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
		if (storedIds.indexOf(id) === -1) {
			localStorage.setItem('selectedPlaces', JSON.stringify([id, ...storedIds]));
		}
	}

	function handleRemovePlace() {
		setPickedPlaces((prevPickedPlaces) =>
			prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
		);
		setModelIsOpen(false);

		const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];

		// Filter out the ID to remove it
		const updatedIds = storedIds.filter((id) => id !== selectedPlace.current);

		// Save the updated list back to localStorage
		localStorage.setItem('selectedPlaces', JSON.stringify(updatedIds));
	}

	return (
		<>
			<Modal open={modelIsOpen} onClose={handleStopRemovePlace}>
				<DeleteConfirmation onCancel={handleStopRemovePlace} onConfirm={handleRemovePlace} />
			</Modal>

			<header>
				<img src={logoImg} alt="Stylized globe" />
				<h1>PlacePicker</h1>
				<p>
					Create your personal collection of places you would like to visit or you have visited.
				</p>
			</header>
			<main>
				<Places
					title="I'd like to visit ..."
					fallbackText={'Select the places you would like to visit below.'}
					places={pickedPlaces}
					onSelectPlace={handleStartRemovePlace}
				/>
				<Places
					title="Available Places"
					places={availablePlaces}
					fallbackText="Sorting places by distance..."
					onSelectPlace={handleSelectPlace}
				/>
			</main>
		</>
	);
}

export default App;
