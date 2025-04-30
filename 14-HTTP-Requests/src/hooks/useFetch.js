import { useEffect, useState } from 'react';

export function useFetch(fetchFunction, initialValue) {
	const [isFetching, setIsFetching] = useState(false); // loading state
	const [error, setError] = useState(); // error state
	const [fetchedData, setFetchedData] = useState(initialValue); // data state

	useEffect(() => {
		async function fetchData() {
			setIsFetching(true);
			try {
				const data = await fetchFunction();
				setFetchedData(data);
			} catch (error) {
				setError({ message: error.message || 'Failed to fetch data.' });
			}

			setIsFetching(false);
		}

		fetchData();
	}, [fetchFunction]);

	return {
		isFetching,
		fetchedData,
		setFetchedData,
		error,
	};
}
