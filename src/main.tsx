import { useState } from "react"
import { createRoot } from "react-dom/client"

function UsersList() {
  const results = useState<Array>(["Bob", "Alex", "Ann"])
  const users = results[0]
  const setUsers = results[1]

  return <p>Тут будет список пользователей</p>
}

createRoot(document.getElementById("root")!).render(<UsersList />)

// Какой тип правильнее указать вместо "any" при типизации стэйта?
