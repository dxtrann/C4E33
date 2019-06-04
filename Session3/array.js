// // // // array
// let foods = ["Com", "Pho", "Ghe", "Rau", "Chao"]

// // // // index
// // // // starts with 0
// // // console.log(foods[0])

// // // // length of array
// // // console.log(foods.length)

// // // // 1. CREATE
// // // // how to add an item to a random index?
// // // let newFood = "Ca"
// // // foods.push(newFood)
// // // console.log(foods)

// // // BT
// // let n = prompt("Hi there, you like Netflix, Hulu, Spotify so far. Do you want to add anything more? ")
// // let favorites = ["Netflix", "Hulu", "Spotify"]
// // favorites.push(n)
// // console.log(favorites)

// // 2. READ

// // 2.1. READ ONE
// // console.log(foods[3])

// // 2.2. READ MANY 
// console.log(foods)
// // way 1
// // for (let i =0; i<foods.length; i++){
// //     console.log(`${i+1}. ${foods[i]}`) //backticks
// // }
// // way 2
// // foods.forEach((food, index) => {
// //     console.log(`${index+1}. ${food}`)
// // })

// // 3. UPDATE
// foods[1] = "Bun Bo Hue"
// console.log(foods)

// console.log(foods)

// 4. DELETE
// 4.1. DELETE BY INDEX
// foods.splice(1, 1)
// console.log(foods)

// 4.2 DELETE BY VALUE
// let valueDelete = "Rau"
// let indexDelete = foods.indexOf(valueDelete)
// foods.splice(indexDelete, 1)
// console.log(foods)

