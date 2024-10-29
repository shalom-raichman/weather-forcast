import { Units } from '../enums/units'

interface Props {
  setUnit: (unit: Units) => void
}


export default function Unit({ setUnit }: Props) {
  return (
    <div className='unit'>
      <button onClick={() => setUnit(Units.C)}>°C</button>
      <button onClick={() => setUnit(Units.F)}>°F</button>
    </div>
  )
}
