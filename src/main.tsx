import { createRoot } from "react-dom/client"
import { useState } from "react"

function UsersList() {
  const [users, setUsers] = useState<string[]>(["Bob", "Alex", "Ann"])

  return (
    <div>
      <h4>User list:</h4>
      <ul>
        {users.ХХХ((user) => (
          <li>{user}</li>
        ))}
      </ul>
    </div>
  )
}

createRoot(document.getElementById("root")!).render(<UsersList />)

// Что надо вставить вместо ХХХ, чтобы код заработал?
