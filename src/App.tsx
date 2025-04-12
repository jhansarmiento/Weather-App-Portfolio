import "./App.css";
import { useWeather } from "./services/UseWeather";


function App() {

  const Weather = async () => {
    const { main: weather } = await useWeather()
     console.log( "Temperatura: ", weather.temp, " Humedad: ", weather.humidity,)
  }

  Weather()
  
  return (
    <>
      
    </>
  );
}

export default App;
