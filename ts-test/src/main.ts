import { getFullName, User } from './user'

const heropy: User = {
  firstName: 'Heropy',
  lastName: 'Kim',
  age: 85,
  isValid: true
}
const fullName = getFullName(heropy)

console.log(fullName)
console.log(heropy.isValid)