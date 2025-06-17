type Student = {
  id: number
  name: string
}

type Friends = {
  [key: string]: string[]
}

export const students: Student[] = [
  { id: 1, name: "Bob" },
  { id: 2, name: "Alex" },
  { id: 3, name: "Ann" },
  { id: 4, name: "Charley" },
]

export const friends: Friends = {
  1: ["Oliver", "Jack", "Oscar"],
  2: ["Jack", "Lewis", "Thomas"],
  3: ["William", "Michael", "Lewis"],
  4: ["Oscar", "James", "William"],
}

const getMutualFriends = (st_1: Student, st_2: Student) => {
  const result: string[] = []
  friends[st_1.id].forEach((f) => (friends[xxx].includes(f) ? result.push(f) : null))
  return result
}

// Дан массив студентов и структура,
// которая содержит список друзей каждого из студентов.
// Так же дана функция getMutualFriends, проверяющая наличие общих друзей
// у двух выбранных студентов.
// Функция принимает параметром два объекта типа Student
// и возвращает массив с именами общих друзей,
// если они есть и пустой массив, если таковых нету.
// Что надо написать вместо ххх, чтобы функция работала?
