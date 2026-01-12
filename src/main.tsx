import axios from "axios"
import { createRoot } from "react-dom/client"
import { useEffect, useState } from "react"

// Types
type Todolist = {
  id: string
  tile: string
  order: number
  createdAt: string
  updatedAt: string
  complete: boolean
}

// Api
const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" })

const todosAPI = {
  getTodos() {
    return instance.get<Todolist[]>("todos")
  },
}

// App
const App = () => {
  const [todos, setTodos] = useState<Todolist[]>([])

  useEffect(() => {
    todosAPI.getTodos().then((res) => setTodos(res.data))
  }, [])

  return (
    <>
      <h2>✅ Список тудулистов</h2>
      {todos.map((t) => {
        return (
          <div style={t.complete ? { color: "grey" } : {}} key={t.id}>
            <input type="checkbox" checked={t.complete} />
            <b>Описание</b>: {t.tile}
          </div>
        )
      })}
    </>
  )
}

createRoot(document.getElementById("root")!).render(<App />)

// 📜 Описание:
// При написании типизации по невнимательности было допущено несколько ошибок.
// Напишите через пробел правильные свойства Todolist, в которых была допущена ошибка.
// 💡 Debugger / network / документация в помощь

// 🖥 Пример ответа: id age