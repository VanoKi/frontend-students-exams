import { useState } from "react"
import CountDisplay from "./components/CountDisplay.tsx"
import Buttons from "./components/Buttons.tsx"

const App = () => {
  let [count, setCount] = useState(0)
  const onClickHandler = () => {
    setCount(++count)
  }
  const onClickResetHandler = () => {
    setCount(0)
  }
  return (
    <>
      <div className={"counter"}>
        <CountDisplay count={count} />
        <Buttons onClickHandker={onClickHandler} oncClickResetHandler={onClickResetHandler} />
      </div>
    </>
  )
}

export default App
