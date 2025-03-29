import { useEffect, useState } from "react";
import { getWeatherTemp } from "../services/useWeather";
import { WeatherType } from "../types";



export default function Home() {
  const [ temperature, setTemperature ] = useState<WeatherType>()

  useEffect(() => {
    getWeatherTemp().then(setTemperature).catch(console.error)
  }, [])
  
  return (
    <>
      <h1>{temperature !== null ? `${temperature?.temp} ºK` : "Loading..."}</h1>
    </>
  );
}

