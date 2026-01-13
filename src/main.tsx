import { CSSProperties } from "react"
import { createRoot } from "react-dom/client"

const commonStyles: CSSProperties = {
  border: "1px solid black",
  margin: "100px auto",
  width: "300px",
  height: "150px",
  textAlign: "center",
}

const btnStyles: CSSProperties = {
  color: "white",
  fontWeight: "bold",
  backgroundColor: "darkgray",
  borderRadius: "3px",
  minWidth: "40px",
}

const changeCounter = (state: number, action: any): number => {
  switch (action.type) {
    case "INC_VALUE":
      return state + 1
    case "RESET":
      return 0
    case "DEC_VALUE":
      return state - 1
    default:
      return state
  }
}

const Counter = () => {
  const [value, setValue] = XXX(changeCounter, 0)
  const [isCounter, setIsCounter] = YYY(true)

  return (
    <div style={commonStyles}>
      {isCounter && (
        <div>
          <div style={{ marginBottom: "20px" }}>
            <h2>{value}</h2>
            <button style={{ ...btnStyles, backgroundColor: "red" }} onClick={() => setIsCounter(false)}>
              OFF
            </button>
          </div>
          <button style={btnStyles} onClick={() => setValue({ type: "INC_VALUE" })}>
            +
          </button>
          <button style={btnStyles} onClick={() => setValue({ type: "RESET" })}>
            0
          </button>
          <button style={btnStyles} onClick={() => setValue({ type: "DEC_VALUE" })}>
            -
          </button>
        </div>
      )}
      {!isCounter && (
        <div style={{ textAlign: "center" }}>
          <h2>Counter not working</h2>
          <button style={{ ...btnStyles, backgroundColor: "green" }} onClick={() => setIsCounter(true)}>
            ON
          </button>
        </div>
      )}
    </div>
  )
}

createRoot(document.getElementById("root")!).render(<Counter />)

// Что надо написать вместо XXX и YYY, чтобы код работал? Напишите через пробел.