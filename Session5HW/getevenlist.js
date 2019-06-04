let get_even_list = (l) => {
    let array = []
    for (i = 0; i < l.length; i++){
        if (l[i] % 2 === 0){
            array.push(l[i])
        }
    }
    return array
}
