import axios from "axios"
import { CoordinatesType, WeatherType } from "../types"

const apiKey = import.meta.env.VITE_API_KEY

const getCoordinates = async () : Promise<CoordinatesType> => {
    try {
        const city = 'London'
        const geoURL = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`;
    
        const { data } = await axios(geoURL)

        if(data.length === 0) {
            throw new Error(`No coordinates were found for the city ${city}`)
        }

        return {
            lat: data[0].lat,
            lon: data[0].lon
        }
        
    } catch (error) {
        console.log("Error when getting the coordinates", error)
        throw new Error("Failed to get coordinates")
    }


}

export const getWeatherTemp = async () => {
    try {
        const {lat, lon} = await getCoordinates()

        if(lat === null || lon === null) {
            console.error("Invalid coordinates")
            return
        }

        const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&limit=5&appid=${apiKey}`
        const { data } = await axios.get<{ main : WeatherType}>(weatherURL)

        return {
            temp: data.main.temp
        }

    } catch (error) {
        console.log("Error when getting the weather", error)
        throw new Error("Failed to get temperature")
    }

}

