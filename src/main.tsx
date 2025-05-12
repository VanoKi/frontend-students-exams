const customer = {
  name: "Valera",
  age: 78,
  friends: ["Artem", "Ivan", "Margo"],
}

const newFriend = "Michail"

const friends = [XXX, newFriend]

export const updatedCustomer = { ...customer, friends: friends }

// Выполнено преобразование объекта: добавлен новый друг в список.
// Что надо указать вместо XXX, что бы выполнить это действие иммутабельно?
