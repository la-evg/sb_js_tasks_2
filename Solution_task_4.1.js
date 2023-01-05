function getName() {
    return `${this.name} ${this.age}`
}
pet_1.getName = getName;
pet_2.getName = getName;