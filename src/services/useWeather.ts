import axios from 'axios'



export const useWeather = () => {
    const city = 'London'
    const apiKey = import.meta.env.VITE_API_KEY
    const apiURL = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`

    const getWeather : () => Promise<void> = async () => {
            const response = await axios.get(apiURL)
            console.log(response.data)
    }

    getWeather()
    
}