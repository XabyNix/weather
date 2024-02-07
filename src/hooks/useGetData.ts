import { useState, useEffect } from "react";

const useGetData = (endpoint: string) => {
	const [data, setData] = useState();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(endpoint);
				const jsonData = await res.json();
				setData(jsonData);
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, [endpoint]);
	return data;
};
export default useGetData;
