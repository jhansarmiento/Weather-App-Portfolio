import "./App.css";
import { useWeather } from "./services/UseWeather";

function App() {
  const weather = useWeather()
  console.log(weather)
  return (
    <>
    </>
  );
}

export default App;
