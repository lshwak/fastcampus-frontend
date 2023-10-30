  interface Fruits {
    [item: number]: string
  }
  const fruits: Fruits = ['Apple', 'Banana', 'Cherry']
  console.log(fruits[1])

  interface User {
    [key: string]: unknown
    name: string
    age: number
  }
  const heropy: User = {
    name: 'Heropy',
    age: 35
  }
  heropy['isValid'] = true
  heropy['email'] = ['thesecon@gmail.com', 'test@gmail.com']
  console.log(heropy)