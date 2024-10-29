interface Props {
  temp: number
}


export default function Temp({ temp }: Props) {
  return (
    <div>
      <p>{temp + '°'}</p>
    </div>
  )
}
