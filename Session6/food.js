//Exercise 1
let food_input = document.getElementById("food-input")
food_input.addEventListener('keyup', () => {
})

let add_button = document.getElementById("add_food")
add_button.addEventListener('click', () => { 
    let add_food = `<li> ${food_input.value} </li>`
    let menu = document.getElementById("menu")
    menu.innerHTML +=  add_food
})

//Exercise 2
// let delete_button = document.getElementById("delete_food")
// delete_button.addEventListener('click', () => { 
//     let del = document.getElementById("menu")
//     del.removeChild(del.lastChild)
// })

//Exercise 3

console.dir(document.getElementById("menu"))
delete_button.addEventListener('click', () => { 
   
    let del = document.getElementById("menu")
    del.removeChild(del.childNodes[indexDelete, 1])
   
})

let delete_food= document.getElementById("delete_food")
let menu = document.getElementById("menu")
button_demo.addEventListener('click', () => { 
    for (i=0;i<menu.length;i++){
        if (menu[i].value == "Com"){
            menu.remove(i)
        }
        else if (menu[i].value == "Bun"){
            menu.remove(i)
        }
        else if (color[i].value == "Pho"){
            menu.remove(i)
        }
        else {
            menu.remove(i)
        }
        
    }
})