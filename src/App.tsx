import { useState } from "react";
import "./App.css";
import CurrentWeatherCard from "./components/currentWeatherCard/CurrentWeatherCard";
import ForecastCard from "./components/forecastCard/ForecastCard";
import Statistics from "./components/statistics/Statistics";
import WeatherMap from "./components/weatherMap/WeatherMap";
import { endpoints } from "./config/config";
import useGetData from "./hooks/useGetData";
import { CurrentWeather, Forecast } from "./types";
import { coordContext } from "./contexts/coordinateContext";
import EntryAnimation from "./components/entryAnimation/EntryAnimation";
import { AnimatePresence, motion } from "framer-motion";

const COORD = { lon: 14.2502445, lat: 37.0664363 };

const App = () => {
	const [coordinates, setCoordinates] = useState(COORD);
	const [isAnimationComplete, setIsAnimationComplete] = useState(false);

	const { lat, lon } = coordinates;

	const forecastData = useGetData(
		`${endpoints.forecast}&lat=${lat}&lon=${lon}`
	) as unknown as Forecast;

	const weatherData = useGetData(
		`${endpoints.weather}&lat=${lat}&lon=${lon}`
	) as unknown as CurrentWeather;

	const handleAnimationComplete = () => {
		setTimeout(() => setIsAnimationComplete(true), 500);
	};

	const changeCoordinates = (lat: number, lon: number) => {
		setCoordinates({ lat, lon });
	};

	const dataReady = !weatherData || !forecastData;
	return (
		<main>
			<coordContext.Provider value={{ coordinates, changeCoordinates }}>
				<AnimatePresence>
					{!isAnimationComplete || dataReady ? (
						<EntryAnimation setAnimationCompleted={handleAnimationComplete} />
					) : (
						<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid">
							<CurrentWeatherCard data={weatherData} />
							<ForecastCard data={forecastData} />
							<Statistics forecast={forecastData} current={weatherData} />
							<WeatherMap lat={lat} lon={lon} />
						</motion.div>
					)}
				</AnimatePresence>
			</coordContext.Provider>
		</main>
	);
};

export default App;
