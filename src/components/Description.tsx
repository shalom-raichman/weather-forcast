interface Props {
  description: string
}

export default function Description({ description }: Props) {
  return (
    <div>{description}</div>
  )
}
