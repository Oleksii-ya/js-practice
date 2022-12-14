// Your program should get two parameters from command line:
// - string of size N^2, that describes square matrix of characters N*N;
// - string that describes given word.
// The first string is converting to matrix using the following rule. String "QWEASDZXC" forms the matrix:

// ['Q','W','E',
// 'A','S','D',
// 'Z','X','C']

// Your program should print to the console the sequence of cells those build the given word.
// Every next character of word can be placed just in the neighbor cell: on the top, on the bottom,
// on the left or on the right from the cell with previous character.
// E.g. if it is given matrix "QLGNAEKIRLRNGEAE" and word "KING", then sequence of cells will be [1,2]->[1,3]->[0,3]->[0,2]
// After solving the task test it carefully with different examples.

// QLGN
// AEKI
// RLRN
// GEAE


const searchCell = (strArr, strWord) => {
  // init data
  const n = Math.sqrt(strArr.length)
  let res
  let firstInd = 0
  let attempt
  let exit = false

  // function search for the first character, resetting the input parameters
  const addFirstCell = () => {
    firstInd = strArr.indexOf(strWord[0], firstInd)
    if (firstInd === -1) {
      exit = true
      return
    }
    res = [[Math.floor(firstInd / n), firstInd % n]]
    attempt = [4]
    firstInd++
  }

  addFirstCell()
  if (exit) {
    return "No match"
  }

  const giveVal = (arr) => {
    return strArr[arr[0] * n + arr[1]]
  }

  const searchCell = () => {
    const lastAttempt = attempt.length - 1
    const val = strWord[lastAttempt + 1]
    const last = res[res.length - 1]
    const spin = attempt[lastAttempt]

    // check up
    attempt[lastAttempt]--
    if (spin > 3) {
      const up = [last[0] - 1, last[1]]
      if (up[0] >= 0 && giveVal(up) === val) {
        res.push(up)
        attempt.push(4)
        return
      }
    }

    // check right
    attempt[lastAttempt]--
    if (spin > 2) {
      const right = [last[0], last[1] + 1]
      if (right[1] <= n && giveVal(right) === val) {
        res.push(right)
        attempt.push(4)
        return
      }
    }

    // check down
    attempt[lastAttempt]--
    if (spin > 1) {
      const down = [last[0] + 1, last[1]]
      if (down[0] <= n && giveVal(down) === val) {
        res.push(down)
        attempt.push(4)
        return
      }
    }

    // check left
    attempt[lastAttempt]--
    if (spin > 0) {
      const left = [last[0], last[1] - 1]
      if (left[1] >= 0 && giveVal(left) === val) {
        res.push(left)
        attempt.push(4)
        return
      }
    }
    res.pop()
    attempt.pop()
  }

  while (firstInd !== -1) {
    while (attempt[0] > 0) {
      searchCell()
      if (res.length === strWord.length) {
        return res
      }
    }

    addFirstCell()
    if (exit) {
      return "No match"
    }
  }
}

console.log(searchCell("QLONWRAEKINGRLRNREGEAEFHRRTEGERDGHDH", "KING"))
console.log(searchCell("QLGNWRAEKINGRLRNREGEAEFHRRTEGERDGHDH", "KING"))