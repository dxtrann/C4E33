let calc = (first_random, second_random, op, error) => {
    let total = 0
    if (op === "+"){
        total = Number(first_random) + Number(second_random) + error
    }
    else if(op === "-"){
        total = Number(first_random) - Number(second_random) + error
    }
    else if(op=== "x"){
        total = Number(first_random) * Number(second_random) + error
    }
    else {
        total = (Number(first_random) / Number(second_random) + error)
    }
    return total
}