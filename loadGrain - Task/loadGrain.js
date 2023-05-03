function loadGrain(array) {
  if (array.length < 3) {
    return 0
  }

  //mutates the input array
  const deleteMiddle = (arrInd, arr) => {
    const length = arrInd.length

    if (length < 3) {
      return
    }
    const left = arrInd[length - 3]
    const center = arrInd[length - 2]
    const right = arrInd[length - 1]

    const min = Math.min(arr[left], arr[center], arr[right])

    if (min === arr[center]) {
      arrInd.splice(length - 2, 1)
      deleteMiddle(arrInd, arr)
    }
  }

  // indices is an array of sides indices in the array array
  const indices = array.reduce((prev, cur, ind, arr) => {
    if (prev.length === 0) {
      cur > arr[ind + 1]
      prev.push(ind)
      return prev
    }

    if (cur < arr[ind - 1]) {
      return prev
    }

    if (ind === arr.length - 1) {
      prev.push(ind)
      return prev
    }

    if (cur > arr[ind + 1]) {
      prev.push(ind)
      deleteMiddle(prev, arr)
    }

    return prev
  }, [])

  const boat = array.slice(indices[0], indices[indices.length - 1] + 1)

  const resultObj = boat.reduce((prev, cur, ind, arr) => {
    if (ind === arr.length - 1) {
      return prev
    }
    // prev.curMin - the top of the grain level (minimum height between two sides)
    if (ind === indices[prev.i]) {
      prev.curMin = Math.min(arr[indices[prev.i]], arr[indices[++prev.i]])
      return prev
    }

    if (cur >= prev.curMin) {
      return prev
    }

    // prev.total - the total sum of all grain levels
    prev.total += prev.curMin - cur
    return prev
  }, { curMin: 0, total: 0, i: 0 })

  return resultObj.total
}

console.log(loadGrain([4, 1, 3]))
console.log(loadGrain([2, 1, 5, 2, 7, 4, 10, 8, 5, 7, 4, 2]))
console.log(loadGrain([2, 0, 1, 5, 2, 7]))
console.log(loadGrain([2, 4, 2]))
console.log(loadGrain([7, 4]))
console.log(loadGrain([]))
console.log(loadGrain([2, 1, 5, 2, 7, 4, 10, 8, 5, 7, 4, 2, 1, 0, 10, 14, 18, 9, 4, 5, 66, 34, 4, 43543, 5, 345, 3, 4]))