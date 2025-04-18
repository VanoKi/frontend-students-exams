type CountDisplayProps = {
  count: number
}
export const CountDisplay = (props: CountDisplayProps) => {
  return (
    <div className={"counter-display"}>
      <span className={props.count >= 5 ? "red" : ""}> {props.count} </span>
    </div>
  )
}
