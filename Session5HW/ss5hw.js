// A. Answer questions 

// - Why should we use functions at all?
//// Because You can reuse code: Define the code once, and use it many times.
//// You can use the same code many times with different arguments, to produce different results.

// - How to define/declare a function?
//// A JavaScript function is defined with the function keyword, 
//// followed by a name, followed by parentheses ().
//// The code to be executed, by the function, is placed inside curly brackets: {}

// - How to call/use a function?
//// Use () operator to call a function

// - What is return, why and how do we use it?
//// When JavaScript reaches a return statement, the function will stop executing.
//// If the function was invoked from a statement, JavaScript will "return" to execute the code 
//// after the invoking statement.
//// Functions often compute a return value. The return value is "returned" back to the "caller"

// - Do we have to use return in every function?
// No, we do not

// - What are function arguments/parameters, why and how we use it?
//// Function parameters are listed inside the parentheses () in the function definition.
//// Function arguments are the values received by the function when it is invoked.

// - How to use function from a different file other than our currently working file?
//// Call the function normally. Use window.onload = () => {} to make sure the function file has ran before your
//// current working file started running.


// B. Turtle exercise

// 1. Write a function that prints out “Hello world” 3 times (note: no arguments, no return)
// window.onload = () => {
//     let hello = helloworld()
//     console.log(hello)
// }

// 2. Write a function that takes 2 numbers as arguments and print out sum of them (note: has arguments, no return)
// window.onload = () => {
//     let x = prompt("Enter x: ")
//     let y = prompt("Enter y: ")
//     let tinh_tong = sum (x,y)
// }

// 3. Write a Python function that draws a square, named draw_square, takes 2 arguments: 
// length and color, where length is the length of its side and color is the color of its bound 
// (line color)
// window.onload = () => {
//     let do_dai = prompt("Enter length: ")
//     let mau = prompt("Enter mau: ")
//     let ve_hinh = draw_square(length, color)
// }

// 4. I don't understand the exercise?

// 5. Write a Python function that draws a star, named draw_star, take 1 parameters: length
// window.onload = () => {
//     let do_dai = prompt("Enter length:")
//     let ve_sao = draw_star(length)
// }

// C. Serious exercise

// 6. Write a function that removes the dollar sign (“$”) in a string, 
// named remove_dollar_sign, takes 1 arguments: s, where s is the input string, 
// returns the new string with no dollar sign in it
//  window.onload = () => {
//      let s = prompt("Enter your net worth (For example: $1000): ")
//      let bo_dau_$ = remove_dollar_sign(s)
//  }

// 7. 
// window.onload = () => {
// let s = "$80% percent of $life is to show $up"
// let string_with_no_dollars = remove_dollar_sign(s)
// if (string_with_no_dollars == "80% percent of life is to show up"){
//     console.log("Your function is correct")}
// else{
//     console.log("Oops, there's a bug")}
// }

// 8. 
// window.onload = () => {
//     let l = [1, 4, 5, -1, 10]
//     let even = get_even_list(l)
//     console.log(even)
// }

// 9. 
// window.onload = () => {
    
//     even_list = get_even_list([1, 2, 5, 9, -10, 6])

//         if (even_list == [2, -10, 6]){
//         print("Your function is correct")
//         }
//         else{
//             console.log("Ooops, bugs detected")
//         }
// }

// 10. 
// window.onload = () => {
//     let a = prompt("Enter x coordinate of the point: ")
//     let b = prompt("Enter y coordinate of the point: ")
//     let c = prompt("Enter x coordinate of the point belong to the rectangle: ")
//     let d = prompt("Enter y coordinate of the point belong to the rectangle: ")
//     let e = prompt("Enter the width of the rectangle: ")
//     let f = prompt("Enter the length of the rectangle: ")

// let check = is_inside([a,b],[c,d,e,f])
// }


