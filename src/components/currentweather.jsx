function Currentweather({ weatherData, current, city }) {
  const cityName = weatherData
    ? (city.slice(0, 1).toUpperCase() + city.slice(1).toLowerCase())
    : weatherData?.nearest_area[0].areaName[0].value;
  return (
    <>
      {weatherData && (
        <div className="backdrop-blur-md bg-white/20 rounded-3xl p-8 text-white shadow-xl mb-8">
          <h1 className="text-4xl font-bold mb-4">📍{cityName}</h1>

          <div className="flex items-center gap-6">
            <div>
              <h2 className="text-6xl font-bold">🌡️{current.temp_C}°C</h2>
                <div className="flex items-center gap-4 mt-2">
                    <img src={current.weatherIconUrl[0].value} alt="" className="w-16 h-16 rounded-4xl" />
              <p className="text-xl">{current.weatherDesc[0].value}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div>
              <p className="text-sm opacity-80">Feels Like</p>
              <p>🌡️{current.FeelsLikeC}°C</p>
            </div>

            <div>
              <p className="text-sm opacity-80">Humidity</p>
              <p>💧{current.humidity}%</p>
            </div>

            <div>
              <p className="text-sm opacity-80">Wind</p>
              <p>💨{current.windspeedKmph} km/h</p>
            </div>

            <div>
              <p className="text-sm opacity-80">Date</p>
              <p>🗓️{weatherData.weather[0].date}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Currentweather;
