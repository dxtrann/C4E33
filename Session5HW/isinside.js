let is_inside = ([a,b],[c,d,e,f]) => {
    let point = [a,b]
    let rec = [c,d,e,f]
    if (a>=c && a<=(Number(c) + Number(e)) && b>=d && b<= (Number(d) + Number(f))){
        console.log("True")
    }
    else{
        console.log("False")
    }
}