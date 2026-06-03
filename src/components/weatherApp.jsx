import { useState, useEffect } from "react";
import Currentweather from "./currentweather";
import Forecast from "./forecast";
import HourlyData from "./HourlyData";

function WeatherApp() {
  const [city, setCity] = useState("");
  const [inputCity , setInputCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function validateCityName(CityName) {
    const havInput = CityName.trim();
    return havInput.length > 0;
  }

  useEffect(() => {
    const savedCity = localStorage.getItem("city");

    if (savedCity) {
      setCity(savedCity);
      getWeather(savedCity);
    }
  }, []);

  async function getWeather(cityName) {
    if (!validateCityName(cityName)) {
      setError("Invalid city name. Please enter a valid city name.");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const res = await fetch(`https://wttr.in/${cityName}?format=j1`);

      const data = await res.json();

      setWeatherData(data);

      localStorage.setItem("city", cityName);
    } catch (err) {
      setError("Unable to fetch weather data");
    } finally {
      setLoading(false);
    }
  }
  const current = weatherData ? weatherData.current_condition[0] : null;
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <input
          type="text"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          
          }}
          placeholder="Search city..."
          className="flex-1 px-4 py-3 rounded-xl border-none outline-none shadow-lg bg-amber-50"
        />

        <button
          onClick={() =>{ getWeather(city); 
            setInputCity(city)}}
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition"
        >
          Search
        </button>
      </div>

      {loading && (
        <div className="text-gray-950 font-extrabold glass-effect p-2 rounded-2xl relative h-full w-full flex items-center z-20 justify-center top-90 bg-amber-50 left-0">
          <p className="text-lg">
            Loading...
          </p>
        </div>
        
      )}
      {error && (
        <p className="text-red-500 font-bold bg-red-100 p-2 rounded-2xl">
          Error: {error}
        </p>
      )}

      <Currentweather weatherData={weatherData} current={current} city={inputCity} />
      <Forecast weatherData={weatherData} />
      <HourlyData weatherData={weatherData} />
    </>
  );
}
export default WeatherApp;
