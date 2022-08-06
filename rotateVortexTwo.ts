function rotateVortexTwo(arr) {
  const result = []
  const len = arr.length
  for (let i = 0; i < len; i++) {
    result.push([])
  }

  // function rotate array
  function rotationMatrix(result: number[][]): void {
    const arr = result.map((item) => [...item])
    const side = arr.length
    for (let i = 0; i < side; i++) {
      for (let j = 0; j < side; j++) {
        result[j][i] = arr[i][side - j - 1];
      }
    }
  }

  // setting parameters
  let level = Math.floor(len / 2) - 1
  let side = 1
  if (len % 2) {
    result[level + 1][level + 1] = arr[level + 1][level + 1]
    side++
  }

  // adds a ring on each iteration. After adding a new ring, rotate the array
  while (level >= 0) {
    for (let i = level; i < level + side; i++) {
      result[level][i] = arr[level][i]
      result[i][level + side] = arr[i][level + side]
      result[level + side][level * 2 - i + side] = arr[level + side][level * 2 - i + side]
      result[level * 2 - i + side][level] = arr[level * 2 - i + side][level]
    }
    rotationMatrix(result)
    side += 2
    level--
  }

  return result
}

const data = [
  [5, 3, 6, 1, 8, 3],
  [5, 8, 7, 4, 5, 2],
  [1, 2, 4, 3, 5, 8],
  [3, 1, 2, 2, 4, 9],
  [7, 9, 3, 4, 1, 2],
  [2, 5, 6, 1, 7, 8]
];

const dataTwo = [
  [5, 3, 6, 1, 8, 3, 1],
  [5, 8, 7, 4, 5, 2, 3],
  [1, 2, 4, 3, 5, 8, 4],
  [3, 1, 2, 2, 4, 9, 7],
  [7, 9, 3, 4, 1, 2, 1],
  [2, 5, 6, 1, 7, 8, 3],
  [3, 7, 2, 8, 3, 1, 8]
];


console.table(rotateVortexTwo(data))
console.table(rotateVortexTwo(dataTwo))
