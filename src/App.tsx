import { useEffect, useState } from "react";
import "./App.css";
import { useWeather } from "./services/UseWeather";

function App() {
  const [weather, setWeather] = useState({
    temp: 0,
    humidity: 0
  });

  const Weather = async () => {
    const { main: weatherData } = await useWeather();
    console.log("Temperatura: ", weatherData.temp, " Humedad: ", weather.humidity);
    setWeather(weatherData);
  };

  useEffect(() => {
    Weather();
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold text-center p-10">Weather</h1>
      <p className="pl-10">Temperatura: {weather.temp} °K</p>
      <p className="pl-10">Humedad: {weather.humidity}</p>
    </>
  );
}

export default App;
