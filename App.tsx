import { useState } from "react"

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
      </div>
    </>
  )
}

export default App
