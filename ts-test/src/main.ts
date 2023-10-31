function add1(a: string, b: string) {
  return a + b
}
function add2(a: number, b: number) {
  return a + b
}
add1('hello', 'world') // 'hello world'
add2(1, 2) // 3
add1('hello', 2)
add2('hello', 2)

function add(a: string, b: string): string
function add(a: number, b: number): number
function add(a: any, b: any) {
  return a + b
}
add('hello', 'world') // 'hello world'
add(1, 2) // 3
add('hello', 2)
add(1, 'world')