const client = {
  name: "Liza",
  age: 88,
  friends: ["Andrey", "Masha", "Yana"],
}

export const updatedClient = { ...client }

updatedClient.friends.push("Artur")

console.log(client.friends[3])

// Какое значение будет выведено в консоль?
