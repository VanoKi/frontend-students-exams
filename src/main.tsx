const students = [{ name: "Bob" }, { name: "Alex" }, { name: "Donald" }]
const filteredStudents = students.filter((s) => s.name !== "Kate")
const lengthDiff = students.length - filteredStudents.length
export const newValue = (lengthDiff && 98.21) || (11.83 && 55.64)

// Какое значение получит переменная newValue?