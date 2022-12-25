let count = [0, 0]
for (word of words){
  word.toLowerCase() === word.split("").reverse().join("").toLowerCase() ? count[0] += 1 : count[1] += 1;
}
console.log(count)