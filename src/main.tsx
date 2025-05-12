const student = {
  name: "Yana",
}

const newStudent = student

const myFriend = {
  ...newStudent,
}

const newUser = {
  name: "Eva",
}

export const myFriendName = student.name !== myFriend.name ? newUser.name : student.name

// Какое значение получит переменная "myFriendName"?
