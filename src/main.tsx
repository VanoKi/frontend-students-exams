import { useSelector } from "react-redux"
import { createRoot } from "react-dom/client"
import { configureStore } from "@reduxjs/toolkit"

type Student = {
  id: number
  name: string
  age: number
}

const initState = {
  students: [
    { id: 1, name: "Bob", age: 23 },
    { id: 2, name: "Alex", age: 22 },
  ] as Student[],
}

type AddStudentAction = {
  type: "ADD-STUDENT"
  name: string
  age: number
  id: number
}

type InitialState = typeof initState

const studentsReducer = (state: InitialState = initState, action: AddStudentAction): InitialState => {
  switch (action.type) {
    case "ADD-STUDENT":
      return {
        ...state,
        students: [
          ...state.students,
          {
            name: action.name,
            age: action.age,
            id: action.id,
          },
        ],
      }
    default:
      return state
  }
}

export const appStore = configureStore({ reducer: studentsReducer })
type RootState = ReturnType<typeof studentsReducer>

const StudentList = () => {
  const students = useSelector((state: RootState) => state.students)

  return (
    <ul>
      {students.map((s) => (
        <li key={s.id}>{`${s.name}. ${s.age} years.`}</li>
      ))}
    </ul>
  )
}

createRoot(document.getElementById("root")!).render(
  <XXX YYY={ZZZ}>
    <StudentList />
  </XXX>,
)
// Что нужно написать вместо XXX, YYY и ZZZ, чтобы отобразился список студентов?
// Ответ дайте через пробел, например: doc cat fish