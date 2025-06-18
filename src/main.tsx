import React, { useState } from "react"
import ReactDOM from "react-dom/client"

function Main() {
  const [name, setName] = useState("")

  const handleChange = (event) => {
    setName(event.target.value)
  }

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <p>Привет, {name}!</p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<Main />)
