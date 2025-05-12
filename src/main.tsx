const userName = (user = "") => {
  let userName: any = "Nikita"
  userName += user
  return user
}

export const student = userName() || "Ekaterina"

// Какое значение получит переменная student?
