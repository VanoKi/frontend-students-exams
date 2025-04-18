import { useState } from "react"
import { createRoot } from "react-dom/client"

type User = {
  id: number
  name: string
  age: number
}

const UsersList = () => {
  const state = [
    { id: 1, name: "Bob", age: 34 },
    { id: 2, name: "Alex", age: 25 },
    { id: 3, name: "Ann", age: 30 },
    { id: 4, name: "John", age: 23 },
  ]

  const users = [
    { id: 1, userName: "Bob", age: 34 },
    { id: 2, userName: "Alex", age: 25 },
    { id: 3, userName: "Ann", age: 30 },
    { id: 4, userName: "John", age: 23 },
  ]

  const [usersList, setUsersList] = useState<User[]>(XXX)

  return (
    <>
      <h2>User list:</h2>
      <p>Тут будет список пользователей</p>
    </>
  )
}

createRoot(document.getElementById("root")!).render(<UsersList />)

// Что надо написать вместо XXX, чтобы код работал?
// ❗ Если мы отмапим массив, то должны увидеть данные пользователей
// ❗ Ответ дать минимально возможным объёмом кода
