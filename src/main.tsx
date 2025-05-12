import { useState } from "react"
import { createRoot } from "react-dom/client"

const User = () => {
  const [userName, setUserName] = useState<string>("")

  return (
    <div>
      <p>{userName}</p>
      <input
        // ❗X
        onChange={(e) => setUserName(e.currentTarget.value)}
      />
    </div>
  )
}

createRoot(document.getElementById("root")!).render(<User />)

// Что надо написать вместо ❗X, чтобы input был контролируемым?
