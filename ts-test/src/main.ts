// 1)
const el = document.querySelector('body')
el.textContent = 'Hello world!'

// 2)
function getNumber(x: number | null | undefined) {
  return Number(x?.toFixed(2)
}
getNumber(3.1415926535)
getNumber(null)

// 3)
function getValue(x: string | number, isNumber: boolean) {
  if (isNumber) {
    return Number(x.toFixed(2))
  }
  return (x as string).toUpperCase()
}
getValue('hello world', false)  // 'HELLO WORLD'
getValue(3.1415926535, true)  // 3.14