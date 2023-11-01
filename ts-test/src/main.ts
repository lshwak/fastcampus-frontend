class UserA {
  constructor(
    public first: string, 
    public last: string, 
    public age: number) {
  }
  protected getAge() {
    return `${this.first} ${this.last} is ${this.age}`
  }
}
class UserB extends UserA {
  getAge() {
    return `${this.first} ${this.last} is ${this.age}`
  }
}
class UserC extends UserB {
  getAge() {
    return `${this.first} ${this.last} is ${this.age}`
  }
}

const neo = new UserA('Neo', 'Andercon', 102)
console.log(neo.first)
console.log(neo.last)
console.log(neo.age)
neo.getAge()