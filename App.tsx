let number = 10

if (number > 0) {
  let number = 58
  number++
}

const getNumber = (number: any) => {
  number *= 10
  return number
}

export const bigValue = getNumber("number") || number

// Какое значение получит переменная bigValue?

console.log(bigValue)