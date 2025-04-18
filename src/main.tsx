import { useState } from "react"
import { createRoot } from "react-dom/client"

function UsersList() {
  const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
  const getUser = (user: string) => <li>{user}</li>
  const usersList = users.map(XXX)

  return (
    <div>
      <h4>User list:</h4>
      <ul>{usersList}</ul>
    </div>
  )
}

createRoot(document.getElementById("root")!).render(<UsersList />)

// Какую переменную необходимо указать вместо XXX, чтобы код заработал?
