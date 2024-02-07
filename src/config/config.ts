const meteoApiKey = process.env.VITE_OPEN_WEATHER_KEY as string;
const geoapifyKey = process.env.VITE_GEOAPIFY_API_KEY as string;

export const endpoints = {
	forecast: `https://api.openweathermap.org/data/2.5/forecast?units=metric&appid=${meteoApiKey}`,
	weather: `https://api.openweathermap.org/data/2.5/weather?appid=${meteoApiKey}&units=metric&lang=it`,
	autocomplete: `https://api.geoapify.com/v1/geocode/autocomplete?apiKey=${geoapifyKey}&lang=it&format=json&type=city`,
};
