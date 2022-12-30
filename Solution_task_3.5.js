while (employee.some(el => el[0] === "hireDate")){
    employee.splice(employee.findIndex(el => el[0] === "hireDate"), 1)
  }
  employee.push(["jobName", "IT PROG"])
  console.log(employee)