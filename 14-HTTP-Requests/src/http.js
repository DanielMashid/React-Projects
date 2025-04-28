export async function fetchAvailablePlaces() {
	const response = await fetch('http://localhost:3000/places'); // can take a couple of seconds
	const resData = await response.json();

	if (!response.ok) {
		throw new ErrorPage('Failed to fetch places');
	}
	return resData.places;
}

export async function fetchUserPlaces() {
	const response = await fetch('http://localhost:3000/user-places'); // can take a couple of seconds
	const resData = await response.json();

	if (!response.ok) {
		throw new ErrorPage('Failed to fetch user places');
	}
	return resData.places;
}

export async function updateUserPlaces(places) {
	const response = await fetch('http://localhost:3000/user-places', {
		// can take a couple of seconds
		method: 'PUT',
		body: JSON.stringify({ places: places }), // or just shortcut {places}
		headers: {
			'Content-Type': 'application/json',
		},
	});
	const resData = await response.json();

	if (!response.ok) {
		throw new ErrorPage('Failed to update user places');
	}
	return resData.message;
}
