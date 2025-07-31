function replaceFirstWithLast(word) {
  let l = word.length - 1;
  if (l < 1) return word;

  let ar = word.split("");
  [ar[0], ar[l]] = [ar[l], ar[0]];

  return ar.join("");
}

console.log(replaceFirstWithLast("olzerE")); // Elzero
console.log(replaceFirstWithLast("Hello")); // oelloH
console.log(replaceFirstWithLast("dawouD"));
console.log(replaceFirstWithLast("oellH"));
console.log(replaceFirstWithLast("dooG"));
console.log(replaceFirstWithLast("go"));
console.log(replaceFirstWithLast("g"));
