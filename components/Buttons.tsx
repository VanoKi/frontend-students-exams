type ButtonsProps = {
  onClickHandker: () => void
  oncClickResetHandler: () => void
  count: number
}

const Buttons = (props: ButtonsProps) => {
  return (
    <div>
      <button className={"btn"} onClick={props.onClickHandker} disabled={props.count === 5}>
        Increment
      </button>
      <button className={"btn"} onClick={props.oncClickResetHandler} disabled={props.count === 0}>
        Reset
      </button>
    </div>
  )
}

export default Buttons
