function add(val: string | number) {
  let res = 'Result => '
  if (typeof val === 'number') {
    res += val.toFixed(2)
  } else {
    res += val.toUpperCase()
  }
  console.log(res)
}

add(3.141592)
add('hello world')