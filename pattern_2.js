function pattern(val) {
    for (let i = 0; i <= val; i++) {
        for (let j = i; j < val; j++) 
            process.stdout.write(" ")
        for (let k = 0; k < i; k++) 
            process.stdout.write(" *")
        console.log();
    }
}
pattern(3)