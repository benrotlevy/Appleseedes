import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  const onClick = async () => {
    const { data } = await axios.get(`http://localhost:5000/${city}`);
    console.log(data);
    setWeather(data.current.temp_c);
  };

  return (
    <div className="App">
      <input value={city} onChange={({ target }) => setCity(target.value)} />
      <button onClick={onClick}>Search</button>
      <h1>Temp: {weather}</h1>
    </div>
  );
}

export default App;
