import { IoLocationOutline } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { CurrentWeather } from "../../types";
import Search from "../search/Search";
import "./currentWeatherCard.css";

const CurrentWeatherCard = ({ data }: { data: CurrentWeather }) => {
	const { main, weather, name, sys } = data;
	const temperature = main.temp.toFixed(0);
	const currentDate = new Date().toLocaleString("it-IT", {
		dateStyle: "medium",
		timeStyle: "short",
	});

	return (
		<section className="cardContainer blured" id="weather">
			<div className="weatherLayout">
				<Search />

				<img
					src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
					alt="weather condition image"
				/>

				<h2>{temperature} °C</h2>

				<div>
					<span id="mainWeather">{weather[0].main} </span>
					{weather[0].description}
				</div>

				<div className="separator" />

				<div>
					<IoLocationOutline />
					<span style={{ marginLeft: "4px" }}>
						{name}, {sys.country}
					</span>
				</div>

				<div>
					<FaRegCalendarAlt />
					<span style={{ marginLeft: "4px" }}>{currentDate}</span>
				</div>
			</div>
		</section>
	);
};

export default CurrentWeatherCard;
