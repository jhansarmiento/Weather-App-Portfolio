import "./App.css";
import { useWeather } from "./services/UseWeather";


function App() {

  async function Weather() {
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
