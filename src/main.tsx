import { useState } from "react"
import { createRoot } from "react-dom/client"

function UsersList() {
  const [users, setUsers] = useState<string[]>(["Bob", "Alex", "Ann"])
  const getUser = (user: string) => <li>{user}</li>

  return (
    <div>
      <h4>User list:</h4>
      <ul>{users.map(getUser)}</ul>
    </div>
  )
}

createRoot(document.getElementById("root")!).render(<UsersList />)

// Что вернёт выражение: typeof getUser?
