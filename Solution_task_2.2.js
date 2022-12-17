const reg = /\d{2}\D{2}$/
let newNumbers = []
for (let numbers of partNumbers){
  if (numbers.match(reg) !== null){
    newNumbers.push(numbers)
  }
}
console.log(newNumbers)