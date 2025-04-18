type CountDisplayProps = {
  count: number
}
const CountDisplay = (props: CountDisplayProps) => {
  return (
    <div className={"counter-display"}>
      <span className={""}> {props.count} </span>
    </div>
  )
}

export default CountDisplay
