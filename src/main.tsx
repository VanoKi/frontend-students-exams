import { createRoot } from "react-dom/client"
import { useState } from "react"

function UsersList() {
  const [users, setUsers] = useState<string[]>(["Bob", "Alex", "Ann"])
  console.log(Array.isArray(users))
  return <p>Тут будет список пользователей</p>
}

createRoot(document.getElementById("root")!).render(<UsersList />)

// Что вернёт выражение: Array.isArray(users)?
