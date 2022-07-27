
function Customer(id, name, email) {
    this.id = id
    this.name = name
    this.email = email
}

const c1 = new Customer(1, "test", "test@gmail.com")
const c2 = new Customer(2, "test222", "test222@gmail.com")

const customers = []
customers.push(c1)
customers.push(c2)

console.log(c1.id, c1.name, c1.email)
console.log(c2.id, c2.name, c2.email)

console.log("Total no of customers : ", customers.length)
