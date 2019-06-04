let foods = ["Com", "Pho", "Ghe", "Rau", "Chao"]
foods.splice(1, 1, "Bun")
console.log(foods)

// let yn = prompt("Do you want to delete anything?")
// console.log(foods.indexOf("Tom"))

// if (yn === "Y" || yn === "y") {
//     let change = prompt("Do you want to delete by position or by value?")

//     if (change === "position"){
//         let position = prompt("Which position do you want to delete?")
//         let number = prompt("How many values do you want to delete?")
//         if (position>0 && position<foods.length){
//             foods.splice(position, number)
//             console.log(foods)
//         }
//         else {
//             console.log("Error!")
//         }
//     }

//     else if (change === "value"){
//         let value = prompt("Which value do you want to delete?")
//         let number = prompt("How many values do you want to delete?")
//         if (foods.indexOf(value)>0 && foods.indexOf(value)<foods.length){
//             foods.splice(value, number)
//             console.log(foods)
//         }
//         else {
//             console.log("Error!")
//         }
//     }
//     else{
//         console.log("Error!")
//     }
// }

// else if (yn === "N" || yn === "n") {
//     console.log("Goodbye!")
// }

// else{ 
//     console.log("Error!")
// }