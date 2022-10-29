function pattern(condition) {
  subPattern(condition, 0, true);
  subPattern(condition, size - 2, false);
}
function diamond(space, i, s) {
  for (let j = space; j > i; j--)
    process.stdout.write(" ");
  for (let k = 0; k < i; k++)
    process.stdout.write(s);
}
function subPattern(condition, i_size, for_condition) {
  for (let i = i_size; (for_condition) ? (i < size) : (i > 0); i = for_condition ? i + 1 : i - 1) {
    if (condition === 1)
      diamond(size * 2 + (size / 2), i, " *");
    else {
      diamond(size, i, " *");
      diamond(size * 3 - i, i, "* ");
    }
    console.log()
  }
}
let size = 6;
pattern(1);
pattern(0);
pattern(1);