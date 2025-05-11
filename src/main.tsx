import { useState } from "react"
import { createRoot } from "react-dom/client"

type User = {
  id: number
  name: string
  age: number
}

const UsersList = () => {
  const data: User[] = [
    { id: 1, name: "Bob", age: 25 },
    { id: 2, name: "Alex", age: 28 },
    { id: 3, name: "Ann", age: 23 },
    { id: 4, name: "John", age: 30 },
  ]
  const [users] = useState<User[]>(data)

  const olderThen25Users = users.filter((u: User) => u.age > 25)

  const isArray = Array.isArray(olderThen25Users)

  return (
    <main>
      <h4>User list:</h4>
      <ul>
        {olderThen25Users.map((u) => {
          return (
            <li key={u.id}>
              User {u.name}: {u.age} y.o.
            </li>
          )
        })}
      </ul>
    </main>
  )
}

createRoot(document.getElementById("root")!).render(<UsersList />)

// Что будет записано в переменную isArray в данном коде?
