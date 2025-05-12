const guest = {
  name: "Eva",
  age: 49,
  scores: [82.69, 88.85, 25.47],
}

export const { name, age, scores } = guest

console.log(guest.scores === scores && age)

// Какое значение мы увидим в консоли?
