function quickSort(arr) {
  if (arr.length < 2) {
    return arr
  }
  const pivot = arr.pop()

  const less = arr.reduce((accumulator, cur) => {
    return cur <= pivot ? [...accumulator, cur] : accumulator
  }, [])

  const more = arr.reduce((accumulator, cur) => {
    return cur > pivot ? [...accumulator, cur] : accumulator
  }, [])

  return [...quickSort(less), pivot, ...quickSort(more)]
}

function sortWithCopy(arr) {
  copy = [...arr]
  return quickSort(copy)
}

const arr = [109, 136, 156, 188, 19, 190, 2, 34, 55, 90]

console.log(sortWithCopy(arr))
