// let foods = ["Com", "Pho", "Ghe", "Rau", "Chao"]
// console.log(foods)

// let yn = prompt("Do you want to update?")


// if (yn === "no"||yn === "n"|| yn === "N"){
//     console.log("Goodbye!")
// }
// else if (yn === "yes"||yn ==="y"|| yn ==="Y"){
//     let position = prompt("Which one do you want to update? ")
//     if (position > 0 && position <= foods.length){
//         let newF = prompt("What is you new food? ")
//         foods[position-1] = `${newF}`
//         console.log(foods)
//     }
//     else{
//         console.log("Unavailable!")
//     }
// }
// else{
//     console.log("Error!")
// }

// BAI CHUA
// let foods = ["Com", "Pho", "Ghe", "Rau", "Chao"]
// foods.forEach((food, index) => {
//     console.log(`${index+1}. ${food}`)
// })

// let answer = prompt("Do you want to update? (Y/N)")

// if (answer.toLowerCase() === "y"){
//     let position = prompt("Position?")
//     let newFood = prompt("New food name?")
//     foods[position-1] = newFood
//     console.log(`${index+1}. ${food}`)
// }

// else if (answer.toLowerCase() === "n"){
//     console.log("Goodbye")
// }

// else{
//     console.log("Get out")
// }