// DESCRIPTION:
// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100
// Attention: If the number has leading zeros the amount of digits should be considered.

function incremention(str: string) {
  let index = str.length - 1

  if (isNaN(+str[index])) {
    return str + '1'
  }

  while (true) {
    if (isNaN(+str[index]) || str[index] === '0') {
      break
    }
    index--
  }
  let wordStr = str.slice(0, ++index)
  const wordNum = str.slice(index)
  const incremented = (+wordNum + 1) + ''

  if (wordNum.length !== incremented.length
    &&
    wordStr[wordStr.length - 1] === '0') {
    wordStr = wordStr.slice(0, wordStr.length - 1)
  }

  return wordStr + incremented
}

console.log(incremention('foo3213bar32323'))
console.log(incremention('erwe'))
console.log(incremention('foo0043'))
console.log(incremention('foo9'))
console.log(incremention('foo099'))
