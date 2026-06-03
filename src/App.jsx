import WeatherApp from "./components/weatherApp";
import "./App.css";
function App() {
  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center p-6"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504608524841-42fe6f032b4b')",
        }}
      >
        {" "}
        <div className="max-w-7xl mx-auto">
          <WeatherApp />
        </div>
      </div>
    </>
  );
}

export default App;
