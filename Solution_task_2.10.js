const sortElem = (a, b) => {
    const aArr = a;
    const bArr = b;
    if (aArr == bArr) return 0;
    if (aArr < bArr) return -1;
    if (aArr > bArr) return 1;
  }
  let numbers = randValues.filter(el => Number.isInteger(el))
  let words = randValues.filter(el => typeof el === "string")
  randValues = [...numbers.sort(sortElem), ...words.sort(sortElem)]
  console.log(randValues)