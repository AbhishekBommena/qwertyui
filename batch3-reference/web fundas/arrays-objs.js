const customers = [
    {
        id: 1,
        firstName: "Shivan",
        lastName: "LP",
        email: "lp.shivan@gmail.com",
        phone: "9967392822"
    },
    {
        id: 1,
        firstName: "Shivan 222",
        lastName: "LP 222",
        email: "lp.shivan222@gmail.com",
        phone: "9967392822"
    },
    {
        id: 1,
        firstName: "Shivan 333",
        lastName: "LP 333",
        email: "lp.shivan333@gmail.com",
        phone: "9967392822"
    },

]

for(let i=0; i<customers.length; i++) {
    console.log(customers[i].firstName + " " + customers[i].lastName)
}

function printCustomer(c) {
    console.log(c.firstName)
}

console.log("-----------------------")
console.log("Functional approach")
console.log("-----------------------")

customers.forEach(c => console.log(c.firstName))
