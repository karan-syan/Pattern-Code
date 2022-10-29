function parllelPattern() {
    subpattern(0, true, 6)
    subpattern(4, false, 6)
}
function subpattern(val, condition, size) {
    for (let i = val; condition ? i < size : i > 0; condition? i++ : i--) {
        diamond(size, i, " *");
        for (let m = 1; m < 4; m++)
            diamond(size * 2 - i, i, "* ");
        console.log();
    }
}
function diamond(space, i, s) {
    for (let j = space; j > i; j--)
        process.stdout.write(" ");
    for (let k = 0; k < i; k++)
        process.stdout.write(s);
}
parllelPattern();