import { useState, useEffect, useCallback } from 'react';

async function sentHttpRequest(url, config) {
	const response = await fetch(url, config); // fetch returns a promise
	const resData = await response.json(); // response.json() also returns a promise

	// if response is not ok, throw an error
	if (!response.ok) {
		throw new Error(resData.message || 'Something went wrong, failed to send request');
	}

	return resData;
}

export default function useHttp(url, config, initialData) {
	const [data, setData] = useState(initialData);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState();

	function clearData() {
		setData(initialData);
	}

	const sendRequest = useCallback(
		async function sendRequest(dataConfig) {
			setIsLoading(true);
			try {
				const resData = await sentHttpRequest(url, { ...config, body: dataConfig });
				setData(resData);
			} catch (error) {
				setError(error.message || 'Something went wrong!');
			}
			setIsLoading(false);
		},
		[url, config]
	);

	useEffect(() => {
		// not good enough
		// if (config && config.method === 'GET' ) {
		// 	sendRequest();
		// }

		// better
		if ((config && (config.method === 'GET' || !config.method)) || !config) {
			sendRequest();
		}
	}, [sendRequest, config]);
	return { data, isLoading, error, sendRequest, clearData };

	// return { data,
	//   isLoading,
	//   error,
	//   sendRequest // one way to do that is to return the function itself so that it can be called from outside the hook
	// };
}
