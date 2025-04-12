import { useState } from "react";
import "./App.css";
import { useWeather } from "./services/UseWeather";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({
    name: "",
    main: {
      temp: 0,
      humidity: 0
    }
  });

  const Weather = async () => {
    if (!city) return;
    const weatherData = await useWeather(city);
    console.log("Temperature: ", weatherData.main.temp, " Humidity: ", weatherData.main.humidity);
    setWeather(weatherData);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    Weather();
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-3xl font-bold text-center p-10">Weather App</h1>
      
      <form onSubmit={handleSearch} className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter a city..."
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Search
          </button>
        </div>
      </form>

      {weather.main.temp !== 0 && (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-lg mb-2">City: {weather.name}</p>
          <p className="text-lg mb-2">Temperature: {weather.main.temp} °K</p>
          <p className="text-lg">Humidity: {weather.main.humidity}%</p>
        </div>
      )}
    </div>
  );
}

export default App;
