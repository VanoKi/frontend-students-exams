type Samurai = {
  id: string
  name: string
  status: "online" | "offline"
}

type CourseName = "HTML" | "JS" | "React" | "Redux" | "HomeWorks"

type Course = {
  name: CourseName
  mentor: string
  isDone: boolean
}

type Technologies = {
  [userID: string]: Course[]
}

const samuraiID_1 = "64jf-87kg"
const samuraiID_2 = "90lg-34ks"
const samuraiID_3 = "12jm-05fd"

export const samurai: Samurai[] = [
  { id: samuraiID_1, name: "Bob", status: "online" },
  { id: samuraiID_2, name: "Alex", status: "offline" },
  { id: samuraiID_3, name: "Ann", status: "offline" },
]

export const technologies: Technologies = {
  [samuraiID_1]: [
    { name: "HTML", mentor: "Svetlana", isDone: true },
    { name: "JS", mentor: "Viktor", isDone: true },
    { name: "React", mentor: "Dmitrij", isDone: false },
    { name: "Redux", mentor: "Valera", isDone: false },
    { name: "HomeWorks", mentor: "Ignat", isDone: true },
  ],
  [samuraiID_2]: [
    { name: "HTML", mentor: "Svetlana", isDone: true },
    { name: "JS", mentor: "Viktor", isDone: true },
    { name: "React", mentor: "Dmitrij", isDone: true },
    { name: "Redux", mentor: "Valera", isDone: false },
    { name: "HomeWorks", mentor: "Ignat", isDone: true },
  ],
  [samuraiID_3]: [
    { name: "HTML", mentor: "Svetlana", isDone: true },
    { name: "JS", mentor: "Viktor", isDone: true },
    { name: "React", mentor: "Dmitrij", isDone: false },
    { name: "Redux", mentor: "Valera", isDone: false },
    { name: "HomeWorks", mentor: "Ignat", isDone: false },
  ],
}

export const updateCourseStatus = (samuraiID: string, name: CourseName, isDone: boolean) => {
  return { ...technologies, [samuraiID]: technologies[XXX].map((c) => (c.name === name ? { ...c, isDone } : c)) }
}

// Дан список самураев из инкубатора и структура, хранящая данные о курсах,
// которые самурай уже прошёл, а так же о тех курсах, которые ему ещё предстоит пройти.
// Так же дана функция updateCourseStatus,
// которая позволяет отметить курс как пройденный самураем или снять такую отметку
// Что надо написать вместо XXX, чтобы функция работала корректно?
