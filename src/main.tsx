import { createRoot } from "react-dom/client"
import { useState } from "react"

function UsersList() {
  const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
  return <p>Тут будет список пользователей</p>
}

createRoot(document.getElementById("root")!).render(<UsersList />)

// Что вернёт выражение: typeof setUsers?
