import { useState } from "react"
import { createRoot } from "react-dom/client"

const UsersList = () => {
  const [users, setUsers] = useState<string[]>(["Bob", "Alex", "Ann"])

  const getUser = (user: string, i: number) => <li key={i}>{user}</li>

  const usersList = XXX === 0 ? <p>List is empty</p> : <ul>{users.map(getUser)}</ul>

  return (
    <main>
      <button onClick={() => setUsers([])}>Clear list</button>
      <h4>User list:</h4>
      {usersList}
    </main>
  )
}

createRoot(document.getElementById("root")!).render(<UsersList />)

// Что надо вставить вместо XXX, чтобы код корректно работал со списком пользователей?
