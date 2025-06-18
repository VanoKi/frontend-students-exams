type State = {
  count: number
  username: string
}

type Action =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "SET_USERNAME"; payload: string }
  | { type: "RESET" }

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 }
    case "DECREMENT":
      return { ...state, count: state.count - 1 }
    case "SET_USERNAME":
      return { ...state, username: action.payload }
    case "RESET":
      return { count: 0, username: "" }
    default:
      return state
  }
}

console.log(reducer({ count: 1, username: "Bob" }, { type: "INCREMENT" }))
console.log(reducer({ count: 3, username: "Ann" }, { type: "DECREMENT" }))
console.log(reducer({ count: 7, username: "Bob" }, { type: "SET_USERNAME", payload: "Alex" }))
console.log(reducer({ count: 5, username: "Kate" }, { type: "RESET" }))
console.log(reducer({ count: 0, username: "Test" }, { type: "SET_USERNAME" }))
