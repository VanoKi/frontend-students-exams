import React, { useState } from "react"

function NameInput() {
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

export default NameInput
