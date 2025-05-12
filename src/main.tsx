import { MouseEvent } from "react"
import { createRoot } from "react-dom/client"

const Button = () => {
  const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(typeof e === ххх)
  }
  return <button onClick={onClickHandler}>Click</button>
}

createRoot(document.getElementById("root")!).render(<Button />)

// Что надо написать вместо ххх, чтобы в консоль вывело true?
