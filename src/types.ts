export interface Forecast {
	cod: string;
	message: number;
	cnt: number;
	list: List[];
	city: City;
}

export interface List {
	dt: number;
	main: Main;
	weather: Weather[];
	clouds: Clouds;
	wind: Wind;
	visibility: number;
	pop: number;
	sys: Sys;
	dt_txt: string;
}

export interface Main {
	temp: number;
	feels_like: number;
	temp_min: number;
	temp_max: number;
	pressure: number;
	sea_level: number;
	grnd_level: number;
	humidity: number;
}

export interface Weather {
	id: number;
	main: string;
	description: string;
	icon: string;
}

export interface Clouds {
	all: number;
}

export interface Wind {
	speed: number;
	deg: number;
	gust: number;
}

export interface Sys {
	pod: string;
}

export interface City {
	id: number;
	name: string;
	coord: Coord;
	country: string;
	population: number;
	timezone: number;
	sunrise: number;
	sunset: number;
}

export interface Coord {
	lat: number;
	lon: number;
}
//dasdawd
export interface CurrentWeather {
	coord: Coord;
	weather: Weather[];
	base: string;
	main: Main;
	visibility: number;
	wind: Wind;
	rain: Rain;
	clouds: Clouds;
	dt: number;
	sys: CurrentSys;
	timezone: number;
	id: number;
	name: string;
	cod: number;
}

export interface Rain {
	"1h": number;
}

export interface CurrentSys {
	type: number;
	id: number;
	country: string;
	sunrise: number;
	sunset: number;
}

/** GEOAPIFY **/
export interface GeoapifyAutocomplete {
	results: Result[];
	query: Query;
}

export interface Result {
	country: string;
	country_code: string;
	state: string;
	city: string;
	datasource: Datasource;
	lon: number;
	lat: number;
	population: number;
	result_type: string;
	formatted: string;
	address_line1: string;
	address_line2: string;
	category: string;
	timezone: Timezone;
	plus_code: string;
	rank: Rank;
	place_id: string;
	bbox: Bbox;
	postcode?: string;
	plus_code_short?: string;
}

export interface Datasource {
	sourcename: string;
	attribution: string;
	license: string;
	url: string;
}

export interface Timezone {
	name: string;
	offset_STD: string;
	offset_STD_seconds: number;
	offset_DST: string;
	offset_DST_seconds: number;
	abbreviation_STD: string;
	abbreviation_DST: string;
}

export interface Rank {
	confidence: number;
	confidence_city_level: number;
	match_type: string;
}

export interface Bbox {
	lon1: number;
	lat1: number;
	lon2: number;
	lat2: number;
}

export interface Query {
	text: string;
	parsed: Parsed;
}

export interface Parsed {
	city: string;
	expected_type: string;
}
export interface Coordinates {
	lat: number;
	lon: number;
}
