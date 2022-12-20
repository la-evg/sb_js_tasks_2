let numbers = layout.match(/\d+/g)

if (numbers != null) {
  numbers = numbers.map(el => {
    if (el % 2 === 0) {
      return el * el;
    }
    else {
      return +el;
    }
  })
  console.log(numbers)
}
else {
  console.log([])
}