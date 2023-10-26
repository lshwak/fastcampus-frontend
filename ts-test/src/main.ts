// 1)
const el = document.querySelector('.title')
if (el) {
  el.textContent = 'Hello world!'
}


// 2)
function getNumber(x: number | null | undefined) {
  if (x) {
    return Number(x!.toFixed(2))
  }
}
getNumber(3.1415926535)
getNumber(null)

// 3)
function getValue(x: string | number, isNumber: boolean) {
  if (isNumber) {
    return Number((x as number).toFixed(2))
  }
  return (x as string).toUpperCase()
}
getValue('hello world', false)  // 'HELLO WORLD'
getValue(3.1415926535, true)  // 3.14

let num!: number
console.log(num)
num = 123