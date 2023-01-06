const user = {
  firstName : firstName,
  lastName : lastName,
  set fullName(value) {
    return this.firstName = value.split(" ")[0], 
      this.lastName = value.split(" ")[1]
  },
  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}