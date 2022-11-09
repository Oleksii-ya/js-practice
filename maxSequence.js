// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:
// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. 
// If the list is made up of only negative numbers, return 0 instead.
// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

function maxSequenceSecond(arr) {
  return arr.reduce((prev, item) => {
    prev.cur + item >= 0 ? prev.cur += item : prev.cur = 0
    if (prev.cur > prev.glob) {
      prev.glob = prev.cur
    }
    return prev
  }, { glob: 0, cur: 0 }).glob
}

function maxSequence(arr) {
  const workArr = arr.reduce((prev, item) => {
    if (item === 0) {
      return prev
    }
    if (prev.length === 0) {
      return item <= 0 ? prev : [item]
    }
    lastInd = prev.length - 1
    Math.sign(prev[lastInd]) === Math.sign(item) ? prev[lastInd] += item : prev.push(item)

    return prev
  }, [])

  if (workArr[workArr.length - 1] < 0) {
    workArr.pop()
  }

  return workArr.reduce((prev, item, index, arr) => {

    if (index === 0) {
      prev.glob = item
      prev.cur = item
      return prev
    }
    if (item < 0) {
      return prev
    }

    const prevMinus = arr[index - 1]
    prev.cur = prev.cur > -prevMinus ? prev.cur + prevMinus + item : item
    if (prev.cur > prev.glob) {
      prev.glob = prev.cur
    }
    return prev

  }, { glob: 0, cur: 0 }).glob

}

// console.log(maxSequence([-2, -12, 0, 0, 0, 1, 55, -3, 4, -1, 2, 8, 1, -5, 4, -11, -8, 0, -10, 0, 0]))
// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
// console.log(maxSequence([7, 4, 11, -11, 39, 36, 10, -6, 37, -10, -32, 44, -26, -34, 43, 43]))
// console.log(maxSequence([-17,12,-28,45,45,36,36,26,39,-29,22,21,7,-43,23,-46,14,16,27,12,41,22,-47,-33,-45,19,9,-5,-4,-12,-35,19,-13,49,-28,-20,18,-36,49,-24,8]))

console.log(maxSequence([100, -10, 15]))
