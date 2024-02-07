import Sunset from "./sunset/Sunset";
import Visibility from "./visibility/Visibility";
import { CurrentWeather, Forecast } from "../../types";
import Wind from "./wind/Wind";
import Feelslike from "./feelslike/Feelslike";
import Humidity from "./humidity/Humidity";
import "./statistics.css";

const Statistics = ({ forecast, current }: { forecast: Forecast; current: CurrentWeather }) => {
	//group wind data by day, [0] is today if at least 3 hour from midnight
	const wind = forecast.list
		.filter((_, index) => index < 7)
		.map(({ wind, dt }) => {
			const name = new Date(dt * 1000).toLocaleTimeString("it-IT", { timeStyle: "short" });
			return { name, value: wind.speed };
		});

	const { sunrise, sunset } = current.sys;

	return (
		<section className="cardContainer blured" id="statistics">
			<h3 id="title">Aggiornamenti di oggi</h3>

			<div className="hilights-grid">
				<Wind data={wind} currentData={current} />
				<Sunset data={{ sunrise, sunset }} />

				<Visibility data={current.visibility} />
				<Feelslike feelslikeTemp={current.main.feels_like} />
				<Humidity humidity={current.main.humidity} />
			</div>
		</section>
	);
};

export default Statistics;
