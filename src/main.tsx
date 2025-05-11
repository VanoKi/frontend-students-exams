import { useState, ChangeEvent } from "react"
import { createRoot } from "react-dom/client"

const User = () => {
  const [userName, setUserName] = useState<string>("")

  const [text, setText] = useState<string>("")

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.currentTarget.value)
  }

  return (
    <div>
      <input
        value={userName}
        onChange={onChangeHandler}
        onBlur={() => {
          // ❗X
          setText(userName)
        }}
      />
      <p>{text}</p>
    </div>
  )
}

createRoot(document.getElementById("root")!).render(<User />)

// Что надо написать вместо ❗X,
// чтобы после вывода текста в параграф содержимое формы ввода очищалось?
