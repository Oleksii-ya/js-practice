// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

const hashtagGenerator = (str) => {
  const cutStr = str.trim()
  if (cutStr.length === 0) {
    return false
  }

  const result = "#" + cutStr.split(' ').map((item) => {
    return item === '' ? '' : item[0].toUpperCase() + item.slice(1)
  }).join('')

  return result.length > 140 ? false : result
}

console.log(hashtagGenerator("    Hello     World   "))
console.log(hashtagGenerator(" Hello there thanks for trying my Kata"))