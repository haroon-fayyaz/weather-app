import { Typography } from "@mui/material"
import startCase from "lodash/startCase"

export default function WeatherDetails({ weatherData }) {
  const Info = ({ label, value }) => (
    <Typography variant="h5" className="mb-2">
      {label}:&nbsp;{value}
    </Typography>
  )

  return (
    <div className="mt-8">
      <Typography variant="h3" align="center" className="text-xl mb-2 text-white">
        {weatherData.name}, {weatherData.sys.country}
      </Typography>
      <div className="flex justify-center items-center text-gray-100 mt-6">
        <div className="flex flex-col items-center justify-center p-4 rounded-md shadow-md">
          <Info label="Temperature" value={weatherData.main.temp + " °C"} />
          <Info label="Humidity" value={weatherData.main.humidity + " %"} />
          <Info label="Wind Speed" value={weatherData.wind.speed + " m/s"} />
          <Info label="Description" value={startCase(weatherData.weather[0].description)} />
        </div>
      </div>
    </div>
  )
}
