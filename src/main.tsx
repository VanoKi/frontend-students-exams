import { useState } from "react"
import { createRoot } from "react-dom/client"

type User = {
  id: number
  name: string
  age: number
}

type UserProps = User & {
  deleteUser: (id: number) => void
}

const User = (props: UserProps) => (
  <li>
    <button onClick={() => props.deleteUser(xxx)}>x</button>
    User {props.name}: {props.age} y.o.
  </li>
)

const UsersList = () => {
  const data: User[] = [
    { id: 1, name: "Bob", age: 25 },
    { id: 2, name: "Alex", age: 28 },
    { id: 3, name: "Ann", age: 23 },
    { id: 4, name: "John", age: 30 },
  ]

  const [users, setUsers] = useState<User[]>(data)

  const deleteUser = (userID: number) => {
    const filteredUsers = users.filter((u) => u.id !== userID)
    setUsers(filteredUsers)
  }

  return (
    <main>
      <h4>User list:</h4>
      <ul>
        {users.map((u) => (
          <User key={u.id} {...u} deleteUser={deleteUser} />
        ))}
      </ul>
    </main>
  )
}

createRoot(document.getElementById("root")!).render(<UsersList />)
// Что надо написать вместо xxx, чтобы код работал?
