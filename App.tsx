import { combineReducers, configureStore } from "@reduxjs/toolkit"

let initialState = { items: [{ name: "Dimych" }, { name: "Ignat" }] }
const usersReducer = (state = initialState, action: any) => {
  return state
}

const store = configureStore({
  reducer: combineReducers({
    users: usersReducer,
  }),
})

store.subscribe(() => {
  const state = store
  console.log(state)
})

store.dispatch({ type: "ANY" })

// Что нужно написать вместо XXX, чтобы получить актуальный стейт?