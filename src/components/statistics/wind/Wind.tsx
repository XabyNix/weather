import { Bar, BarChart, ResponsiveContainer, Tooltip, TooltipProps, XAxis } from "recharts";
import { CurrentWeather } from "../../../types";
import { ValueType, NameType } from "recharts/types/component/DefaultTooltipContent";
import "./wind.css";

interface Props {
	data: {
		name: string;
		value: number;
	}[];
	currentData: CurrentWeather;
}

const CustomTooltip = ({ active, payload }: TooltipProps<ValueType, NameType>) => {
	if (active && payload && payload.length) {
		return (
			<div className="tooltip">
				<p>{`${payload[0].value} km/h`}</p>
			</div>
		);
	}
	return null;
};

const Wind = ({ data, currentData }: Props) => {
	return (
		<div className="innerCard" id="wind">
			<h3>Vento prossime ore</h3>
			<ResponsiveContainer maxHeight={80}>
				<BarChart data={data}>
					<Bar
						fill="darkcyan"
						activeBar={{ fill: "white" }}
						isAnimationActive={true}
						dataKey={"value"}
					></Bar>
					<Tooltip cursor={false} content={<CustomTooltip />} />
					<XAxis dataKey="name" stroke="var(--text-color)" />
				</BarChart>
			</ResponsiveContainer>
			<div>
				<h3>In qesto momento</h3>
				<h2>
					{currentData.wind.speed}
					<span>Km/h</span>
				</h2>
			</div>
		</div>
	);
};

export default Wind;
