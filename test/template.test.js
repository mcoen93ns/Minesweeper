const {
  createInitialGrid,
  createGridForLog,
  addMineToGrid,
  generateRandomCoordinates,
} = require("../src/template");

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
  describe("There should also be a copy of the game board that will be shown to the user. Initially, this board should not show anything. For simplicity, we will show dashes", () => {
    it("1x1 --> -", () => {
      expect(createGridForLog([[0]])).toEqual("-");
    });
    it(`3x3 --> - - -
                - - -
                - - -`, () => {
      expect(
        createGridForLog([
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ])
      ).toEqual(`- - -
- - -
- - -`);
    });
  });
  describe("Mines have to be added to the game board. The mines are represented by Xs", () => {
    it("x0y0 --> [[X,0,0],[0,0,0],[0,0,0]]", () => {
      const grid = createInitialGrid(3);
      addMineToGrid(grid, 0, 0);
      expect(grid).toEqual([
        ["X", 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ]);
    });
    it("x1y1 --> [[0,0,0],[0,X,0],[0,0,0]]", () => {
      const grid = createInitialGrid(3);
      addMineToGrid(grid, 1, 1);
      expect(grid).toEqual([
        [0, 0, 0],
        [0, "X", 0],
        [0, 0, 0],
      ]);
    });
    it("x2y2 --> [[0,0,0],[0,0,0],[0,0,X]]", () => {
      const grid = createInitialGrid(3);
      addMineToGrid(grid, 2, 2);
      expect(grid).toEqual([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, "X"],
      ]);
    });
  });
  describe("We need to generate random coordinates for the mines. The coordinates should be within the grid", () => {
    it("x and y should be between 0 and 2 when the grid is 3x3", () => {
      const grid = createInitialGrid(3);
      const [x, y] = generateRandomCoordinates(grid);
      expect(x).toBeGreaterThanOrEqual(0);
      expect(x).toBeLessThanOrEqual(2);
      expect(y).toBeGreaterThanOrEqual(0);
      expect(y).toBeLessThanOrEqual(2);
    });
  });
});
