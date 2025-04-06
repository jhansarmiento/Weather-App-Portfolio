import { CoordinatesType, getCurrentWeatherType } from "../types";

export interface IHttpClient {
    getCoordinates(city: string, url: string): Promise<CoordinatesType>,
    getCurrentWeather(url: string) : Promise<getCurrentWeatherType>
}

