// const findPalindrome = (word: string): string => {
//   const results = [];
//   for (let i = 0; i < word.length - 1; i++) {
//     for (let j = i + 1; j <= word.length; j++) {
//       const substr = word.substring(i, j);
//       if (palindrome(substr)) results.push(substr)
//     }
//   }
//   return results.reduce((acc, word) => {
//     return acc.length > word.length ? acc : word;
//   })
// }

function isPalindrome(word) {
  const wordStr = word.toString()
  return wordStr === wordStr.split('').reverse().join('')
}


function serchPali(eword) {
  const result = []

  for (let i = 0; i < eword.length; i++) {
    for (let j = i + 1; j < eword.length; j++) {
      if (eword[i] === eword[j]) {
        const variant = eword.slice(i, j + 1)
        if (checkPali(variant)) {
          result.push(variant)
        }
      }
    }
  }
  return result
}
console.log(isPalindrome(11))