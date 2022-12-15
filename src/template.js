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

function generateRandomCoordinates(grid) {
  const x = Math.floor(Math.random() * grid.length);
  const y = Math.floor(Math.random() * grid.length);
  return [x, y];
}

// function createGridWithMines(size, mines) {
//   const grid = createInitialGrid(size);
//   for (let i = 0; i < mines; i += 1) {
//     const [x, y] = generateRandomCoordinates(grid);
//     addMineToGrid(grid, x, y);
//   }
//   return grid;
// }
function isMine(grid, x, y) {
  return grid[y][x] === "X";
}

module.exports = {
  createInitialGrid,
  createGridForLog,
  addMineToGrid,
  generateRandomCoordinates,
  // createGridWithMines,
  isMine,
};
