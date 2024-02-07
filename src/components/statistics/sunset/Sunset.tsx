import "./sunset.css";
import GaugeComponent from "react-gauge-component";

const getNumberDate = (arg?: number) => {
	//convert return the date from timestamp arg or the current date if omit arg
	const toConvert = arg ? new Date(arg * 1000) : new Date();

	const date = toConvert.toLocaleTimeString("it-IT", {
		timeStyle: "short",
	});

	return Number(date.replace(":", "."));
};

const Sunset = ({ data }: { data: { sunset: number; sunrise: number } }) => {
	const { sunrise, sunset } = data;

	return (
		<div className="innerCard" id="sunset">
			<GaugeComponent
				className="sunset-graphic"
				minValue={getNumberDate(sunrise)}
				maxValue={getNumberDate(sunset)}
				value={getNumberDate()}
				marginInPercent={0.027}
				arc={{
					width: 0.07,
					gradient: true,
					subArcs: [{ limit: 12, color: "orange" }, { color: "SteelBlue" }],
				}}
				type="semicircle"
				pointer={{ type: "blob", length: 0.2 }}
				labels={{
					valueLabel: { style: { textShadow: "none", fill: "var(--text-color)" } },
					tickLabels: {
						hideMinMax: true,
					},
				}}
			/>

			<p className="sunsetTime">
				<span>Alba {getNumberDate(sunrise)}</span>
				<span>Tramonto {getNumberDate(sunset)}</span>
			</p>
		</div>
	);
};

export default Sunset;
