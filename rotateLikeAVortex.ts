function rotateVortex(arr: number[][]): number[][] {
  const copyArr = arr.map((item) => [...item])
  const circles = []
  const result = []
  let centerNumber: boolean | number = false

  // make circles
  while (copyArr.length > 0) {

    if (copyArr.length === 1) {
      centerNumber = copyArr[0][0];
      break
    }

    const top = copyArr.shift()
    const right = []
    const bottom = copyArr.pop().reverse()
    const left = []

    for (let item of copyArr) {
      right.push(item.pop())
      left.unshift(item.shift())
    }
    circles.push([...top, ...right, ...bottom, ...left])
  }

  // make rotation
  circles.map((item, index) => {
    for (let i = 0; i < (index + 1) * item.length / 4; i++) {
      item.push(item.shift())
    }
  })

  if (centerNumber) {
    result.push([centerNumber])
  }

  // puts the circles into an array
  circles.reverse().map((item, index) => {
    const len = item.length
    if (len === 4) {
      result.push([item[0], item[1]], [item[3], item[2]]);
      return
    }
    result.unshift(item.splice(0, result[0].length + 2))
    result.push(item.splice(result.length - 1, result[0].length).reverse())

    for (let i = 0; i < item.length / 2; i++) {
      result[i + 1].push(item[i]);
      result[i + 1].unshift(item[item.length - 1 - i]);
    }
  })

  return result
}

const arrr = [
  [5, 3, 6, 1, 8, 3],
  [5, 8, 7, 4, 3, 2],
  [1, 2, 4, 3, 5, 8],
  [3, 1, 2, 2, 4, 9],
  [7, 9, 3, 4, 1, 2],
  [2, 5, 6, 1, 7, 8]
];
console.table(rotateVortex(arrr))
