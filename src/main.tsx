import { useState } from "react"
import { createRoot } from "react-dom/client"

const PasswordChecker = () => {
  const [password, setPassword] = useState<string>("")

  return (
    <main>
      <p>Your password must have more than 8 charters!</p>
      <input
        placeholder={"Enter your password"}
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
        type={"password"}
      />
      {XXX < 9 && <p style={{ color: "red" }}>The password is too short!</p>}
    </main>
  )
}

createRoot(document.getElementById("root")!).render(<PasswordChecker />)

// Что надо вставить вместо XXX, чтобы код работал нормально?
