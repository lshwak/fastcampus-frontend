interface GetName {
  (param: string): string
}
interface User {
  name: string
  age: number
  getName: GetName
}
const heropy: User = {
  name: 'Heropy',
  age: 35,
  getName(message: string) {
    console.log(message)
    return this.name
  }
}
heropy.getName('Hello~')