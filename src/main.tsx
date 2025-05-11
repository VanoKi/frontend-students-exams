import { useState } from "react"
import { createRoot } from "react-dom/client"

const User = () => {
  const [userName, setUserName] = useState<string>("")

  const onChangeHandler = (e: xxx) => {
    setUserName(e.currentTarget.value)
  }

  return (
    <div>
      <p>{userName}</p>
      <input onChange={onChangeHandler} />
    </div>
  )
}
createRoot(document.getElementById("root")!).render(<User />)

// Что надо написать вместо ххх, чтобы правильно типизировать параметр функции?
