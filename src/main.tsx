type User = {
  id: number
  userName: string
  email: string
  password: string
}

type ChangeUserPasswordAction = {
  type: "CHANGE-USER-PASSWORD"
  payload: {
    XXX
    YYY
  }
}

export const userReducer = (state: User[], action: ChangeUserPasswordAction): User[] => {
  switch (action.type) {
    case "CHANGE-USER-PASSWORD":
      return state.map((u) => (u.id === action.payload.id ? { ...u, password: action.payload.newPassword } : u))
    default:
      return state
  }
}

// Какой код должен быть написан вместо XXX и YYY в типе
// ChangeUserPasswordAction, что бы редьюсер работал?
// В ответе напишите через пробел: XXX YYY
