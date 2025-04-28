export async function fetchAvailablePlaces() {
	const response = await fetch('http://localhost:3000/places'); // can take a couple of seconds
	const resData = await response.json();

	if (!response.ok) {
		throw new ErrorPage('Failed to fetch places');
	}
	return resData.places;
}
