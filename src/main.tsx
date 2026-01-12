const numbers = [96, 73, 17, 67]
const mapFunction = (el: number, index: number) => el * index
const mappedArray = numbers.map(mapFunction)

const myNumber = mappedArray[0] && mappedArray[mappedArray.length - 1]
export const bigCount = 25 + myNumber

// Какое значение получит переменная bigCount?