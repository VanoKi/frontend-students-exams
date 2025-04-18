import { useState } from "react"
import { CountDisplay } from "./components/CountDisplay.tsx"
import { Buttons } from "./components/Buttons.tsx"
import "./App.css"

const App = () => {
  let [count, setCount] = useState(0)
  const onClickHandler = () => {
    if (count < 5) {
      setCount(++count)
    }
  }
  const onClickResetHandler = () => {
    setCount(0)
  }
  return (
    <>
      <div className={"counter"}>
        <CountDisplay count={count} />
        <Buttons onClickHandker={onClickHandler} oncClickResetHandler={onClickResetHandler} count={count} />
      </div>
    </>
  )
}

export default App
