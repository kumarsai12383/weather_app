function HourlyData({ weatherData }) {
  function formatTime(time) {
    const hour = Number(time) / 100;

    if (hour === 0) return "12:00 AM";
    if (hour < 12) return `${hour}:00 AM`;
    if (hour === 12) return "12:00 PM";

    return `${hour - 12}:00 PM`;
  }
  return (
    <>
    {weatherData && (
      <h2 className="text-2xl font-bold mb-4 text-white">
        Hourly Forecast for {weatherData.nearest_area[0].areaName[0].value}
      </h2>
    )}
      {weatherData && (
        <div className="flex gap-4 overflow-x-auto pb-4 overflow-hidden">
            
          {weatherData.weather[0].hourly.map((hour) => (
            <div
              key={hour.time}
              className="min-w-[220px] backdrop-blur-md bg-white/20 text-white rounded-2xl p-4 shadow-lg"
            >
              <h3 className="font-bold text-lg mb-3">
                {formatTime(hour.time)}
              </h3>

              <p>🌡 {hour.tempC}°C</p>
              <p>🥵 {hour.FeelsLikeC}°C</p>
              <p>☁ {hour.weatherDesc[0].value}</p>
              <p>💧 {hour.humidity}%</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default HourlyData;
