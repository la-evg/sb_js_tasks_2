const sortByUp = (a, b) => {
    const aArr = a.length;
    const bArr = b.length;
    if (aArr == bArr) return 0;
    if (aArr < bArr) return 1;
    if (aArr > bArr) return -1;
  }
function intersection(array1, array2) {
  return array1.filter(num => array2.includes(num))
}
console.log(intersection(array_1, array_2).sort(sortByUp))