interface Obj {
 x: number 
}
type Arr = [number, number]


function toArray<T>(a: T, b: T) {
  return [a, b]
}

console.log(
  toArray('Neo', 'Anderson'),
  toArray(1, 2),
  toArray(true, false),
  toArray({x: 1}, {x: 2}),
  toArray<Arr>([1, 2], [3, 4])
)