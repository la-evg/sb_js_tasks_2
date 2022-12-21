const sortByLength = (a, b) => {
    const aArr = a.length;
    const bArr = b.length;
    if (aArr == bArr) return 0;
    if (aArr < bArr) return -1;
    if (aArr > bArr) return 1;
  }
  
console.log(array.sort(sortByLength))