import { AxiosWeatherService } from "./AxiosWeatherService";


export const useWeather = async () => {
    const weatherService = new AxiosWeatherService();

    const API_KEY = import.meta.env.VITE_API_KEY
    const city = "Bucaramanga"

    const coordinatesURL = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`
    const { lat, lon } = await weatherService.getCoordinates(city, coordinatesURL)

    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&limit=5&appid=${API_KEY}`
    const weather = await weatherService.getCurrentWeather(weatherURL)

    return weather
}
           
