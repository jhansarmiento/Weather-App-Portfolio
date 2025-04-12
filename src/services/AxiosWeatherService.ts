import axios from "axios";
import { CoordinatesType, getCurrentWeatherType } from "../types";
import { IHttpClient } from "./IHttpClient";


export class AxiosWeatherService implements IHttpClient {
    
    async getCoordinates(city: string, url: string): Promise<CoordinatesType> {
        try {
            const { data } = await axios.get<CoordinatesType[]>(url)

            if(Object.keys(data).length === 0) {
                throw new Error(`No coordinates were found for the city ${city}`)
            }

            return {
                lat: data[0].lat,
                lon: data[0].lon
            }
        } catch (error) {
            throw new Error("Failed to get coordinates")
        }
        
    }

    async getCurrentWeather(url: string): Promise<getCurrentWeatherType> {
        try {
            const { data } = await axios.get<getCurrentWeatherType>(url)

            if (!data.main || typeof data.main.temp !== "number") {
                throw new Error("Invalid response from API");
            }

            return {
                main: {
                    temp: data.main.temp,
                    humidity: data.main.humidity
                }
            }
 
        } catch (error) {
            throw new Error("Failed to get temperature")
        }
    }
}