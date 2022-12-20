
let firstIndex = values.findIndex(el => typeof el === "boolean");
let lastIndex = values.findLastIndex(el => typeof el === "boolean")
let result = values.slice(firstIndex, lastIndex + 1);

console.log(result)