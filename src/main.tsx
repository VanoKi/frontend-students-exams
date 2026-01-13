import { Provider } from "react-redux"
import { createRoot } from "react-dom/client"
import { combineReducers, configureStore } from "@reduxjs/toolkit"

let initialState = {
  items: [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Ignat" },
  ],
}
const usersReducer = (state = initialState, action: any) => {
  return state
}

let authInitialState = { login: "Margo", settings: { theme: "dark" } }
const authReducer = (state = authInitialState, action: any) => {
  return state
}

const rootReducer = combineReducers({
  users: usersReducer,
  auth: authReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

type RootStateType = ReturnType<typeof rootReducer>

export const selector = (state: RootStateType) => state.users.items

const Users = () => {
  const users = XXX

  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  )
}

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Users />
  </Provider>,
)

// Что нужно написать вместо XXX, чтобы отрендерить список юзеров?
// ❗ Ответ дать минимально возможным объёмом кода
