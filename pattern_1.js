function pattern(val){
    for (let i = 0; i <= val; i++) {
        for (let j = 0; j < i; j++)
            process.stdout.write("* ")
        console.log();
    }
}
pattern(3)