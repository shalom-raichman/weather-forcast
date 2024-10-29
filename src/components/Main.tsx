import { useEffect, useState } from 'react'
import Search from './Search'
import Unit from './Unit'
import Weather from './Weather'
import WeatherModel from '../models/weatherModel'
import WeatherResModel from '../models/weatherResModel'
import { Units } from '../enums/units'

const API_KEY = 'd7f64e05043d19af9eb95658ec1a2f74'
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=`
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

export default function Main() {
  const [weather, setWeather] = useState<WeatherModel>({ logoCode: '', temp: 25, description: '' })
  const [cityName, setCityName] = useState('london')
  const [unit, setUnit] = useState(Units.C)

  useEffect(() => {
    (async () => {
      try {
        if (cityName.length < 3) return
        const res = await fetch(`${BASE_URL}${cityName}&appid=${API_KEY}&units=${unit}`)
        const data = await res.json() as WeatherResModel
        if (!res.ok) throw new Error(res.statusText)
        const weather: WeatherModel = {
          logoCode: data.weather[0].icon,
          temp: data.main.temp,
          description: data.weather[0].description
        }
        setWeather(weather)
      } catch (err) {
        console.log((err as Error).message)
      }
    })()
  }, [cityName, unit])

  useEffect(() => {
    (async () => {
      navigator.geolocation.getCurrentPosition(async (position) => {
        try {
          const res = await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&limit=5&appid=${API_KEY}`)
          const nameCity = await res.json()
          if (!res.ok) throw new Error(res.statusText)
          setCityName(nameCity[0].name)
        } catch (err) {
          console.log((err as Error).message)
        }

      })
    })()
  }, [])

  return (
    <div className='main'>
      <Search setCityName={setCityName} cityName={cityName} />
      <Weather weather={weather} />
      <Unit setUnit={setUnit} />
    </div>
  )
}
