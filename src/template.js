function createInitialGrid(size) {
  return Array(size).fill(Array(size).fill(0));
}

module.exports = { createInitialGrid };
