// function fibSeq(n) => number - возвращает n-е число фибоначчи
// Example: fibSeq(8) returns 13

const fibSeq = (n: number): number => {
  let result: number = 1

  function add(one: number, two: number): void {
    n--
    if (n === 0) {
      return
    }
    result = one + two
    one = two
    two = result
    add(one, two)
  }
  add(0, 1)

  return result
}

console.log(fibSeq(8)) 