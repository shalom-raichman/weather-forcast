import WeatherModel from '../models/weatherModel'
import Description from './Description'
import Logo from './Logo'
import Temp from './Temp'

interface Props {
  weather: WeatherModel
}

export default function Weather({ weather }: Props) {
  return (
    <div className='weather'>
      <Logo logoCode={weather.logoCode}/>
      <Temp temp={weather.temp}/>
      <Description description={weather.description}/>
    </div>
  )
}
