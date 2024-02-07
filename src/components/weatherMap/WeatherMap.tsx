import "leaflet/dist/leaflet.css";
import { LayerGroup, LayersControl, MapContainer, TileLayer, useMap } from "react-leaflet";
import { Coordinates } from "../../types";

const layersConfig = [
	{
		name: "Nuvole",
		OWMLayerName: "clouds_new",
	},
	{
		name: "Pioggia",
		OWMLayerName: "precipitation_new",
	},
	{
		name: "Pressione",
		OWMLayerName: "pressure_new",
	},
	{
		name: "Vento",
		OWMLayerName: "wind_new",
	},
	{
		name: "Temperatura",
		OWMLayerName: "temp_new",
	},
];

const WeatherMap = ({ lat, lon }: Coordinates) => {
	return (
		<section className="cardContainer" id="weathermap">
			<MapContainer center={[lat, lon]} zoom={13}>
				<ChangeView lat={lat} lon={lon} />
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<LayersControl position="topright">
					{layersConfig.map(({ name, OWMLayerName }) => (
						<LayersControl.Overlay name={name} key={name}>
							<LayerGroup>
								<TileLayer
									url={`https://tile.openweathermap.org/map/${OWMLayerName}/{z}/{x}/{y}.png?appid=8e9e127d1c569633e7ee929715115547`}
								/>
							</LayerGroup>
						</LayersControl.Overlay>
					))}
				</LayersControl>
			</MapContainer>
		</section>
	);
};

export default WeatherMap;

const ChangeView = ({ lat, lon }: Coordinates) => {
	const map = useMap();
	map.setView([lat, lon]);
	return null;
};
