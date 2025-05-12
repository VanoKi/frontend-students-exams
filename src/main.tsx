import { useState } from "react"
import { createRoot } from "react-dom/client"

const ColorButton = () => {
  const [isColored, setIsColored] = useState<boolean>(false)

  return (
    <button style={{ backgroundColor: `${XXX === true ? "red" : ""}` }} onClick={() => setIsColored(true)}>
      Меняю цвет по клику
    </button>
  )
}

createRoot(document.getElementById("root")!).render(<ColorButton />)

// Что надо написать вместо XXX, чтобы при клике кнопка становилась красной?
