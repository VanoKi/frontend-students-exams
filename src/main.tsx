const customer = {
  name: "Dima",
  age: 55,
  friends: ["Andrey", "Victor", "Liza"],
}

const updatedCustomer = {
  ...customer,
  friends: customer.friends,
}

console.log(customer.friends === updatedCustomer.friends)

// Какое значение будет выведено в консоль?
