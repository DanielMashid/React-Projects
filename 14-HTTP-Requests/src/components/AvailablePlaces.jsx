import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
	// Todo: Fetch available places from backend API
	const [availablePlaces, setAvailablePlaces] = useState([]);

	return (
		<Places
			title="Available Places"
			places={availablePlaces}
			fallbackText="No places available."
			onSelectPlace={onSelectPlace}
		/>
	);
}
