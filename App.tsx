const myFunction = (a: number, b = 3) => a + b

const result = myFunction(346, undefined) % 2

export const winner = result ? "Vladimir" : "Ekaterina"

// Какое значение получит переменная winner?