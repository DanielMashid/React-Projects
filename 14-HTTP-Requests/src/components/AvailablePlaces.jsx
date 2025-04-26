import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
	const [availablePlaces, setAvailablePlaces] = useState([]);

	// Fetching data from the backend API
	// Not a good way, because it will be called every time the component is rendered
	fetch('http://localhost:3000/places')
		.then((response) => {
			return response.json();
		})
		.then((resData) => {
			setAvailablePlaces(resData.Places);
		});

	return (
		<Places
			title="Available Places"
			places={availablePlaces}
			fallbackText="No places available."
			onSelectPlace={onSelectPlace}
		/>
	);
}
