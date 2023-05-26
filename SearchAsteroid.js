// Task:
// In a certain part of space, there is a stationary asteroid with a unique mineral. A new type of simple disposable probes has been developed to precisely locate it. 
// When activated, these probes determine the exact distance from themselves to the asteroid once.
// You need to write a function that will set the activation coordinates for the probes and, given the distances from each probe to the asteroid, 
// find the coordinates of the asteroid, using the fewest number of probes.
// To simplify the task, let's assume that the part of space where the rare asteroid is located and where the probes can be launched is limited 
// to an imaginary cube of size 100x100x100. The coordinates of the asteroid and the probes can only be integers from 0 to 100.
// Input parameters:
// To select the coordinates of the asteroid, you need to write a function that will generate a random location for the asteroid a(x, y, z). 
// You also need to prepare a separate function that, given the coordinates of a probe, will return the distance between it and point a.
// Output:
// As a result, the program should return the coordinates of the asteroid (location), the number of probes used (probes.count), and their coordinates (probes.coordinates).


// Completed the task for a cube of dimensions 1 billion * 1 billion * 1 billion (10^27 possible combinations). 
// The approximate number of probes needed to search for an asteroid is 140 pieces

const getRandomPos = () => {
  const getRandomNum = () => {
    return Math.floor(Math.random() * 1000000001)
  }
  return { x: getRandomNum(), y: getRandomNum(), z: getRandomNum() }
}

const getFooDistance = () => {
  const starPos = getRandomPos()
  let count = 0
  const calcDist = (obj) => {
    count++
    return ((starPos.x - obj.x) ** 2 + (starPos.y - obj.y) ** 2 + (starPos.z - obj.z) ** 2) ** 0.5
  }
  const giveCount = () => count

  return { giveCount, calcDist }
}

const getDist = getFooDistance()

const findPos = () => {
  // current coordinates of the search point
  const res = { "x": 500000000, "y": 500000000, "z": 500000000 }
  const memoDist = {}

  // search along one axis
  const findAxis = (axis, isLast = false) => {

    // check after changing to a new position (move) we became closer to the star or not
    const checkPos = (pos) => {
      const cur = { ...res, [axis]: pos }
      const curStr = JSON.stringify(cur)
      const prevStr = JSON.stringify(res)

      let curDist
      let prevDist

      if (curStr in memoDist) {
        curDist = memoDist[curStr]
      } else {
        curDist = getDist.calcDist(cur)
        memoDist[curStr] = curDist
      }

      if (prevStr in memoDist) {
        prevDist = memoDist[prevStr]
      } else {
        prevDist = getDist.calcDist(res)
        memoDist[prevStr] = prevDist
      }

      return curDist < prevDist
    }

    //our search limits
    const border = { left: 0, right: 1000000000 }

    // the point we are looking for is closer, all other options will move away

    const check = () => {
      return isLast === false ? checkPos(res[axis] + 1) || checkPos(res[axis] - 1) : getDist.calcDist(res) === 0
    }

    while (check()) {
      const stRight = Math.ceil((res[axis] + border.right) / 2)
      if (checkPos(stRight)) {
        border.left = res[axis] + 1
        res[axis] = stRight
        continue
      }

      const stLeft = Math.floor((res[axis] + border.left) / 2)
      if (checkPos(stLeft)) {
        border.right = res[axis] - 1
        res[axis] = stLeft
        continue
      }

      border.right = stRight
      border.left = stLeft
    }
  }

  findAxis('x')
  findAxis('y')
  findAxis('z', true)

  return {
    "result": {
      "location": res,
      "probes": {
        "count": getDist.giveCount(),
        "coordinates": Object.keys(memoDist).map((item) => JSON.parse(item))
      }
    }
  }
}

console.log(findPos())