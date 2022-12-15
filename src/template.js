/* eslint-disable no-param-reassign */
function createInitialGrid(size) {
  const grid = [];
  for (let i = 0; i < size; i += 1) {
    const row = [];
    for (let j = 0; j < size; j += 1) {
      row.push(0);
    }
    grid.push(row);
  }
  return grid;
}

function createGridForLog(grid) {
  return grid.map((row) => row.map(() => "-").join(" ")).join("\n");
}

function addMineToGrid(grid, x, y) {
  grid[y][x] = "X";
}

module.exports = { createInitialGrid, createGridForLog, addMineToGrid };
