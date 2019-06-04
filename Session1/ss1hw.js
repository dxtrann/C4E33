// 1. How to check variable's type?
// ANSWER: Use typeof 
// For example: 
// console.log(typeof 300) == number
// console.log(typeof "dung") == string
// console.log(typeof DeclaredButUndefinedVariable) == undefined

// 2. In what cases will you get SyntaxError from the computer telling you 
// that some of your variables have invalid names? Give 3 examples of invalid names.

// Variable names contains spaces.
// eg: Current year

// Variable names do not begin with a letter, an underscore (_) or a dollar sign ($).
// eg: 365days

// Variable names contains characters other than letters, numbers, underscores, or dollar signs.
// eg: CurrentYear@

// 3. Write a program that calculates the area of a circle. The circle's radius is entered by users

// output 314
let radius = prompt("Enter the radius: ")
console.log(Number (radius) * Number (radius) * 3.14)

// output Area = 314
let radius = prompt("Enter the radius: ")
console.log("Area =", Number (radius) * Number (radius) * 3.14)


// 4. Write a program that converts Celsius (oC) into Farenheit (oF)

// output 50
let C = prompt("Enter the temperature in Celsius: ")
console.log(Number (C) * (1.8) + Number (32))

// output 10 (C) = 50 (F)
let C = prompt("Enter the temperature in Celsius: ")
F = Number (C) * (1.8) + (32)
console.log (Number (C) +"(C)", "=", Number(F) + "(F)",)

// 5. Draw a square: 

fd(60)
rt(90)

fd(60)
rt(90)

fd(60)
rt(90)

fd(60)
rt(90)

// 6. Draw an equilateral triangle:

rt(45)
fd(70)

rt(90)
fd(70)

rt(135)
fd(98.99)

// 7. Draw a circle: add color Color("")

for (let i =0 ; i < 360;i++){
    fd(1)
    rt(1)
}

// 8. Draw a multi-circle:
for (let i = 0 ; i < 6;i++)
{for (let i =0 ; i < 360;i++){
    fd(1)
    lt(1)
}
 rt(60)
}

// 9. Multi-circles 2.0

for (let i = 0 ; i < 40;i++)
{for (let i =0 ; i < 360;i++){
    fd(1)
    lt(1)
}
 rt(10)
}





















































