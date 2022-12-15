function createInitialGrid(size) {
  return Array(size).fill(Array(size).fill(0));
}

// Create a copy of the grid with the same size but with dashes instead of zeroes that will be printed in the log, should contain line breaks
function createGridForLog(grid) {
  return grid.map((row) => row.map(() => "-").join(" ")).join("\n");
}

module.exports = { createInitialGrid, createGridForLog };
