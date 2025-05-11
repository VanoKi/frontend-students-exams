import { useState } from "react"
import { createRoot } from "react-dom/client"

type User = {
  id: number
  name: string
  age: number
}

const UsersList = () => {
  const data: User[] = [
    { id: 1, name: "Bob", age: 34 },
    { id: 2, name: "Alex", age: 29 },
    { id: 3, name: "Ann", age: 25 },
    { id: 4, name: "John", age: 36 },
  ]
  const [users] = useState<User[]>(data)

  return (
    <main>
      <h4>User list:</h4>
      <ul>
        {users.map((u) => {
          return (
            <li xxx={u.id}>
              Student {u.name}: {u.age} y.o.
            </li>
          )
        })}
      </ul>
    </main>
  )
}

createRoot(document.getElementById("root")!).render(<UsersList />)
// Что надо написать вместо xxx, чтобы код работал оптимально?
