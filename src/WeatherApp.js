import React, { useState } from "react"
import { Typography, Container } from "@mui/material"
import SearchBar from "./components/Searchbar"
import Loader from "./components/Loader"
import RenderIf from "./components/RenderIf"
import { WEATHER_API_KEY } from "./utils/constants"
import WeatherDetails from "./components/WeatherDetails"

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const fetchWeatherData = async location => {
    try {
      setLoading(true)
      setError("")

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WEATHER_API_KEY}&units=metric`
      )
      if (!response.ok) throw new Error("City not found. Please try again.")

      const data = await response.json()

      setWeatherData(data)
      setLoading(false)
      setError("")
    } catch (error) {
      setWeatherData(null)
      setLoading(false)
      setError("City not found. Please try again.")
    }
  }

  return (
    <div className="h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <Container className="mx-auto p-10 mt-8">
        <Typography variant="h4" align="center" className="text-white">
          Current Weather Details
        </Typography>
        <SearchBar onSearch={fetchWeatherData} />
        <RenderIf isTrue={error}>
          <div className="mt-20">
            <Typography variant="h5" color="#dd0101" align="center">
              {error}
            </Typography>
          </div>
        </RenderIf>
        <RenderIf isTrue={!loading} fallback={<Loader />}>
          {weatherData && <WeatherDetails weatherData={weatherData} />}
        </RenderIf>
      </Container>
    </div>
  )
}

export default WeatherApp
