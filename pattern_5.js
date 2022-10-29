function parllelPattern() {
    for (let i = 0; i < size; i++) {
        triangle(size, i, " *")
        for (let m = 1; m < times; m++) 
            triangle(size * 2 - i, i, "* ")
        console.log()
    }
}
function triangle(space, i, s) {
    for (let j = space; j > i; j--)
        process.stdout.write(" ")
    for (let k = 0; k < i; k++)
        process.stdout.write(s)
}
let size = 5, times = 4
parllelPattern();