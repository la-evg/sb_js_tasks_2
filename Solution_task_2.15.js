let valuesNum = values.filter((e) => !isNaN(parseInt(e)))
let total = valuesNum.reduce(
  (previousValue, currentItem) => parseInt(previousValue) + parseInt(currentItem), 0)
console.log(total)