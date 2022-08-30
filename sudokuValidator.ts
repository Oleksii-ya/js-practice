// DESCRIPTION:
// Sudoku Background
// Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, 
// so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9.

// Sudoku Solution Validator
// Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, 
// and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, 
// which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

// The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.

function validateSolution(arr: number[][]): boolean {
  const gridPos = [0, 0]

  for (let y = 0; y < 9; y++) {
    const columnArr = []
    const gridArr = []

    for (let x = 0; x < 9; x++) {
      if (arr[x][y] === 0) {
        return false
      }
      columnArr[x] = arr[x][y]
    }

    for (let i = 0; i < 3; i++) {
      gridArr.push(...arr[gridPos[0] + i].slice(gridPos[1], gridPos[1] + 3))
    }

    if (new Set(columnArr).size < 9
      ||
      new Set(arr[y]).size < 9
      ||
      new Set(gridArr).size < 9
    ) {
      return false
    }

    if (gridPos[1] < 6) {
      gridPos[1] += 3
      continue
    }

    if (gridPos[1] === 6) {
      gridPos[1] = 0
      gridPos[0] += 3
    }

  }

  return true
}

const arrrr = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]

console.log(validateSolution(arrrr))