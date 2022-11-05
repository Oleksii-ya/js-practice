// Please write a function changeWordsOrder(str) which returns string based on str where the words order 
// is changed by length of words from shortest to longest
// Example: changeWordsOrder("Hello World my dear friends") should return "my dear Hello World friends"
// IMPORTANT: punctuation symbols should be interpreted as a part of some word

function changeWordsOrder(str) {
  const arr = str.split(' ')
  const res = []
  while (arr.length) {
    let minVal = 10000
    let minIndex = 0
    arr.forEach((item, index) => {
      if (item.length < minVal) {
        minVal = item.length
        minIndex = index
      }
    });
    res.push(arr.splice(minIndex, 1))
  }
  return res.join(' ')
}

console.log(changeWordsOrder("Hello World my dear friends"))