for (var value in values){
    if (typeof values[value] === "boolean"){
      values.splice(value, 1, "Булевый тип")
      break
    }
  }
  console.log(values)