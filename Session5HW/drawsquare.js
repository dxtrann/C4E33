let draw_square = (length, color) => {
    color(`"${color}"`)
    for (i=0; i<4; i++){
    fd(length)
    rt(length)
    }
}