// DESCRIPTION:
// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:

const times = numOne => numTwo => numTwo * numOne
const plus = numOne => numTwo => numTwo + numOne
const minus = numOne => numTwo => numTwo - numOne
const dividedBy = numOne => numTwo => Math.floor(numTwo / numOne)

const zero = (cb? : ()=> number) => {
  if (!cb) {
    return 0
  }
  return cb(0)
}
const one = (cb) => {
  if (!cb) {
    return 1
  }
  return cb(1)
}
const two = (cb) => {
  if (!cb) {
    return 2
  }
  return cb(2)
}
const three = (cb) => {
  if (!cb) {
    return 3
  }
  return cb(3)
}
const four = (cb) => {
  if (!cb) {
    return 4
  }
  return cb(4)
}
const five = (cb) => {
  if (!cb) {
    return 5
  }
  return cb(5)
}
const six = (cb) => {
  if (!cb) {
    return 6
  }
  return cb(6)
}
const seven = (cb? : ()=> number) => {
  if (!cb) {
    return 7
  }
  return cb(7)
}
const eight = (cb) => {
  if (!cb) {
    return 8
  }
  return cb(8)
}
const nine = (cb) => {
  if (!cb) {
    return 9
  }
  return cb(9)
}

console.log(seven(times(five())))
console.log(four(plus(nine())))
console.log(eight(minus(three())))
console.log(six(dividedBy(two())))