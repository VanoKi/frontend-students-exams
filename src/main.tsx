let result = 0

for (let i = 0; i < 5; i++) {
  if (i % 2) {
    result += i
  }
}

export const studentName = result - 4 ? "Nikita" : "Valera"
console.log(studentName)
// Какое значение получит переменная studentName?
