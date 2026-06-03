# Weather App

A React + Vite weather dashboard that fetches live conditions and forecasts from wttr.in. The UI includes current conditions, a 3-day forecast, and an hourly breakdown, with a city search that persists in local storage.

## Features

- City search with validation and local storage persistence
- Current conditions (temperature, feels-like, humidity, wind, date)
- 3-day forecast cards
- Hourly forecast carousel
- Responsive layout with Tailwind CSS utility classes

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4 (via @tailwindcss/vite)
- ESLint 10

## Project Structure

```
src/
  App.jsx
  main.jsx
  components/
	 weatherApp.jsx
	 currentweather.jsx
	 forecast.jsx
	 HourlyData.jsx
```

## How It Works

- The search input updates `city` state and triggers `getWeather()` when you click Search.
- `getWeather()` validates input and fetches JSON data from `https://wttr.in/<city>?format=j1`.
- Data is stored in `weatherData`, and the city is saved to local storage.
- On load, the app checks for a saved city and fetches its weather automatically.

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the dev server:

   ```bash
   npm run dev
   ```

3. Build for production:

   ```bash
   npm run build
   ```

4. Preview the production build:

   ```bash
   npm run preview
   ```

## Configuration Notes

- The app uses the public wttr.in endpoint and does not require an API key.
- The background image in `App.jsx` is an external Unsplash URL.
- Tailwind CSS is integrated via Vite; styling is done with utility classes.

## Scripts

- `npm run dev` - Start the Vite development server
- `npm run build` - Create a production build
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint

## Known Limitations

- The app relies on a third-party service (wttr.in); availability and rate limits are outside this project's control.
- City name validation is minimal (non-empty input). Consider adding stricter validation if needed.

## License

No license file is currently included. Add one if you intend to distribute this project.
