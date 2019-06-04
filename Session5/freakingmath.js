window.onload = () => {

    let first_random = Math.floor(Math.random() * 9)
    let second_random = Math.floor(Math.random() * 9)
    
    let op = ["+", "-", "x", ":"]
    let randomIndex = Math.floor(Math.random() * op.length)
    
    let array = [-1, 0, 0, 0, 0, 0, 1]
    let randomErrorIndex = Math.floor(Math.random() * array.length)
    let error = array[randomErrorIndex]
    console.log(error)
    
    let total = calc(first_random, second_random, op[randomIndex], error)
    
    
    console.log(`${first_random} ${op[randomIndex]} ${second_random} = ${total}`)
    
    let answer = prompt("Yes or no? (Y/N)")
    let i = answ(answer, error) 
    console.log(i)

    
    
}


