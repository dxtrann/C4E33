// object

// let person = {
//     name: "Duc",
//     age: 22,
//     girlFriend: 3,
//     //property: value
// }

// CRUD
// 1. READ
// console.log(person.age)

//2. CREATE/UPDATE
// person.school = "FTU"
// console.log(person)
// person.girlFriend = 5
// console.log(person)

//3. DELETE
// delete person.age
// console.log (person)

// let tc = prompt("Enter teencode: ") 
// let teenCode = {
//     ny: "Nguoi yeu",
//     ngta: "Nguoi ta",
//     hc: "hoac",
//     lm: "lam",
//     stt: "status",
// }
// console.log(teenCode[tc])

// for (;;){
// let tc = prompt("Enter teencode: ") 
// let teenCode = {
//     ny: "Nguoi yeu",
//     ngta: "Nguoi ta",
//     hc: "hoac",
//     lm: "lam",
//     stt: "status",
// }
// if (teenCode.hasOwnProperty(tc)) {
//     console.log(teenCode[tc])
// }
// else{
//     let yn = prompt("Your word is not available, do you want to contribute? (Y/N)")
//     if (yn.toUpperCase() === "Y"){
//         let meaning = prompt("What is the meaning of your word? ")
//         teenCode[tc] = meaning
//         console.log(teenCode)
//     }
//     else{
//         console.log("Thank you!")
//     }
// }
// }

// let worker = [
//     {   name: "Duc",
//         salary: 50,
//         hours: 5,
//         days: 24,
//     },
//     {   name: "Hung",
//         salary: 70,
//         hours: 4,
//         days: 27,
//     },
//     {   name: "Kien",
//         salary: 80,
//         hours: 7,
//         days: 20,
//     }
// ]
// console.log(worker[0])
// let DucSalary = worker[0].salary * worker[0].hours * worker[0].days
// console.log("Duc's salary is", DucSalary)

// console.log(worker[1])
// let HungSalary = worker[1].salary * worker[1].hours * worker[1].days
// console.log("Hung's salary is", HungSalary)

// console.log(worker[2])
// let KienSalary = worker[2].salary * worker[2].hours * worker[2].days
// console.log("Kien's salary is", KienSalary)

// console.log("The total salary of three people is", DucSalary + HungSalary + KienSalary)

// let totalSalary = 0
// worker.forEach((person, index) => {
//     let monthSalary = person.salary * person.hours * person.days
//     console.log(`Luong thang cua ${person.name} la ${monthSalary}`)
//     totalSalary += monthSalary
//     console.log(`Tong luong cua 3 nguoi la ${totalSalary}`)
    
// })
