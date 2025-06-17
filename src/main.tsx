const community = {
  name: "Michail",
  scores: 6,
}

const basis = {
  ...community,
  scores: community.scores++,
}

export const scores = basis.scores

// Какое значение получит переменная scores?
