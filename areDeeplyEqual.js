const areDeeplyEqual = (o1, o2) => {
  let res = true

  const checkFoo = (o1, o2) => {
    if ((o1 === null) || (o2 === null)) {
      if (o2 !== o1) {
        res = false
      }
      return
    }

    // basic simple situation
    if ((typeof o1 !== 'object') || (typeof o2 !== 'object')) {
      if (o1 !== o2) {
        res = false
      }
      return
    }

    const isArr1 = Array.isArray(o1)
    const isArr2 = Array.isArray(o2)
    if (isArr1 || isArr2) {
      if (isArr1 !== isArr2) {
        res = false
        return
      }
      if (o1.length !== o2.length) {
        res = false
        return
      }
      for (let i = 0; i < o1.length; i++) {
        if (res === false) {
          return
        }
        checkFoo(o1[i], o2[i])
      }
      return
    }

    const keys1 = Object.keys(o1)
    const keys2 = Object.keys(o2)
    if (keys1.length !== keys2.length) {
      return false
    }

    for (let val of keys1) {
      if (res === false) {
        return
      }
      checkFoo(o1[val], o2[val])
    }
  }

  checkFoo(o1, o2)
  return res
}

const o1 = { "x": null, "L": [1, 2, 3] }
const o2 = { "x": null, "L": ["1", "2", "3"] }

// const o1 = { "y": 2, "x": 1 }
// const o2 = { "x": 1, "y": 2 }

console.log(areDeeplyEqual(o1, o2))