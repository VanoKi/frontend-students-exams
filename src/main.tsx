const student = {
  name: "Maxim",
  age: 100,
}

export const copyStudent = { ...student }

student.name = "Max"

// Чему равно copyStudent.name после выполнения этого кода?
