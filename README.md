# Kata Minesweeper
Atomic behaviors

Create a grid of x by x cells and give them all the value 0

✔ 1x1 --> [[0]]
✔ 3x3 --> [[0, 0, 0], [0, 0, 0], [0, 0, 0]]

Create a grid that will be shown to the user, intially empty cells

✔ 1x1 --> '-'
✔ 3x3 --> '- - -
           - - -
           - - -'

Add a mine (X) to the board on provided coordinates

Consider this grid: [[0, 0, 0], [0, 0, 0], [0, 0, 0]]

✔ x: 0, y: 0 --> [[X, 0, 0], [0, 0, 0], [0, 0, 0]]
✔ x: 1, y: 0 --> [[0, X, 0], [0, 0, 0], [0, 0, 0]]
✔ x: 1, y: 2 --> [[0, 0, 0], [0, 0, 0], [0, X, 0]]

Generate random x and y coordinates for the mines, based on the grid size

Consider this grid: [[0, 0, 0], [0, 0, 0], [0, 0, 0]]

✔ x and y >= 0 && <= 2

Check how many mines are directly next to a cell in a row

✔ 0, [0, 0, 0] --> 0
✔ 0, [0, X, 0] --> 1
✔ 1, [X, 0, 0] --> 1
✔ 1, [X, 0, X] --> 2

Check how many mines are directly above and below a cell

✔ x0y0, [[0, 0, 0], [0, 0, 0], [0, 0, 0]] --> 0
✔ x0y0, [[0, 0, 0], [0, X, 0], [0, 0, 0]] --> 0
✔ x0y0, [[0, 0, 0], [X, 0, 0], [0, 0, 0]] --> 1
✔ x0y1, [[X, 0, 0], [0, 0, 0], [X, 0, 0]] --> 2

Check how many mines are directly diagonal to a cell

✔ x0y0, [[0, 0, 0], [0, 0, 0], [0, 0, 0]] --> 0
✔ x0y0, [[0, 0, 0], [0, X, 0], [0, 0, 0]] --> 1
✔ x1y1, [[0, 0, X], [0, 0, 0], [X, 0, 0]] --> 2
✔ x1y1, [[X, 0, X], [0, 0, 0], [X, 0, X]] --> 4

Game board with mines added to it: determine the values of the other cells (number of surrounding mines)

✔ [[0, 0, 0], [0, 0, 0], [0, 0, 0]] --> [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
✔ [["X", 0, 0], [0, 0, 0], [0, 0, 0]] --> [["X", 1, 0], [1, 1, 0], [0, 0, 0]]
✔ [["X", "X", "X"], [0, 0, 0], [0, 0, 0]] -->  [["X", "X", "X"], [2, 2, 2], [0, 0, 0]]


INTEGRATION: Create a grid and add mines to it

3x3, 0 mines
3x3, 1 mine
3x3, 3 mines

Not testable....

Check if a cell is a mine

Consider this grid: [[0, 0, 0], [0, X, 0], [0, 0, 0]]

✔ x: 0, y: 0 --> false
✔ x: 1, y: 1 --> true
✔ x: 2, y: 2 --> false

