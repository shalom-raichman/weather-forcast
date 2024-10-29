interface Props {
  logoCode: string
}

export default function Logo({ logoCode }: Props) {
  return (
    <div className='logo'>
      <img src={`http://openweathermap.org/img/wn/${logoCode}@2x.png`} alt="weather icon" />
    </div>
  )
}
