const { createInitialGrid } = require("../src/template");

describe("This is a testsuite for a game called Minesweeper. The goal of the game is to ADD LATER", () => {
  describe("Minesweeper is played on a game board, which is a square grid. We need to create a starting version of the grid first, filled with 0s", () => {
    it("1x1 --> [[0]]", () => {
      expect(createInitialGrid(1)).toEqual([[0]]);
    });
    it("3x3 --> [[0,0,0],[0,0,0],[0,0,0]]", () => {
      expect(createInitialGrid(3)).toEqual([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ]);
    });
  });
});
