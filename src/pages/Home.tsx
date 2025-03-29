import axios from "axios";

export default function Home() {
  const fetchWeather = async () => {
    const city = "London";
    const apiKey = import.meta.env.VITE_API_KEY;
    const geoURL = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`;

    const { data } = await axios(geoURL);
    const lon = data[0].lon;
    const lat = data[0].lat;
    console.log(lon, lat);

    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&limit=5&appid=${apiKey}`

    const response = await axios(weatherURL)
    console.log(response.data.main.temp)
  };

  fetchWeather();

  return (
    <>
      <h1>Consulta del Clima</h1>
    </>
  );
}

