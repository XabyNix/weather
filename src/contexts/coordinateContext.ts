import { createContext } from "react";
import { Coordinates } from "../types";

type PlaceContext = {
	coordinates: Coordinates;
	changeCoordinates: (lat: number, lon: number) => void;
};

export const coordContext = createContext<PlaceContext>({} as PlaceContext);
