import { useState } from "react"
import { createRoot } from "react-dom/client"

export const colors = ["red", "yellow", "green", "blue", "violet", "chartreuse"]

const styles = {
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  backgroundColor: "black",
}

const Colorize = () => {
  const [color, setColor] = useState<string>("black")

  const getColor = (colors: string[]) => {
    const nextColor = colors[Math.floor(Math.random() * colors.length)]
    return nextColor
  }

  return (
    <main>
      <div style={{ ...styles, backgroundColor: color }} />
      <div>
        <button onClick={() => setColor(XXX)}>Get random color</button>
      </div>
    </main>
  )
}

createRoot(document.getElementById("root")!).render(<Colorize />)

// Что надо вставить вместо XXX, чтобы круг менял цвет по клику?
