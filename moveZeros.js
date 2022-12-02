// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

const moveZeros = (arr) => {
  const res = arr.reduce((prev, cur) => {
    cur === 0 ? prev[1].push(0) : prev[0].push(cur)
    return prev
  }, [[], []])
  return [...res[0], ...res[1]]
}

// console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]))