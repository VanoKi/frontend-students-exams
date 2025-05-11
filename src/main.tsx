import { MouseEvent, useState } from "react"
import { createRoot } from "react-dom/client"

const Button = () => {
  const [tagName, setTagName] = useState<string>()

  const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    setTagName(e.currentTarget.tagName)
  }

  return (
    <>
      <p>{tagName}</p>
      <button onClick={onClickHandler}>
        <span>Click</span>
      </button>
    </>
  )
}

createRoot(document.getElementById("root")!).render(<Button />)

// Что надо написать вместо ххх, что бы на странице появился текст BUTTON?
