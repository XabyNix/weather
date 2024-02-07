/* const meteoApiKey = import.meta.env.VITE_OPEN_WEATHER_KEY as string;
const geoapifyKey = import.meta.env.VITE_GEOAPIFY_API_KEY as string; */

export const endpoints = {
	forecast: `https://api.openweathermap.org/data/2.5/forecast?units=metric&appid=8e9e127d1c569633e7ee929715115547`, //${meteoApiKey},
	weather: `https://api.openweathermap.org/data/2.5/weather?appid=8e9e127d1c569633e7ee929715115547&units=metric&lang=it`,
	autocomplete: `https://api.geoapify.com/v1/geocode/autocomplete?apiKey=e6e42ae38e2e4ba4a22505fcd406d843&lang=it&format=json&type=city`,
};
