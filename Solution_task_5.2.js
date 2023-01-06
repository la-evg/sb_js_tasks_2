let empValues = []
for (const [key, value] of Object.entries(employees)){
  if (typeof value != "function"){
    empValues.push(key)
  }
}
console.log(empValues.join(", "))