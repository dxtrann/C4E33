// 1.
let btn_demo = document.getElementById("btn-demo")
let value = document.getElementById("demo-input")
let a = document.getElementById("demo-a")
btn_demo.addEventListener('click', () => { 
    value.value = a.href
})

// 2. 
let button_demo = document.getElementById("button-demo")
let color = document.getElementById("color")
button_demo.addEventListener('click', () => { 
    for (i=0;i<color.length;i++){
        if (color.options[i].value == "Red"){
            color.remove(i)
        }
        else if (color.options[i].value == "Green"){
            color.remove(i)
        }
        else if (color.options[i].value == "White"){
            color.remove(i)
        }
        else {
            color.remove(i)
        }
        
    }
})

// 3. 
let table_button = document.getElementById("table-button")
table_button.addEventListener('click', () => {
    let row = prompt("At which row do you want to make a change? ")
    let column = prompt("At which column do you want to make a change? ")
    let content = prompt("Enter new content? ")
    let x = document.getElementById('myTable').rows[parseInt(row-1,10)].cells;
    x[parseInt(column-1,10)].innerHTML=content;
})







