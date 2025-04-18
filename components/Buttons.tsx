type ButtonsProps = {
  onClickHandker: () => void
  oncClickResetHandler: () => void
  count: number
}

export const Buttons = (props: ButtonsProps) => {
  return (
    <div className={"buttons"}>
      <button className={"btn"} onClick={props.onClickHandker} disabled={props.count === 5}>
        Increment
      </button>
      <button className={"btn"} onClick={props.oncClickResetHandler} disabled={props.count === 0}>
        Reset
      </button>
    </div>
  )
}
