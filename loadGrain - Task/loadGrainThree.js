function loadGrain(arr) {
  if (arr.length < 3) {
    return 0
  }

  const boat = [...arr]
  let check

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      check = i
      break
    }
    boat.shift()
  }
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] > arr[i - 1]) {
      if (i === check) {
        throw new Error("this boat can't use to delivery")
      }
      break
    }
    boat.pop()
  }
  if (arr.length < 3) {
    return 0
  }

  const minSide = Math.min(boat[0], boat[boat.length - 1])

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
    }
  }

  // indices is an array of sides indices in the array boat
  const indices = boat.reduce((prev, current, ind) => {
    if (ind === 0) {
      prev.push(ind)
      return prev
    }

    if (ind === boat.length - 1) {
      prev.push(ind)
      deleteMiddle(prev, boat)
      return prev
    }

    if (current > minSide) {
      prev.push(ind)
      deleteMiddle(prev, boat)
    }
    return prev
  }, [])

  let i = 0

  const resultObj = boat.reduce((prev, cur, ind) => {
    if (ind === boat.length - 1) {
      return prev
    }

    // prev.curMin - the top of the grain level (minimum height between two sides)
    if (ind === indices[i]) {
      prev.curMin = Math.min(boat[indices[i]], boat[indices[++i]])
      return prev
    }

    // prev.total - the total sum of all grain levels
    prev.total += prev.curMin - cur
    return prev
  }, { curMin: 0, total: 0 })

  return resultObj.total
}

console.log(loadGrain([4, 1, 3]))
console.log(loadGrain([2, 1, 5, 2, 7, 4, 10]))
console.log(loadGrain([2, 0, 1, 5, 2, 7]))
// console.log(loadGrain([2, 4, 2]))
// console.log(loadGrain([7, 4]))
// console.log(loadGrain([]))