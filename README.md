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
