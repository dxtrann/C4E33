//1. Answer the questions:
// What is nested list?
// When you create arrays inside arrays, it is known as nested arrays. 
// In a nested array, the elements of one array are themselves arrays.

// Can a list store both integers and strings in it?
// If integer and String, one belongs to the inside array and one belongs to the bigger one then yes.
// If both are in the same array then no

// 2. 
// inventory = {
//     'gold' : 500,
//     'pouch' : ['flint', 'twine', 'gemstone'],
//     'backpack' : ['xylophone', 'dagger', 'bedroll', 'bread loaf']
// }

// inventory.pocket = ['seashell', 'strange berry','lint']
// console.log(inventory)

// delete inventory.backpack.splice(1,1)
// console.log(inventory)

// inventory.gold = 550
// console.log(inventory)

3.

// prices = {
//     "banana": 4,
//     "apple": 2,
//     "orange": 1.5,
//     "pear": 3
// }

// stock = {
//     "banana": 6,
//     "apple": 0,
//     "orange": 32,
//     "pear": 15
// }

// console.log(`Banana Price: ${prices.banana}, Stock: ${stock.banana}`)
// console.log(`Apple Price: ${prices.apple}, Stock: ${stock.apple}`)
// console.log(`Orange Price: ${prices.orange}, Stock: ${stock.orange}`)
// console.log(`Pear Price: ${prices.pear}, Stock: ${stock.pear}`)

// total = prices.banana*stock.banana + prices.apple*stock.apple + prices.orange*stock.orange + prices.pear*stock.pear
// console.log(`The total is ${total}`)


// 4. 
// let ans = prompt("Welcome to our shop, what do you want? (CRUD)")
// shop = ["tshirt", "sweater"]
// if (ans.toUpperCase() === "R"){
//     console.log(`Our items are ${shop}`)
// }
// else if (ans.toUpperCase() === "C"){
//     let item = prompt("Enter new item: ")
//     shop.push(item)
//     console.log(`Our items are ${shop}`)
// }
// else if (ans.toUpperCase() === "U"){
//     let position = prompt("Update position? ")
//     let newItem = prompt("New Item? ")
//     shop[position] = newItem
//     console.log(`Our items are ${shop}`)
// }
// else{
//     let del = prompt("Delete position? ")
//     shop.splice(0, del)
//     console.log(`Our items are ${shop}`)
// }

// 5.

//     sheeps = ["5", "7", "300", "90", "24", "50", "75"]
//     console.log(`Hello. My name is Hiep and these are my sheeps sizes: ${sheeps}`)

//     console.log(`Now my biggest sheep has the size of ${Math.max.apply(null, sheeps)}. Let's shear it!`)

//     sheeps[2] = 8
//     console.log(`After shearing, here is my flock: ${sheeps}`)

//     for (i=0; i<=6; i++){
//         sheeps[i] = Number(sheeps[i]) + 50  
//     }
//     console.log(`One month has passed. Now here is my flock: ${sheeps}`)

//     console.log(`Now my biggest sheep has the size of ${Math.max.apply(null, sheeps)}. Let's shear it!`)

//     sheeps[3] = 8
//     console.log(`After shearing, here is my flock: ${sheeps}`)

//     for (i=0; i<=6; i++){
//         sheeps[i] = Number(sheeps[i]) + 50  
//     }
//     console.log(`One month has passed. Now here is my flock: ${sheeps}`)

//     sheeps[4] = 8
//     console.log(`After shearing, here is my flock: ${sheeps}`)

//     for (i=0; i<=6; i++){
//         sheeps[i] = Number(sheeps[i]) + 50  
//     }
//     console.log(`One month has passed. Now here is my flock: ${sheeps}`)

//     sheeps[5] = 8
//     console.log(`After shearing, here is my flock: ${sheeps}`)

//     for (i=0; i<=6; i++){
//         sheeps[i] = Number(sheeps[i]) + 50  
//     }
//     console.log(`One month has passed. Now here is my flock: ${sheeps}`)

//     total = 0
//     for (i=0; i<=6; i++){
//         total += sheeps[i]
//     }
//     console.log(`My flock has the total size of ${total}. I would get ${Number(total * 2)}`)








