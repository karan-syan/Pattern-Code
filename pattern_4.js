function pattern() {
  for (let m = 0; m < time; m++) {
    for (let i = 0; i < size; i++)
      diamond(i);
    for (let i = size - 2; i > 0; i--)
      diamond(i);
  }
}
function diamond(i) {
  for (let j = size; j > i; j--)
    process.stdout.write(" ");
  for (let k = 0; k < i; k++)
    process.stdout.write(" *");
  console.log()
}
let size = 6, time = 3;
pattern();