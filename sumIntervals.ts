// DESCRIPTION:
// Write a function called sumIntervals/sum_intervals() that accepts an array of intervals, 
// and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

// Intervals
// Intervals are represented by a pair of integers in the form of an array. 
// The first value of the interval will always be less than the second value. 
// Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

// Overlapping Intervals
// List containing overlapping intervals:

// [
//   [1,4],
//   [7, 10],
//   [3, 5]
// ]
// The sum of the lengths of these intervals is 7. 
// Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.

const arrD = [
  [1, 5],
  [10, 20],
  [1, 6],
  [16, 19],
  [5, 11]
]

function sumIntervals(arr: number[][]): number {
  return arr.map((item: number[]) => [...item])
    .sort((a, b) => a[0] - b[0])
    .filter((item, index, array) => {
      if (index === array.length - 1) {
        return true
      }
      if (item[1] > array[index + 1][1]) {
        array.splice(index + 1, 1)
        return true
      }
      if (item[1] > array[index + 1][0]) {
        array[index + 1][0] = item[1]
      }
      return true
    })
    .reduce((prev, item) => {
      return prev + item[1] - item[0]
    }, 0)
}

console.log(sumIntervals(arrD))