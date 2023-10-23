interface User {
  name: string,
  age: number
}
interface Validation {
  isValid: boolean
}
const herepy: User & Validation = {
  name: 'Neo',
  age: 35,
  isValid: true
}