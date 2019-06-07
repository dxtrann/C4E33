// let h1 = document.getElementById("dom-h1")
// console.dir(h1)
// h1.innerText = "Menu"

let new_food = `<li>Pho</li>`
let menu = document.getElementById("menu")
console.dir(menu)

menu.innerHTML +=  new_food

let h2 = document.getElementById("dom-h2")
h2.remove()

let btnDemo = document.getElementById("btn_demo")
btnDemo.addEventListener('click', () => {
    console.log("You just clicked!")
})

let food_input = document.getElementById("dom-input")
food_input.addEventListener('keyup', () => {
    console.log(food_input.value)
})
console.dir(food_input)
