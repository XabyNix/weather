export const getCoordinates = async (location: string) => {
	const apiKey = import.meta.env.VITE_OPEN_WEATHER_KEY as string;
	const url = `http://api.openweathermap.org/geo/1.0/direct?appid=${apiKey}&q=${location},Italy`;
	try {
		const res = await fetch(url);
		const json = (await res.json()) as Array<{ lat: number; lon: number }>;
		const { lat, lon } = json[0];
		return { lat, lon };
	} catch (error) {
		console.error(error);
	}
};
