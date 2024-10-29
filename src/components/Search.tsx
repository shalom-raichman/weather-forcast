
interface Props {
  setCityName: (cityName: string) => void
  cityName: string
}

export default function Search({ setCityName, cityName }: Props) {
    return (
    <div className='search'>
      <input
        type="text"
        placeholder='Enter city name'
        value={cityName}
        onChange={e => setCityName(e.target.value)}
      />

    </div>
  )
}
