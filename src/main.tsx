const customer = {
  name: "Maria",
  age: 21,
  scores: [6.57, 51.25, 45.51],
}

export const [first, second, third = 31.41] = customer.scores

switch (third) {
  case 31.41:
    console.log("Italy")
    break
  case 51.25:
    console.log("Germany")
    break
  default:
    console.log("Mongolia")
}

// Какую строку мы увидим в консоли?
