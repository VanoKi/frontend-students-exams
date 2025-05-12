type User = {
  id: number
  name: string
  status: "online" | "offline"
}

type Address = {
  country: string
  city: string
  email: string
}

type Adresses = {
  [userID: string]: Address
}

const users: User[] = [
  { id: 1, name: "Bob", status: "online" },
  { id: 2, name: "Alex", status: "offline" },
  { id: 3, name: "Ann", status: "offline" },
]

export const addresses: Adresses = {
  1: { country: "Russia", city: "Moscow", email: "hey@email.com" },
  2: { country: "Ukraine", city: "Kiev", email: "yo@send.ua" },
  3: { country: "Belarus", city: "Minsk", email: "wow@gogo.ru" },
}

export const changeUserStatus = (userID: number, status: string) => {
  return users.xxx((u) => (u.id === userID ? { ...u, status } : u))
}

// Дан список пользователей и структура, хранящая адреса пользователей.
// Так же дана функция changeUserStatus, которая меняет статус пользователя.
// Что надо написать вместо ххх, чтобы функция работала корректно?
