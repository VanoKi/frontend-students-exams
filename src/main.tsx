import { Provider, useDispatch, useSelector } from "react-redux"
import { createRoot } from "react-dom/client"
import { configureStore } from "@reduxjs/toolkit"

const listItemStyles = {
  width: "100px",
  borderBottom: "1px solid gray",
  cursor: "pointer",
}

const students = {
  students: [
    { id: 1, name: "Bob" },
    { id: 2, name: "Alex" },
    { id: 3, name: "Donald" },
    { id: 4, name: "Ann" },
  ],
}

type RemoveStudentAT = {
  type: "REMOVE-STUDENT"
  id: number
}

export const removeStudentAC = (id: number): RemoveStudentAT => ({
  type: "REMOVE-STUDENT",
  id,
})

const studentsReducer = (state = students, action: RemoveStudentAT) => {
  switch (action.type) {
    case "REMOVE-STUDENT":
      return {
        ...state,
        students: state.students.filter((s) => s.id !== action.id),
      }
    default:
      return state
  }
}

const store = configureStore({ reducer: studentsReducer })
type RootStateType = ReturnType<typeof studentsReducer>

const StudentList = () => {
  const students = useSelector((state: RootStateType) => state.students)

  const dispatch = useDispatch()

  return (
    <ol>
      {students.map((s) => {
        const removeStudent = () => {
          // XXX(YYY(ZZZ))
        }

        return (
          <li key={s.id} style={listItemStyles} onClick={removeStudent}>
            {s.name}
          </li>
        )
      })}
    </ol>
  )
}

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <StudentList />
  </Provider>,
)

// Что нужно написать вместо XXX, YYY и ZZZ, чтобы при клике по имени студент удалялся из списка?
// Ответ дайте через пробел, например: doc cat fish