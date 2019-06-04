let answ = (ans, error) => {
let result = null
    if (ans.toUpperCase() === "Y"){
        if (error === 0){
            result = "correct"
        }
        else{
            result = "incorrect"
        }
    }
    else if (ans.toUpperCase() === "N"){
        if (error === 0){
            result = "correct"
        }
        else{
            result = "incorrect"
        }
    }
    return result
 
}

