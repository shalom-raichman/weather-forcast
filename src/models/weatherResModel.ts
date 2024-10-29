export default interface WeatherResModel {
  weather: {
    main: string
    icon: string
    description: string
  }[]
  main: {
    temp: number
    feels_like: number
  }
}