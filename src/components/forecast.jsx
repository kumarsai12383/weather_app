function Forecast({ weatherData }) {
  return (
    <>
             {weatherData ? <h1 className="text-2xl font-bold text-white p-1.5">3-Day Forecast</h1>:null}
    {weatherData && 
        (
      <div className="grid md:grid-cols-3 gap-6 mb-8">
  {weatherData.weather.map((day) => (
    <div
      key={day.date}
      className="backdrop-blur-md bg-white/20 text-white rounded-2xl p-5 shadow-lg hover:scale-105 transition"
    >
      <h3 className="text-xl font-bold mb-4">
        {day.date}
      </h3>

      <p>🌡 Max: {day.maxtempC}°C</p>
      <p>❄ Min: {day.mintempC}°C</p>
      <p>📊 Avg: {day.avgtempC}°C</p>
      <p>🌅 {day.astronomy[0].sunrise}</p>
      <p>🌇 {day.astronomy[0].sunset}</p>
    </div>
  ))}
</div>
)}
    </>
  );
}

export default Forecast;
