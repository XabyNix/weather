import { Forecast, List } from "../../types";
import "./forecastCard.css";

const getByDay = (list: List[]) => {
	const byDay = list.filter((value, index, array) => {
		if (index === 0) return true;
		const date = new Date(value.dt * 1000);
		const prevDate = new Date(array[index - 1].dt * 1000);

		return date.getDate() === prevDate.getDate() ? false : true;
	});
	return byDay;
};

const ForecastCard = ({ data }: { data: Forecast }) => {
	const options: Intl.DateTimeFormatOptions = {
		weekday: "long",
		day: "2-digit",
		month: "short",
	};

	const byDayDate = getByDay(data.list);
	return (
		<section className="cardContainer blured" id="forecast">
			<ul>
				{byDayDate.map(({ main, dt_txt, weather }, id) => {
					//convert date to WEEKDAY DD mm
					const date = new Date(dt_txt).toLocaleDateString("it-IT", options).toLocaleUpperCase();
					const image = weather[0].icon;
					return (
						<li key={id} className="singleDay">
							<img
								src={`https://openweathermap.org/img/wn/${image}@2x.png`}
								alt="icon of the weather"
							/>
							<div>
								<span className="temperature">{main.temp_max.toFixed(0)}°/</span>
								<span className="temperature min">{main.temp_min.toFixed(0)}°</span>
							</div>
							<p className="date">{date}</p>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default ForecastCard;
