import { useState } from "react"
import { createRoot } from "react-dom/client"

function UsersList() {
  const results = useState<string[]>(["Bob", "Alex", "Ann"])

  const users = results[0]
  const setUsers = results[1]

  return <p>Тут будет список пользователей</p>
}

createRoot(document.getElementById("root")!).render(<UsersList />)

// Чему равно results.length?
