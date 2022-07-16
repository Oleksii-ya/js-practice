function spiral(h, w) {

  result = []
  for (i = 0; i < h; i++) {
    result.push([])
  }

  let params = {
    maxLine: h * w,
    line: 1,
    top: 0,
    bottom: h - 1,
    left: 0,
    right: w - 1
  }

  function moveRowRight(params, result) {
    let { maxLine, line, top, left, right } = params
    if (line > maxLine) {
      return
    }

    for (let i = left; i <= right; i++) {
      result[top][i] = line
      line++
    }

    top += 1
    moveColumnDown({ ...params, line, top }, result)
  }

  function moveColumnDown(params, result) {
    let { maxLine, line, top, bottom, right } = params
    if (line > maxLine) {
      return
    }

    for (let i = top; i <= bottom; i++) {
      result[i][right] = line
      line++
    }

    right -= 1
    moveRowLeft({ ...params, line, right }, result)
  }

  function moveRowLeft(params, result) {
    let { maxLine, line, bottom, left, right } = params
    if (line > maxLine) {
      return
    }

    for (let i = right; i >= left; i--) {
      result[bottom][i] = line
      line++
    }

    bottom -= 1
    moveColumnUp({ ...params, line, bottom }, result)
  }

  function moveColumnUp(params, result) {
    let { maxLine, line, top, bottom, left } = params
    if (line > maxLine) {
      return
    }

    for (let i = bottom; i >= top; i--) {
      result[i][left] = line
      line++
    }

    left += 1
    moveRowRight({ ...params, line, left }, result)
  }

  moveRowRight(params, result)

  return result
}

console.log(spiral(13, 6))